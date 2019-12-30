import DefaultAttire from '@attire/default';
import { IThemeProps } from '@attire/ITheme';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styled, { CSSObject } from 'styled-components';

export interface IProps {}

export interface IState {}

/**
 * Styling for the component.
 */
export const Styled = styled.div<IProps>((props: IProps & IThemeProps) => {
  const { theme } = props;

  // Styling for this component.
  const style: CSSObject = {};

  return style;
});

Styled.defaultProps = {
  theme: DefaultAttire.primary,
};

/**
 * The component
 */
class COMPONENT_NAME extends PureComponent<IProps, IState> {
  public static propTypes = {};

  public static defaultProps = {};

  public render() {
    return <Styled {...this.props}>Hello World</Styled>;
  }
}

export default COMPONENT_NAME;
