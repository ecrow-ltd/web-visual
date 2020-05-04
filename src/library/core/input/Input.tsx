import { withTheme, IThemeProps } from '@ecrowjs/theme';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styled, { CSSObject } from 'styled-components';

export interface IProps {}

export interface IState {}

export const /**
   * Styling for the component.
   */
  Styled = styled.input<IProps>((props: IProps & IThemeProps) => {
    const { theme } = props;

    // Styling for this component.
    const style: CSSObject = {};

    return style;
  });

@withTheme()
/**
 * The component
 */
class Input extends PureComponent<IProps, IState> {
  public static propTypes = {};

  public static defaultProps = {};

  public render() {
    return <Styled {...this.props} />;
  }
}

export default Input;
