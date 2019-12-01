import DefaultAttire from '@attire/default';
import { ITheme, IThemeProps } from '@attire/ITheme';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled, { CSSObject } from 'styled-components';

export interface IProps {
  /**
   * Variant of the Text
   */
  variant:
    | 'base'
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
export const Styled = styled.div<IProps>((props: IProps & IThemeProps) => {
  const { theme, variant } = props;

  // Styling for this component.
  const style: CSSObject = {
    ...theme.font.base,
    ...theme.font[variant],
    color: theme.color.font,
    transition: `all ${theme.transition.duration.complex}ms`,
  };

  return style;
});

Styled.defaultProps = {
  theme: DefaultAttire.base,
};

/**
 * The component
 */
class Text extends Component<IProps, IState> {
  public static propTypes = {
    variant: PropTypes.oneOf([
      'base',
      'title',
      'subtitle',
      'heading1',
      'heading2',
      'heading3',
      'subheading',
      'paragraph',
      'quote',
      'small',
    ]),
  };

  public static defaultProps = {
    variant: 'base',
  };

  public render() {
    return <Styled {...this.props} />;
  }
}

export default Text;
