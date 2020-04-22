import { ITheme, IThemeProps } from '@theme/ITheme';
import ThemeContext from '@context/ThemeContext';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styled, { CSSObject } from 'styled-components';

export interface IProps {
  /**
   * Indicates a type of theme for this Container.
   */
  theme: ITheme | undefined;

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
   * An array to associate the relative size the child components.
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
 * This container component has options to display child components in specific layouts.
 * I takes advantage of CSS flex to provide powerful layout options.
 * Containers can also determine the theme for all nested components. Another nested container
 * can change the theme again from within the nested hierarchy.
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

  static wrapChildren(props: any) {
    const { children, sizing, spacing, direction, flex } = props;
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
  }

  static BaseRender(props: any) {
    const { context, ...nextProps } = props;
    return (
      <ThemeContext.Consumer>
        {(theme) => (
          <Styled {...{ ...props, theme }}>
            {Container.wrapChildren(props)}
          </Styled>
        )}
      </ThemeContext.Consumer>
    );
  }

  public render() {
    const props: IProps = this.props;
    const isThemeSet = typeof props.theme === 'object' && !!props.theme;

    if (isThemeSet) {
      return (
        <ThemeContext.Provider value={props.theme as ITheme}>
          <Container.BaseRender context={this} {...props} />
        </ThemeContext.Provider>
      );
    }

    return <Container.BaseRender {...props} />;
  }
}

export default Container;
