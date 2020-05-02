import { ThemeContext, IThemeProps } from '@ecrowjs/app-theme';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styled, { CSSObject } from 'styled-components';

export interface IProps {
  /**
   * Disable component
   */
  disabled: boolean;

  /**
   * Callback when the button is clicked.
   */
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export interface IState {}

/**
 * Styling for a component.
 */
export const Styled = styled.div<IProps>((props: IProps & IThemeProps) => {
  const { theme, disabled } = props;

  // Styling for this component.
  var style: CSSObject = {
    ...theme.touchable.idle,
  };

  // Apply touchable CSS events to the button
  style['&:hover'] = theme.touchable.hover;
  style['&:active'] = theme.touchable.active;

  // If disabled is applied, assign the disabled theme properties to the style.
  if (disabled) {
    style = { ...style, ...theme.touchable.disabled };
  }

  return style;
});

/**
 * Wrap this component around elements you want to apply touchable properties to.
 * It uses the theme to determine the styled behavior when hovered or clicked.
 */
class Touchable extends PureComponent<IProps, IState> {
  public static propTypes = {
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
  };

  public static defaultProps = {
    disabled: false,
    onClick: () => {},
  };

  public render() {
    return (
      <ThemeContext.Consumer>
        {(theme) => <Styled {...this.props} theme={theme} />}
      </ThemeContext.Consumer>
    );
  }
}

export default Touchable;
