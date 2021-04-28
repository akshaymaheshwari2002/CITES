import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useIntl} from 'react-intl';
import {useForm} from 'react-hook-form';

import {Images} from '@assets';
import {Fonts, RawColors} from '@styles/Themes';
import {Container, Button, Loader} from '@atoms';
import {Form} from '@organisms';
import CommonStyles from '@styles/CommonStyles';
import useAxios from 'axios-hooks';
import {useDispatch, useSelector} from 'react-redux';
import {
  createFeedbackConfig,
  getFeedbackConfig,
  updateFeedbackConfig,
} from '@services';
import {setFeedbackId} from '@store/slices/persistedSlice';
import FormTwoSummary from './FormTwoSummary';

const emojis = [
  {rating: 5, emoji: Images.emojiOne},
  {rating: 4, emoji: Images.emojiTwo},
  {rating: 3, emoji: Images.emojiThree},
  {rating: 2, emoji: Images.emojiFour},
  {rating: 1, emoji: Images.emojiFive},
];

const FeedbackTwo = ({navigation: {navigate}}) => {
  const dispatch = useDispatch();
  const {formatMessage} = useIntl();
  const {control, errors, handleSubmit, setValue} = useForm();
  const feedbackId = useSelector((state) => state.persistedReducer.feedbackId);
  const [rating, setRating] = useState(0);
  const [
    {data: createFeedbackResponse, loading: createFeedbackLoading},
    executeCreateFeedback,
  ] = useAxios(createFeedbackConfig(), {manual: true});
  const [
    {loading: updateFeedbackLoading},
    executeUpdateFeedback,
  ] = useAxios(updateFeedbackConfig(), {manual: true});
  const [
    {data: getFeedbackResponse, loading: getFeedbackLoading},
    executeGetFeedback,
  ] = useAxios(getFeedbackConfig(), {manual: true});

  const _handleSubmit = useCallback(
    async ({comment}) => {
      if (feedbackId) {
        await executeUpdateFeedback({
          url: updateFeedbackConfig({feedbackId}).url,
          data: {comment, noOfStars: rating},
        });
      } else {
        await executeCreateFeedback({data: {comment, noOfStars: rating}});
      }
      navigate('HomePage');
    },
    [
      executeCreateFeedback,
      executeUpdateFeedback,
      feedbackId,
      navigate,
      rating,
    ],
  );

  useEffect(() => {
    if (feedbackId) {
      executeGetFeedback({url: getFeedbackConfig({feedbackId}).url});
    }
  }, [executeGetFeedback, feedbackId]);

  useEffect(() => {
    if (createFeedbackResponse?.id) {
      dispatch(setFeedbackId(createFeedbackResponse.id));
    }
  }, [createFeedbackResponse, dispatch]);

  useEffect(() => {
    if (getFeedbackResponse?.id) {
      setRating(getFeedbackResponse.noOfStars);
      setValue('comment', getFeedbackResponse.comment);
    }
  }, [getFeedbackResponse, setValue]);

  return (
    <>
      <Container safeAreaViewProps={{edges: ['right', 'left']}}>
        <Container.ScrollView
          contentContainerStyle={CommonStyles.screenContainer}
          style={CommonStyles.flex1}>
          <View style={styles.title}>
            <Text style={styles.titleContent}>
              {formatMessage({id: 'screen.FeedbackTwo.headerPartOne'})}
            </Text>
            <Text style={styles.titleContent}>
              {formatMessage({id: 'screen.FeedbackTwo.headerPartTwo'})}
            </Text>
          </View>
          <Text style={styles.question}>
            {formatMessage({id: 'screen.FeedbackTwo.question'})}
          </Text>
          <View style={styles.iconContainer}>
            {emojis.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setRating(item.rating)}>
                <Image
                  source={item.emoji}
                  style={
                    rating === item.rating ? styles.emojiSelected : styles.emoji
                  }
                />
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.form}>
            <Form
              {...{control, errors}}
              formFields={[
                {
                  defaultValue: '',
                  name: 'comment',
                  rules: {
                    required: formatMessage({id: 'form.error.fieldRequired'}),
                  },
                  placeholder: formatMessage({
                    id: 'screen.FeedbackTwo.content',
                  }),
                  style: styles.formField,
                  multiline: true,
                },
              ]}
            />
          </View>
          <Button
            buttonContent={formatMessage({
              id: 'button.submit',
            })}
            buttonTextStyle={() => {
              return styles.buttonText;
            }}
            buttonStyle={() => {
              return styles.button;
            }}
            onPress={handleSubmit(_handleSubmit)}
          />
        </Container.ScrollView>
      </Container>
      <Loader
        visible={
          getFeedbackLoading || createFeedbackLoading || updateFeedbackLoading
        }
      />
    </>
  );
};

const styles = ScaledSheet.create({
  title: {
    marginVertical: '18@vs',
  },
  emoji: {
    tintColor: RawColors.black,
  },
  emojiSelected: {
    tintColor: RawColors.darkSalmon,
  },
  titleContent: {
    ...Fonts.HelveticaNeue25B,
    //lineHeight: '34@ms',
    letterSpacing: '0.64@ms',
  },
  form: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
    marginTop: '28@vs',
  },
  formField: {
    color: RawColors.black,
    height: '100%',
    borderRadius: '20@ms',
    borderWidth: 1,
    ...Fonts.Lato15R,
    borderColor: RawColors.darkGrey,
    textAlignVertical: 'top',
    backgroundColor: 'white',
    paddingHorizontal: '20@s',
    paddingVertical: '16@vs',
  },
  question: {
    ...Fonts.Lato15B,
    lineHeight: '22@ms',
    letterSpacing: '0.36@ms',
  },
  iconContainer: {
    marginTop: '24@vs',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  button: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: RawColors.sugarCane,
  },
  buttonText: {
    ...Fonts.Lato15R,
    color: RawColors.darkGreyBlue,
  },
});

export default FeedbackTwo;
