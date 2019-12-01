import DefaultTheme from '@themes/Default.theme';
import { IPropsTheme, ITheme } from '@themes/ITheme';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled, { CSSObject } from 'styled-components';

export interface IProps {}

export interface IState {}

/**
 * Styling for a component.
 */
export const Styled = styled.div<IProps>((props: IProps & IPropsTheme) => {
  const { theme } = props;

  // Styling for this component.
  const style: CSSObject = {};

  return style;
});

Styled.defaultProps = {
  theme: DefaultTheme,
};

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
