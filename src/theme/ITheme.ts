import { CSSObject } from 'styled-components';

export interface IColor {
  /**
   * The background color for the theme.
   */
  background: string;
  /**
   * The font color for the theme.
   */
  font: string;
}

export interface IFont {
  readonly fontFamily: string;
  readonly opacity: number;
  readonly fontSize: number | string;
  readonly fontStyle: string;
  readonly fontWeight: number;
}

export interface IFontOptional {
  readonly fontFamily?: string;
  readonly opacity?: number;
  readonly fontSize?: number | string;
  readonly fontStyle?: string;
  readonly fontWeight?: number;
}

export interface ITheme {
  readonly color: {
    readonly base: IColor;
    readonly creative: IColor;
    readonly destructive: IColor;
    readonly negative: IColor;
    readonly neutral: IColor;
    readonly positive: IColor;
  };
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
    idle: CSSObject;
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

export interface IThemeProps {
  readonly theme: ITheme;
}
