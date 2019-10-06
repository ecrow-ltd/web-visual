import { CSSObject } from "styled-components";

export interface IColorIndicate {
  readonly neutral: string;
  readonly positive: string;
  readonly negative: string;
  readonly creative: string;
  readonly destructive: string;
}

export interface IColor {
  /**
   * The default base color for the theme.
   */
  base: string;
  /**
   * The complementary color to the base color.
   */
  complement: string;
  /**
   * Indication color shades
   */
  indicate: IColorIndicate;
}

export interface IFont {
  readonly family: string;
  readonly opacity: number;
  readonly size: number | string;
  readonly style: string;
  readonly color: string;
  readonly weight: number;
}

export interface IFontOptional {
  readonly family?: string;
  readonly opacity?: string;
  readonly size?: number | string;
  readonly style?: string;
  readonly color?: string;
  readonly weight?: number;
}

export interface ITheme {
  readonly color: IColor;
  readonly font: {
    readonly base: IFont;
    readonly title: IFontOptional;
    readonly subtitle: IFontOptional;
    readonly heading1: IFontOptional;
    readonly heading2: IFontOptional;
    readonly heading3: IFontOptional;
    readonly subheading: IFontOptional;
    readonly paragraph: IFontOptional; 
    readonly quote: IFontOptional;
    readonly small: IFontOptional;
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
    readonly ease: {
      readonly inOut: string;
      readonly out: string;
      readonly in: string;
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

export interface IPropsTheme {
  theme: ITheme
}