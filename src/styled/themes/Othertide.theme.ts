import DefaultTheme from "./Default.theme";
import { ITheme } from "./ITheme";

const OthertideTheme: ITheme = {
  ...DefaultTheme,
  font: {
    button: {
      family: "Roboto, Helvetica, Arial, sans-serif",
      size: 12,
      weight: {
        bold: 700,
        light: 300,
        medium: 500,
        regular: 400
      }
    },
    family: "Roboto, Helvetica, Arial, sans-serif",
    size: 12,
    weight: {
      bold: 700,
      light: 300,
      medium: 500,
      regular: 400
    }
  }
};

export default OthertideTheme;
