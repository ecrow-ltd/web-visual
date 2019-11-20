import PropTypes from "prop-types";
import React, { Component } from "react";
import styled, { CSSObject } from "styled-components";
import { IPropsTheme } from "@themes/ITheme";

export interface IProps {}

export interface IState {}

/**
 * Styling for a component.
 */
export const Styled = styled.div<IProps>((props: IProps & IPropsTheme) => {
  // Styling for this component.
  let style: CSSObject = {};

  return style;
});

/**
 * The component
 */
class COMPONENT_NAME extends Component<IProps, IState> {
  public static propTypes = {};

  public static defaultProps = {};

  public render() {
    return <Styled {...this.props}>Hello World</Styled>;
  }
}

export default COMPONENT_NAME;
