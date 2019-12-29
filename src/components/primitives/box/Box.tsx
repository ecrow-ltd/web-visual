import DefaultAttire from '@attire/default';
import { IAttireProps, TAttireTypes } from '@attire/IAttire';
import { ITheme, IThemeProps } from '@attire/ITheme';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styled, { CSSObject, ThemeProvider } from 'styled-components';

export interface IProps {
  /**
   * Indicates a type of content for this box
   */
  theme: TAttireTypes;
}

export interface IState {}

/**
 * Styling for a component.
 */
export const Styled = styled.div<IProps>((props: IThemeProps) => {
  const { theme } = props;

  // Styling for this component.
  const style: CSSObject = {
    backgroundColor: theme.color.base.background,
  };

  return style;
});

/**
 * The component
 */
class Box extends PureComponent<IProps, IState> {
  public static propTypes = {};

  public static defaultProps = {
    theme: 'primary',
  };

  public render() {
    const props: IProps & IAttireProps = this.props as IProps & IAttireProps;
    const attire = props.attire ? props.attire : DefaultAttire;
    const themeProps = { theme: attire[props.theme] };

    return (
      <ThemeProvider theme={attire[props.theme]}>
        <Styled {...{ ...this.props, ...themeProps }} />
      </ThemeProvider>
    );
  }
}

export default Box;
