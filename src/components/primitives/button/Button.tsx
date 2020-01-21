import { IThemeProps } from '@attire/ITheme';
import DefaultAttire from '@attire/default';
import Text from '@primitives/text';
import { Styled as TouchableStyled } from '@primitives/touchable/Touchable';
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
export const Styled = styled(TouchableStyled)((props: IProps & IThemeProps) => {
  // Extract the theme and component properties.
  const { theme, indicate, variant } = props;

  // Get the indicate color from the theme.
  const indicateColor = theme.color[indicate].background;

  // Declare a mutable styling for this component.
  let style: CSSObject = {
    display: 'inline-block',
    backgroundColor: indicateColor,
    border: 'none',
    borderRadius: theme.shape.border.radius,
    boxShadow: theme.shadow[0],
    outline: 'none',
    padding: variant == 'tiny' ? '2px 8px' : '6px 12px'
  };

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
    variant: PropTypes.oneOf(['normal', 'tiny']),
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
          selectable={false}
          indicate={props.indicate}
          variant={props.variant == 'tiny' ? 'small' : 'base'}
        />
      </Styled>
    );
  }
}

export default Button;
