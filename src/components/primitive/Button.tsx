import PropTypes from "prop-types";
import React, { Component } from "react";
import styled, { CSSObject } from "styled-components";

export interface IProps {
  /**
   * Disable component
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
  /**
   * Callback when the button is clicked.
   */
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export interface IState {}

/**
 * Styling for a button element.
 */
export const Styled = styled.button<IProps>((props) => {
  // Extract the theme and component properties.
  const { theme, disabled, indicate, variant } = props;

  // Store a boolean indicating if the button varient should be inverted.
  const inverted = variant === "inversion";

  // Get the indicate color from the theme.
  const indicateColor = theme.color.indicate[indicate];

  // Get the text color influenced on the theme by the base color mode.
  const textColorMode = inverted ? "dark" : "light";
  const textColor = inverted ? indicateColor : theme.color.text[textColorMode];

  // Declare a mutable styling for this component.
  let style: CSSObject = {
    backgroundColor: inverted ? "transparent" : indicateColor,
    backgroundPosition: "center",
    border: "none",
    borderRadius: theme.shape.border.radius,
    boxShadow: theme.shadow[0],
    color: textColor,
    filter: "brightness(100%)",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: 12,
    outline: "none",
    padding: "6px 12px",
    transform: "scale(1)",
    transition: `all ${theme.transition.duration.complex}ms`
  };

  // Apply touchable CSS events to the button
  style["&:hover"] = theme.touchable.hover;
  style["&:active"] = theme.touchable.active;

  // If disabled is applied, assign the disabled theme properties to the style.
  if (disabled) {
    style = { ...style, ...theme.touchable.disabled };
  }

  return style;
});

/**
 * A standard button component.
 */
class Button extends Component<IProps, IState> {
  public static propTypes = {
    disabled: PropTypes.bool,
    indicate: PropTypes.oneOf([
      "neutral",
      "positive",
      "negative",
      "creative",
      "destructive"
    ]),
    onClick: PropTypes.func,
    variant: PropTypes.oneOf(["normal", "inversion"])
  };

  public static defaultProps = {
    disabled: false,
    indicate: "neutral",
    onClick: () => {},
    variant: "normal"
  };

  public render() {
    return <Styled {...this.props} />;
  }
}

export default Button;
