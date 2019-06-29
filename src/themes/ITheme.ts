import { CSSObject } from "styled-components";

export interface IColorType {
  readonly value: string;
  readonly mode: string;
}

export interface IColorIndicate {
  readonly neutral: string;
  readonly positive: string;
  readonly negative: string;
  readonly creative: string;
  readonly destructive: string;
}

export interface IColorText {
  readonly dark: string;
  readonly light: string;
}

export interface IColor {
  /**
   * The default base color for the theme.
   */
  base: IColorType;
  /**
   * The complementary color to the base color.
   */
  complement: IColorType;
  /**
   * Indication color shades should always be to be the inverse of the base color's mode.
   * For Instance, a base in "light" mode should have dark indication colors.
   */
  indicate: IColorIndicate;
  text: IColorText;
}

export interface IFont {
  readonly family: string;
  readonly size: number | string;
  readonly weight: {
    readonly light: number;
    readonly regular: number;
    readonly medium: number;
    readonly bold: number;
  };
}

export interface ITheme {
  readonly color: IColor;
  readonly font: IFont & {
    readonly button: IFont;
  };
  readonly shadow: string[];
  readonly shape: {
    border: {
      thickness: number;
      radius: number;
    };
  };
  readonly touchable: {
    disabled: CSSObject;
    active: CSSObject;
    hover: CSSObject;
  };
  readonly transition: {
    readonly easing: {
      readonly easeInOut: string;
      readonly easeOut: string;
      readonly easeIn: string;
      readonly sharp: string;
    };
    readonly duration: {
      readonly shortest: number;
      readonly shorter: number;
      readonly short: number;
      readonly standard: number;
      readonly complex: number;
      readonly entering: number;
      readonly leaving: number;
    };
  };
}
