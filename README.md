# Cites Mobile App

### Environment Setup

- Follow this instructions to install React Native: https://facebook.github.io/react-native/docs/getting-started
- Make sure you have ESLint extension installed for your code editor. For VS Code: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

### App Setup

- `$ git clone https://jyotiGupta007@bitbucket.org/daf-jyoti/cites.git`
- `$ cd cites`

- Install the project dependencies:

  - `$ yarn`

- To complete the linking on iOS, make sure you have Cocoapods installed. Then run:

  - `$ cd ios && pod install && cd ..`

### App Start

- `$ yarn start`

On another tab run:

- `$ yarn android` or
- `$ yarn ios`

### Development process

- Branches should use the convention `CTS-1234-title-kebab-case`, where CTS is the acronym for the project name, 1234 is the ticket id (only if you have one) and the rest is the name you want to give to your branch (try to use the name of the ticket if you have one).

  - `CTS-1234-fix-navigation`
  - `CTS-initial-implementation`

## Use of the translation function

Values are fetched from `./locale/en.json`. Please use the format `context.content` when creating new keys (eg `footer.title`, `menu.subTitle`)

```jsx
import {View, Text} from 'react-native';

import {useIntl} from 'react-intl';

const Home = () => {
  const intl = useIntl();

  return (
    <View>
      <Text>
        Translated text: {intl.formatMessage({id: 'mainbanner.title'})}
      </Text>
    </View>
  );
};

export default Home;
```

## Use of Themes

We have predefined colors and we should always use one of them to style our components:

```jsx
import {View, Text, StyleSheet} from 'react-native';

import {useTheme, RawColors} from '@styles/Themes';

const Home = () => {
  const Theme = useTheme();
  return (
    <View style={{backgroundColor: Theme.primary}}>
      <Text style={{color: RawColors.black}}>My text</Text>
    </View>
  );
};

export default Home;
```

## Use of Form

We have a Form component to handle our forms:

```jsx
import {useForm} from 'react-hook-form';

import {Form} from '@organisms';
import Constants from '@utils/Constants';

const Home = () => {
  const formProps = useForm();
  const {handleSubmit, control, errors} = formProps;

  return (
    <Form
      control={control}
      formProps={formProps}
      errors={errors}
      formFields={[
        {
          defaultValue: '',
          fieldType: Constants.DATEPICKER,
          label: 'Email address',
          name: 'email', // Key against which value will be stored
          rules: {required: 'Required Value'}, // Check rules prop in react-hook-form
          ...otherProps, // Props that needs to be passed to the field component
        },
      ]}
    />
  );
};

export default Home;
```

## Component Organisation

We are following React Atomic design for component organisation.

- Atoms : The smallest possible components, such as buttons, titles, inputs or event color pallets, animations etc.

- Molecules : They are the composition of one or more components of atoms.

- Organisms : The combination of molecules that work together or even with atoms that compose more elaborate interfaces.
