import DefaultAttire from '@attire/default';
import { IThemeProps } from '@attire/ITheme';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled, { CSSObject } from 'styled-components';

export interface IProps {
  /**
   * Indicates a type of theme coloring to use.
   */
  indicate:
    | 'base'
    | 'neutral'
    | 'positive'
    | 'negative'
    | 'creative'
    | 'destructive';

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
export const Styled = styled.span<IProps>((props: IProps & IThemeProps) => {
  const { theme, indicate, variant } = props;

  const fontColor = theme.color[indicate].font;

  // Styling for this component.
  const style: CSSObject = {
    ...theme.font.base,
    ...theme.font[variant],
    color: fontColor,
    transition: `all ${theme.transition.duration.complex}ms`,
  };

  return style;
});

Styled.defaultProps = {
  theme: DefaultAttire.primary,
};

/**
 * The component
 */
class Text extends Component<IProps, IState> {
  public static propTypes = {
    indicate: PropTypes.oneOf([
      'base',
      'neutral',
      'positive',
      'negative',
      'creative',
      'destructive',
    ]),
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
    indicate: 'base',
    variant: 'base',
  };

  public render() {
    return <Styled {...this.props} />;
  }
}

export default Text;
