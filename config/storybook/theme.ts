import { create } from "@storybook/theming";

export default create({
  base: "light",

  colorPrimary: "#486089",
  colorSecondary: "#203456",

  // UI
  appBg: "#486089",
  appBorderColor: "#486089",
  appBorderRadius: 3,
  appContentBg: "white",

  // Text colors
  textColor: "black",
  textInverseColor: "rgba(0,0,0,0.9)",

  // Toolbar default and active colors
  barBg: "#d5dce8",
  barSelectedColor: "#474747",
  barTextColor: "#474747",

  // Form colors
  // inputBg: "red",
  // inputBorder: "silver",
  // inputBorderRadius: 4,
  // inputTextColor: "black",

  brandImage: "/logo-white.png",
  brandTitle: "My custom storybook"
});
