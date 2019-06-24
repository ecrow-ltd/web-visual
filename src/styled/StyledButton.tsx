import styled from "styled-components";
import { ITheme } from "./themes/ITheme";

export interface IProps {
  variant: string;
}

/**
 * Common Button Component
 */
const StyledButton = styled.button<IProps>((props) => {
  // Extract Properties
  const buttonProps = props.theme.color.button[props.variant];
  const textProps =
    buttonProps.type === "dark"
      ? props.theme.color.text.light
      : props.theme.color.text.dark;
  const fontProps = props.theme.font.button;

  const backgroundColor = buttonProps.value;
  const textColor = textProps.neutral;
  const fontSize = fontProps.size;

  const duration = props.theme.transition.duration.standard;
  const borderRadius = props.theme.shape.borderRadius;

  return {
    "&:hover": {
      filter: "brightness(110%)"
    },

    "&:active": {
      filter: "brightness(80%)",
      transition: `filter ${duration}ms`
    },

    "backgroundColor": backgroundColor,
    "backgroundPosition": "center",
    "border": "none",
    "borderRadius": borderRadius,
    "boxShadow": "0 0 1px #999",
    "color": textColor,
    "cursor": "pointer",
    "filter": "brightness(100%)",
    "fontFamily": fontSize,
    "fontSize": fontSize,
    "outline": "none",
    "padding": "6px 12px",
    "transition": `filter ${duration}ms`
  };
});

export default StyledButton;
