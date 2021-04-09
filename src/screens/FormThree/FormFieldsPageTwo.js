import Constants from '@utils/Constants';
import getValidators from '@utils/FormValidators';
import {getIntl} from '@utils/Intl';

export default () => {
  const {formatMessage} = getIntl();
  //const {required} = getValidators();

  return [
    {
      label: formatMessage({id: 'form.FormThree.label.doYouBreedThisSpecies'}),
      name: 'doYouBreedThisSpecies',
      //rules: {required},
      fieldType: Constants.CHOICELIST,
      mode: 'radio-button',
      items: [
        {
          content: formatMessage({id: 'form.label.yes'}),
          name: Constants.YES,
        },
        {
          content: formatMessage({id: 'form.label.no'}),
          name: Constants.NO,
        },
      ],
    },
    {
      defaultValue: '',
      label: formatMessage({
        id: 'form.FormThree.label.whenDidYouBreedThisSpecies',
      }),
      placeholder: formatMessage({
        id: 'form.FormThree.label.whenDidYouBreedThisSpecies',
      }),
      name: 'whenDidYouBreedThisSpecies',
      //rules: {required},
      headerTextIOS: formatMessage({
        id: 'form.FormThree.label.whenDidYouBreedThisSpecies',
      }),
      fieldType: Constants.DATEPICKER,
    },
    {
      defaultValue: '',
      label: formatMessage({id: 'form.FormThree.label.numberOfLittersPerYear'}),
      placeholder: formatMessage({
        id: 'form.FormThree.label.numberOfLittersPerYear',
      }),
      name: 'numberOfLittersPerYear',
      //rules: {required},
      keyboardType: 'number-pad',
    },
    {
      defaultValue: '',
      label: formatMessage({
        id: 'form.FormThree.label.numberOfOffspringPerLitter',
      }),
      placeholder: formatMessage({
        id: 'form.FormThree.label.numberOfOffspringPerLitter',
      }),
      name: 'numberOfOffspringPerLitter',
      //rules: {required},
      keyboardType: 'number-pad',
    },
    {
      defaultValue: '',
      label: formatMessage({
        id: 'form.FormThree.label.numberProducedInPreviousYear',
      }),
      placeholder: formatMessage({
        id: 'form.FormThree.label.numberProducedInPreviousYear',
      }),
      name: 'numberProducedInPreviousYear',
      //rules: {required},
      keyboardType: 'number-pad',
    },
  ];
};
