export const VARIANTS: string[] = [
  "neutral",
  "positive",
  "negative",
  "creative",
  "destructive"
];

export interface IColorType {
  value: string;
  type: string;
}

export interface IColor {
  background: IColorType;
  common: {
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
      creative: string;
      destructive: string;
    };
    dark: {
      neutral: string;
      positive: string;
      negative: string;
      creative: string;
      destructive: string;
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
  transition: {
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
