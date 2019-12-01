import Text from '@primitives/text';
import DefaultTheme from '@themes/Default.theme';
import { IPropsTheme, ITheme } from '@themes/ITheme';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled, { CSSObject } from 'styled-components';

export interface IProps {
  /**
   * Disable component
   */
  disabled: boolean;
  /**
   * Indicate type
   */
  indicate: 'neutral' | 'positive' | 'negative' | 'creative' | 'destructive';
  /**
   * Variant type
   */
  variant: 'normal' | 'tiny' | 'inversion';
  /**
   * Callback when the button is clicked.
   */
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export interface IState {}

/**
 * Styling for a button element.
 */
export const Styled = styled.button<IProps>((props: IProps & IPropsTheme) => {
  // Extract the theme and component properties.
  const { disabled, indicate, variant } = props;
  const theme: ITheme = props.theme || DefaultTheme;

  // Store a boolean indicating if the button varient should be inverted.
  const inverted = variant === 'inversion';

  // Get the indicate color from the theme.
  const indicateColor = theme.color.indicate[indicate];

  // Declare a mutable styling for this component.
  let style: CSSObject = {
    backgroundColor: inverted ? 'transparent' : indicateColor,
    backgroundPosition: 'center',
    border: 'none',
    borderRadius: theme.shape.border.radius,
    boxShadow: theme.shadow[0],
    filter: 'brightness(100%)',
    outline: 'none',
    padding: '6px 12px',
    transition: `all ${theme.transition.duration.complex}ms`,
  };

  // Apply touchable CSS events to the button
  style['&:hover'] = {
    ...theme.touchable.hover,
    backgroundColor: inverted ? indicateColor : undefined,
  };
  style['&:active'] = theme.touchable.active;

  // If disabled is applied, assign the disabled theme properties to the style.
  if (disabled) {
    style = { ...style, ...theme.touchable.disabled };
  }

  return style;
});

Styled.defaultProps = {
  theme: DefaultTheme,
};

/**
 * A standard button component.
 */
class Button extends Component<IProps, IState> {
  public static propTypes = {
    disabled: PropTypes.bool,
    indicate: PropTypes.oneOf([
      'neutral',
      'positive',
      'negative',
      'creative',
      'destructive',
    ]),
    onClick: PropTypes.func,
    variant: PropTypes.oneOf(['normal', 'inversion']),
  };

  public static defaultProps = {
    disabled: false,
    indicate: 'neutral',
    onClick: () => {},
    variant: 'normal',
  };

  public render() {
    const { children, ...props } = this.props;
    return (
      <Styled {...props}>
        <Text children={children} variant="button" />
      </Styled>
    );
  }
}

export default Button;
