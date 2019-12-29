import { IThemeProps } from '@attire/ITheme';
import DefaultAttire from '@attire/default';
import Text from '@primitives/text';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styled, { CSSObject } from 'styled-components';

export interface IProps {
  /**
   * Disable component
   */
  disabled: boolean;
  /**
   * Indicates a type of behavior
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
export const Styled = styled.button<IProps>((props: IProps & IThemeProps) => {
  // Extract the theme and component properties.
  const { theme, disabled, indicate, variant } = props;

  // Store a boolean indicating if the button varient should be inverted.
  const inverted = variant === 'inversion';

  // Get the indicate color from the theme.
  const indicateColor = theme.color[indicate].background;

  // Declare a mutable styling for this component.
  let style: CSSObject = {
    backgroundColor: indicateColor,
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
  theme: DefaultAttire.primary,
};

/**
 * A standard button component.
 */
class Button extends PureComponent<IProps, IState> {
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
    const props: IProps = this.props as IProps;

    return (
      <Styled {...props}>
        <Text
          children={this.props.children}
          indicate={props.indicate}
          variant="base"
        />
      </Styled>
    );
  }
}

export default Button;
