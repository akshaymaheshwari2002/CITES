import {createTheming} from '@callstack/react-theme-provider';

const Themes = {
  DEFAULT: {
    primaryColor: '#000000',
  },
};

const RawColors = {};

const {ThemeProvider, useTheme} = createTheming(Themes.DEFAULT);

export {ThemeProvider, useTheme, Themes, RawColors};
