import { ITheme } from "./ITheme";

const DefaultTheme: ITheme = {
  color: {
    base: {
      mode: "light",
      value: "white"
    },
    complement: {
      mode: "light",
      value: "gainsboro"
    },
    indicate: {
      creative: "forestgreen",
      destructive: "firebrick",
      negative: "darkred",
      neutral: "dimgrey",
      positive: "royalblue"
    },
    text: {
      dark: "dimgrey",
      light: "beige"
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
  touchable: {
    active: {
      filter: "brightness(80%)",
      transform: "scale(0.95)",
      transition: `all 200ms`
    },
    hover: {
      filter: "brightness(110%)",
      transition: `all 200ms`
    }
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
