import React from "react";
import StyledButton, {
  IProps as StyledButtonIProps
} from "../styled/StyledButton";

export interface IProps extends StyledButtonIProps {}
export interface IState {}

class Button extends React.Component<IProps, IState> {
  public static defaultProps: IProps = {
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
