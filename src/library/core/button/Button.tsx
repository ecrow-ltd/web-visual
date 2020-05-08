import { withTheme, IThemeProps } from '@ecrowjs/theme';
import Text from '../text';
import { Styled as TouchableStyled } from '../touchable/Touchable';
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
  variant: 'normal' | 'tiny';
  /**
   * Callback when the button is clicked.
   */
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export interface IState {}

/**
 * Styling for a button element.
 */
export const Styled = styled(TouchableStyled).attrs({ style: () => ({}) })(
  (props: any & IThemeProps) => {
    // Extract the theme and component properties.
    const { theme, indicate, variant } = props;

    // Get the indicate color from the theme.
    const indicateColor = theme.color[indicate].background;

    // Declare a mutable styling for this component.
    const style: CSSObject = {
      backgroundColor: indicateColor,
      border: 'none',
      borderRadius: theme.shape.border.radius,
      boxShadow: theme.shadow[0],
      display: 'inline-block',
      outline: 'none',
      padding: variant == 'tiny' ? '2px 8px' : '6px 12px',
    };

    return style;
  },
);

@withTheme()
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
    variant: PropTypes.oneOf(['normal', 'tiny']),
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
        <Text
          selectable={false}
          indicate={props.indicate}
          variant={props.variant === 'tiny' ? 'small' : 'base'}
        >
          {children}
        </Text>
      </Styled>
    );
  }
}

export default Button;
