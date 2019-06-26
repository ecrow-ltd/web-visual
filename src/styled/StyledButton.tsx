import styled, { CSSObject } from "styled-components";
import DefaultTheme from "./themes/Default.theme";

export const INTERACTIONS: string[] = ["normal", "inversion"];

export interface IProps {
  /**
   * Disable componen
   */
  disabled: boolean;
  /**
   * Indicate type
   */
  indicate: "neutral" | "positive" | "negative" | "creative" | "destructive";
  /**
   * Variant type
   */
  variant: "normal" | "inversion";
}

const interactionNormal = (props: any) => {
  return {
    "&:hover": {
      boxShadow: "0 0 2px #999",
      filter: "brightness(110%)"
    },

    "&:active": {
      filter: "brightness(80%)",
      transform: "scale(0.95)",
      transition: `all ${props.duration}ms`
    },

    "backgroundColor": props.background,
    "backgroundPosition": "center",
    "border": "none",
    "borderRadius": props.borderRadius,
    "boxShadow": "0 0 1px transparent",
    "color": props.textColor[props.mode],
    "cursor": "pointer",
    "filter": "brightness(100%)",
    "fontFamily": props.fontSize,
    "fontSize": props.fontSize,
    "outline": "none",
    "padding": "6px 12px",
    "transform": "scale(1)",
    "transition": `all ${props.duration}ms`
  };
};

const interactionInversion = (props: any) => {
  return {
    "&:hover": {
      backgroundColor: props.background,
      boxShadow: "0 0 2px #999",
      color: props.textColor[props.mode],
      filter: "brightness(110%)"
    },

    "&:active": {
      filter: "brightness(80%)",
      transform: "scale(0.95)",
      transition: `all ${props.duration}ms`
    },

    "backgroundColor": "transparent",
    "backgroundPosition": "center",
    "border": "none",
    "borderRadius": props.borderRadius,
    "boxShadow": "0 0 1px transparent",
    "color": props.background,
    "cursor": "pointer",
    "filter": "brightness(100%)",
    "fontFamily": props.fontSize,
    "fontSize": props.fontSize,
    "outline": "none",
    "padding": "6px 12px",
    "transform": "scale(1)",
    "transition": `all 375ms`
  };
};

/**
 * Common Button Component
 */
const StyledButton = styled.button<IProps>((props) => {
  // Extract Properties
  const buttonColor = props.theme.color.indicate[props.indicate];
  const fontProps = props.theme.font.button;
  const disabled = props.disabled;

  const disabledStyle: CSSObject = {
    opacity: 0.6,
    pointerEvents: "none",
    userSelect: "none"
  };

  // An object of properties containing only what the button needs.
  const styleProps = {
    background: buttonColor,
    borderRadius: props.theme.shape.borderRadius,
    duration: props.theme.transition.duration.shortest,
    fontSize: fontProps.size,
    mode: props.theme.color.base.mode,
    textColor: {
      dark: props.theme.color.text.dark,
      light: props.theme.color.text.light
    }
  };

  let style: CSSObject = {
    userSelect: "none"
  };
  switch (props.variant) {
    case "inversion":
      style = { ...style, ...interactionInversion(styleProps) };
      break;
    default:
      style = { ...style, ...interactionNormal(styleProps) };
  }

  if (disabled) {
    style = { ...style, ...disabledStyle };
  }

  return style;
});

StyledButton.defaultProps = {
  theme: DefaultTheme
};

export default StyledButton;
