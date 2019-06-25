import React, { Component } from "react";
import StyledButton, {
  IProps as StyledButtonIProps
} from "../styled/StyledButton";

/**
 * React Props Interface
 */
export interface IProps extends StyledButtonIProps {
  /**
   * Callback when the button is clicked.
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

/**
 * React State Interface
 */
export interface IState {}

/**
 * A Standard Button Component
 */
export class Button extends Component<IProps, IState> {
  public static defaultProps: IProps = {
    disabled: false,
    interaction: "normal",
    onClick: () => {},
    variant: "neutral"
  };

  /**
   * @inheritdoc
   */
  public render() {
    return <StyledButton {...this.props} />;
  }
}

export default Button;
