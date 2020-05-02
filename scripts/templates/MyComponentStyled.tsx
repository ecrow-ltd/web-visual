import ThemeContext from '@theme/ThemeContext';
import { IThemeProps } from '@theme/ITheme';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styled, { CSSObject } from 'styled-components';

export interface IProps {}

export interface IState {}

/**
 * Styling for the component.
 */
export const Styled = styled.div<IProps>((props: IProps & IThemeProps) => {
  const { theme } = props;

  // Styling for this component.
  const style: CSSObject = {};

  return style;
});

/**
 * The component
 */
class COMPONENT_NAME extends PureComponent<IProps, IState> {
  public static propTypes = {};

  public static defaultProps = {};

  public render() {
    return (
      <ThemeContext.Consumer>
        {(theme) => (
          <Styled {...this.props} theme={theme}>
            Hello World
          </Styled>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default COMPONENT_NAME;
