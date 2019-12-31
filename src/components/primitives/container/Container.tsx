import DefaultAttire from '@attire/default';
import { IAttireProps, TAttireTypes } from '@attire/IAttire';
import { ITheme, IThemeProps } from '@attire/ITheme';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styled, { CSSObject, ThemeProvider } from 'styled-components';

export interface IProps {
  /**
   * Indicates a type of content for this Container.
   */
  theme: TAttireTypes;

  /**
   * Determines the direction of the layout.
   */
  direction: 'x' | 'y';

  /**
   * If the layout should flex to fill space in it's container.
   */
  flex: boolean;

  /**
   * The value to space the components apart.
   */
  spacing: number;

  /**
   * An array to associate how to size the components.
   */
  sizing: any[string | number];

  /**
   * Show/Hide the background color.
   */
  showBackground: boolean;
}

export interface IState {}

/**
 * Styling for a component.
 */
export const Styled = styled.div<IProps>((props: IProps & IThemeProps) => {
  const { theme, direction, flex, showBackground } = props;

  // Styling for this component.
  const style: CSSObject = {
    backgroundColor: showBackground ? theme.color.base.background : 'none',
    display: 'flex',
    flexDirection: direction === 'x' ? 'row' : 'column',
    flexWrap: 'nowrap',
    transition: 'all 375ms',
  };

  return style;
});

/**
 * The component
 */
class Container extends PureComponent<IProps, IState> {
  public static propTypes = {
    direction: PropTypes.oneOf(['x', 'y']),
    flex: PropTypes.bool,
    showBackground: PropTypes.bool,
    sizing: PropTypes.array,
    spacing: PropTypes.number,
  };

  public static defaultProps = {
    direction: 'y',
    flex: true,
    showBackground: false,
    sizing: [],
    spacing: 0,
    theme: 'primary',
  };

  public wrapChildren = () => {
    const { children, sizing, spacing, direction, flex } = this.props;
    return React.Children.map(children, (child: any, index: number) => {
      // Store child styling.
      const childStyle: CSSObject = child.props.style;

      // Declare wrapper styling.
      const wrapperStyle: CSSObject = {};

      // Apply spacing between components.
      if (index !== 0) {
        if (direction === 'x') {
          wrapperStyle.marginLeft = spacing;
        } else {
          wrapperStyle.marginTop = spacing;
        }
      }

      // Apply flex only if width is not defined for the child component.
      if (!childStyle || !childStyle.width) {
        const size = sizing[index] ? sizing[index] : 1;
        if (
          !size ||
          (typeof size === 'string' && isNaN(+size.slice(-1) as number))
        ) {
          wrapperStyle[direction === 'x' ? 'width' : 'height'] = size;
        } else if (flex) {
          wrapperStyle.flex = size;
        }
      }

      return (
        <div key={index.toString()} style={wrapperStyle}>
          {child}
        </div>
      );
    });
  };

  public render() {
    const props: IProps & IAttireProps = this.props as IProps & IAttireProps;
    const attire = props.attire ? props.attire : DefaultAttire;
    const themeProps = { theme: attire[props.theme] };

    return (
      <ThemeProvider theme={attire[props.theme]}>
        <Styled {...{ ...this.props, ...themeProps }}>
          {this.wrapChildren()}
        </Styled>
      </ThemeProvider>
    );
  }
}

export default Container;
