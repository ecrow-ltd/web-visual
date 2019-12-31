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

  /**
   * Determines the text is selectable.
   */
  selectable: boolean;
}

export interface IState {}

/**
 * Styling for a component.
 */
export const Styled = styled.span<IProps>((props: IProps & IThemeProps) => {
  const { theme, indicate, variant, selectable } = props;

  const fontColor = theme.color[indicate].font;

  // Styling for this component.
  let style: CSSObject = {
    ...theme.font.base,
    ...theme.font[variant],
    color: fontColor,
    transition: `all ${theme.transition.duration.complex}ms`,
  };

  if (!selectable) {
    style = {
      ...style,
      userSelect: 'none',
      msUserSelect: 'none',
      MozUserSelect: 'none',
      WebkitUserSelect: 'none',
    };
  }

  return style;
});

Styled.defaultProps = {
  theme: DefaultAttire.primary,
};

/**
 * Displays typography in its many variations. It is reactive to applied themes.
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
    selectable: PropTypes.bool,
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
    selectable: true,
    variant: 'base',
  };

  public render() {
    return <Styled {...this.props} />;
  }
}

export default Text;
