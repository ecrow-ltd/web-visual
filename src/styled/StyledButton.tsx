import styled, { CSSObject } from "styled-components";
import DefaultTheme from "./themes/Default.theme";
import { VARIANTS as THEME_VARIANTS } from "./themes/ITheme";

export const VARIANTS = THEME_VARIANTS;
export const INTERACTIONS: string[] = ["normal", "inversion"];

export interface IProps {
  /** Disable component */
  disabled: boolean;
  /** Interaction type */
  interaction: "normal" | "inversion";
  /** Variant type */
  variant: "neutral" | "positive" | "negative" | "creative" | "destructive";
}

const interactionNormal = (props: any) => {
  return {
    "&:hover": {
      boxShadow: "0 0 2px #999",
      filter: "brightness(110%)"
    },

    "&:active": {
      filter: "brightness(80%)",
      transition: `filter ${props.duration}ms`
    },

    "backgroundColor": props.background.value,
    "backgroundPosition": "center",
    "border": "none",
    "borderRadius": props.borderRadius,
    "boxShadow": "0 0 1px transparent",
    "color":
      props.background.type === "dark"
        ? props.textColor.light
        : props.textColor.dark,
    "cursor": "pointer",
    "filter": "brightness(100%)",
    "fontFamily": props.fontSize,
    "fontSize": props.fontSize,
    "outline": "none",
    "padding": "6px 12px",
    "transition": `all ${props.duration}ms`
  };
};

const interactionInversion = (props: any) => {
  return {
    "&:hover": {
      backgroundColor: props.background.value,
      boxShadow: "0 0 2px #999",
      color:
        props.background.type === "dark"
          ? props.textColor.light
          : props.textColor.dark,
      filter: "brightness(110%)"
    },

    "&:active": {
      filter: "brightness(80%)",
      transition: `filter ${props.duration}ms`
    },

    "backgroundColor": "transparent",
    "backgroundPosition": "center",
    "border": "none",
    "borderRadius": props.borderRadius,
    "boxShadow": "0 0 1px transparent",
    "color":
      props.background.type === "dark"
        ? props.textColor.dark
        : props.textColor.light,
    "cursor": "pointer",
    "filter": "brightness(100%)",
    "fontFamily": props.fontSize,
    "fontSize": props.fontSize,
    "outline": "none",
    "padding": "6px 12px",
    "transition": `all 375ms`
  };
};

/**
 * Common Button Component
 */
const StyledButton = styled.button<IProps>((props) => {
  // Extract Properties
  const buttonProps = props.theme.color.common[props.variant];
  const fontProps = props.theme.font.button;
  const disabled = props.disabled;

  const disabledStyle = {
    opacity: 0.6,
    pointerEvents: "none",
    userSelect: "none"
  };

  // An object of properties containing only what the button needs.
  const styleProps = {
    background: {
      type: buttonProps.type,
      value: buttonProps.value
    },
    borderRadius: props.theme.shape.borderRadius,
    duration: props.theme.transition.duration.standard,
    fontSize: fontProps.size,
    textColor: {
      dark: props.theme.color.text.dark[props.variant],
      light: props.theme.color.text.light[props.variant]
    }
  };

  let style = {};
  switch (props.interaction) {
    case "inversion":
      style = interactionInversion(styleProps);
      break;
    default:
      style = interactionNormal(styleProps);
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
