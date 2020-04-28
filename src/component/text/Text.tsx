import ThemeContext from '@context/ThemeContext';
import { IThemeProps } from '@theme/ITheme';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
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

  /**
   * The value of the text.
   */
  value: string;
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
    border: 'none',
    color: fontColor,
    transition: `all ${theme.transition.duration.complex}ms`,
  };

  if (!selectable) {
    style = {
      ...style,
      MozUserSelect: 'none',
      WebkitUserSelect: 'none',
      msUserSelect: 'none',
      outline: 'none',
      pointerEvents: 'none',
      userSelect: 'none',
    };
  }

  return style;
});

/**
 * Displays typography in its many variations. It is reactive to applied themes.
 */
class Text extends PureComponent<IProps, IState> {
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
    value: 'example',
    variant: 'base',
  };

  public render() {
    const { children, ...props } = this.props;
    return (
      <ThemeContext.Consumer>
        {(theme) => (
          <Styled {...props} theme={theme}>
            {this.props.value}
          </Styled>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default Text;
