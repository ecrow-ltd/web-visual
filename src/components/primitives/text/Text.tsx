import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled, { CSSObject } from 'styled-components';
import { IPropsTheme, ITheme } from '@themes/ITheme';
import DefaultTheme from '@themes/Default.theme';

export interface IProps {
  variant:
    | 'base'
    | 'button'
    | 'title'
    | 'subtitle'
    | 'heading1'
    | 'heading2'
    | 'heading3'
    | 'subheading'
    | 'paragraph'
    | 'quote'
    | 'small';
}

export interface IState {}

/**
 * Styling for a component.
 */
export const Styled = styled.div<IProps>((props: IProps & IPropsTheme) => {
  const theme: ITheme = props.theme || DefaultTheme;
  const { variant } = props;

  // Styling for this component.
  let style: CSSObject = { ...theme.font.base, ...theme.font[variant] };

  return style;
});

/**
 * The component
 */
class Text extends Component<IProps, IState> {
  public static propTypes = {};

  public static defaultProps = {
    variant: 'base',
  };

  public render() {
    return <Styled {...this.props}>{this.props.children}</Styled>;
  }
}

export default Text;
