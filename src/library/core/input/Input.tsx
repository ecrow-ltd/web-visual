import { ThemeContext, IThemeProps } from '@ecrowjs/app-theme';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styled, { CSSObject } from 'styled-components';

export interface IProps {}

export interface IState {}

/**
 * Styling for the component.
 */
export const Styled = styled.input<IProps>((props: IProps & IThemeProps) => {
  const { theme } = props;

  // Styling for this component.
  const style: CSSObject = {};

  return style;
});

/**
 * The component
 */
class Input extends PureComponent<IProps, IState> {
  public static propTypes = {};

  public static defaultProps = {};

  public render() {
    return (
      <ThemeContext.Consumer>
        {(theme) => <Styled {...this.props} theme={theme} />}
      </ThemeContext.Consumer>
    );
  }
}

export default Input;
