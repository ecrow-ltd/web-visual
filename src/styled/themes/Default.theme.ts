import { ITheme } from "./ITheme";

const DefaultTheme: ITheme = {
  color: {
    background: {
      type: "light",
      value: "white"
    },
    button: {
      creative: { value: "dodgerblue", type: "dark" },
      destructive: { value: "firebrick", type: "dark" },
      negative: { value: "darkred", type: "dark" },
      neutral: { value: "dimgrey", type: "dark" },
      positive: { value: "royalblue", type: "dark" }
    },
    text: {
      dark: {
        negative: "darkred",
        neutral: "dimgrey",
        positive: "darkgreen"
      },
      light: {
        negative: "lightcoral",
        neutral: "ghostwhite",
        positive: "palegreen"
      }
    }
  },
  font: {
    button: {
      family: "Roboto, Helvetica, Arial, sans-serif",
      size: 14,
      weight: {
        bold: 700,
        light: 300,
        medium: 500,
        regular: 400
      }
    },
    family: "Roboto, Helvetica, Arial, sans-serif",
    size: 14,
    weight: {
      bold: 700,
      light: 300,
      medium: 500,
      regular: 400
    }
  },
  shadow: [
    "none",
    "0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12)",
    "0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12)",
    "0px 1px 8px 0px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 3px 3px -2px rgba(0,0,0,0.12)",
    "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
    "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
    "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
    "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)"
  ],
  shape: {
    borderRadius: 4
  },
  transition: {
    duration: {
      complex: 375,
      entering: 225,
      leaving: 195,
      short: 250,
      shorter: 200,
      shortest: 150,
      standard: 300
    },
    easing: {
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
    }
  }
};

export default DefaultTheme;
