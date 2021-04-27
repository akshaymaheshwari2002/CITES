import React, {useState, useMemo, useEffect, useCallback} from 'react';
import {View, Text} from 'react-native';
import {s, vs, ScaledSheet} from 'react-native-size-matters';
import {useSelector} from 'react-redux';

import {Container, TextInput, Button} from '@atoms';
import CommonStyles from '@styles/CommonStyles';
import {getIntl} from '@utils/Intl';
import {RawColors, Fonts} from '@styles/Themes';

const Search = ({navigation}) => {
  const [searchString, setSearchString] = useState('');
  const [searchResultFiltered, setSearchResultFilterd] = useState([]);
  const locale = useSelector((state) => state.persistedReducer.locale);
  const intlMessages = useMemo(() => getIntl(locale)?.messages, [locale]);
  const routeNames = useMemo(
    () => navigation?.dangerouslyGetState()?.routeNames,
    [navigation],
  );

  const executeSearch = useCallback(() => {
    const messagesKeys = Object.keys(intlMessages ?? {});
    let __searchResults = [];
    for (let index = 0; index < messagesKeys.length; index++) {
      const element = intlMessages[messagesKeys[index]];
      const route = messagesKeys[index].split('.')[1];
      let section = '';
      if (route === 'FormOne') {
        section = 'STEP ONE';
      }
      if (
        route === 'FormTwo' ||
        route === 'FormThree' ||
        route === 'FormOneSummary' ||
        route === 'FormTwoSummary' ||
        route === 'FormThreeSummary'
      ) {
        section = 'STEP TWO';
      }
      if (route === 'FormFour' || route) {
        section = 'STEP THREE';
      }
      if (element?.toLowerCase()?.includes(searchString.toLowerCase())) {
        __searchResults.push({
          key: messagesKeys[index],
          value: element,
          targetRoute: messagesKeys[index].split('.')[1],
          section: section ? section : route,
        });
      }
    }

    __searchResults = __searchResults.filter((el) => {
      if (
        (el.key.split('.')[0] === 'screen' ||
          el.key.split('.')[0] === 'form' ||
          el.key.split('.')[0] === 'questionContent') &&
        routeNames.includes(el.targetRoute)
      ) {
        return true;
      } else {
        return false;
      }
    });

    setSearchResultFilterd(__searchResults);
  }, [intlMessages, routeNames, searchString]);

  useEffect(() => {
    if (searchString) {
      executeSearch();
    } else {
      setSearchResultFilterd([]);
    }
  }, [searchString, executeSearch, routeNames]);

  return (
    <Container safeAreaViewProps={{edges: ['right', 'left']}}>
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder={'Search'}
          style={styles.input}
          value={searchString}
          onChange={setSearchString}
        />
      </View>

      <Container.ScrollView
        style={CommonStyles.flex1}
        contentContainerStyle={CommonStyles.screenContainer}>
        <View style={CommonStyles.flex1}>
          {searchResultFiltered?.map((el) => {
            return (
              <View key={el.key} style={styles.buttonWrapper}>
                <Button
                  onPress={() => {
                    navigation.navigate(el.targetRoute);
                  }}
                  buttonStyle={() => styles.button}
                  buttonContent={
                    <>
                      <View style={styles.resultWrapper}>
                        <Text style={[styles.text, {...Fonts.Lato20B}]}>
                          {el.section}
                        </Text>
                        <Text numberOfLines={2} style={styles.text}>
                          {el.value}
                        </Text>
                      </View>
                    </>
                  }
                />
              </View>
            );
          })}
        </View>
      </Container.ScrollView>
    </Container>
  );
};

export default Search;

const styles = ScaledSheet.create({
  inputWrapper: {
    backgroundColor: RawColors.snow,
  },
  input: {
    marginTop: vs(5),
    marginBottom: vs(63),
    height: vs(36),
    borderRadius: vs(10),
    marginHorizontal: vs(16),
    paddingHorizontal: vs(40),
    backgroundColor: RawColors.approxDolphin,
  },
  buttonWrapper: {
    width: '100%',
    minHeight: s(120),
    paddingVertical: s(15),
    paddingLeft: '12%',
  },
  button: {
    flex: 1,
    alignItems: 'flex-start',
    borderRadius: 0,
    borderWidth: 0,
    backgroundColor: '#F6F9EF',
    padding: s(16),
    elevation: s(5),
    ...CommonStyles.shadowEffectDarker,
  },
  resultWrapper: {
    marginBottom: vs(10),
    flexDirection: 'column',
  },
  text: {
    flex: 1,
    color: 'black',
    textTransform: 'capitalize',
    ...Fonts.Lato15R,
  },
});
