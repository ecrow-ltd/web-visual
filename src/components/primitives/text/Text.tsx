import DefaultAttire from '@attire/default';
import { IThemeProps } from '@attire/ITheme';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled, { CSSObject } from 'styled-components';

export interface IProps {
  /**
   * Custom color.
   */
  color: string;

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
  const { theme, color, variant } = props;

  const fontColor = color.length ? color : theme.color.base.font;

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
    color: PropTypes.string,
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
    color: '',
    variant: 'base',
  };

  public render() {
    return <Styled {...this.props} />;
  }
}

export default Text;
