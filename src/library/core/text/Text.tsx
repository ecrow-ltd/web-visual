import ThemeContext from '@theme/ThemeContext';
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
   * An empty string or null value will show a skeleton for the text.
   */
  value: string | null;
}

export interface IState {}

/**
 * Styling for a component.
 */
export const Styled = styled.span<IProps & { skeleton: boolean }>(
  (props: IProps & IThemeProps & { skeleton: boolean }) => {
    const { theme, skeleton, indicate, variant, selectable } = props;

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

    if (skeleton) {
      style.background = 'linear-gradient(90deg, #000, #fff, #000)';
      style.backgroundSize = '400% 400%';
      style.backgroundClip = 'text';
      style.color = 'transparent';
      style.opacity = 0.15;
      //style.fontFamily = '"Courier New", Courier, monospace';
      style.overflowWrap = 'break-word';
      style.lineHeight = '1.8';
      style.animation = 'animate-background-position 16s linear infinite';
    }

    style['@keyframes animate-background-position'] = {
      '0%': {
        backgroundPosition: '0% 0%',
      },
      '100%': {
        backgroundPosition: '400% 0%',
      },
    };

    return style;
  },
);

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
    value: null,
    variant: 'base',
  };

  public static nullTextHeading = '\u2588'.repeat(12);
  public static nullTextSubHeading = '\u2588'.repeat(24);
  public static nullTextParagraph = '\u2588'.repeat(256);
  public static nullTextQuote = '\u2588'.repeat(128);

  public render() {
    const { children, ...props } = this.props;
    const { value, variant } = props;
    let text = children;
    let skeleton = false;
    if (!children || (typeof children === 'string' && !children.length)) {
      skeleton = true;
      if (
        ['title', 'heading1', 'heading2', 'heading3', 'base'].indexOf(
          variant,
        ) >= 0
      ) {
        text = Text.nullTextHeading;
      } else if (['subtitle', 'subheading'].indexOf(variant) >= 0) {
        text = Text.nullTextSubHeading;
      } else if (['quote'].indexOf(variant) >= 0) {
        text = Text.nullTextQuote;
      } else {
        text = Text.nullTextParagraph;
      }
    }

    return (
      <ThemeContext.Consumer>
        {(theme) => (
          <Styled {...props} skeleton={skeleton} theme={theme}>
            {text}
          </Styled>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default Text;
