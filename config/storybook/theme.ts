import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorPrimary: '#e8edf4',
  colorSecondary: '#486089',

  // UI
  appBg: '#e8edf4',
  appBorderColor: '#e8edf4',
  appBorderRadius: 3,
  appContentBg: 'white',

  // Text colors
  // textColor: "black",
  // textInverseColor: "rgba(0,0,0,0.9)",

  // Toolbar default and active colors
  barBg: '#d5dce8',
  barSelectedColor: '#474747',
  barTextColor: '#474747',

  // Form colors
  // inputBg: "red",
  // inputBorder: "silver",
  // inputBorderRadius: 4,
  // inputTextColor: "black",

  brandImage: '/logo-color.png',
  brandTitle: 'My custom storybook',
});
