export interface IColorType {
  color: string;
  type: string;
}

export interface IColor {
  background: IColorType;
  button: {
    neutral: IColorType;
    positive: IColorType;
    negative: IColorType;
    creative: IColorType;
    destructive: IColorType;
  };
  text: {
    light: {
      neutral: string;
      positive: string;
      negative: string;
    };
    dark: {
      neutral: string;
      positive: string;
      negative: string;
    };
  };
}

export interface IFont {
  family: string;
  size: number | string;
  weight: {
    light: number;
    regular: number;
    medium: number;
    bold: number;
  };
}

export interface ITheme {
  color: IColor;
  font: IFont & {
    button: IFont;
  };
  shadow: string[];
  shape: { borderRadius: number };
  transitions: {
    easing: {
      easeInOut: string;
      easeOut: string;
      easeIn: string;
      sharp: string;
    };
    duration: {
      shortest: number;
      shorter: number;
      short: number;
      standard: number;
      complex: number;
      entering: number;
      leaving: number;
    };
  };
}
