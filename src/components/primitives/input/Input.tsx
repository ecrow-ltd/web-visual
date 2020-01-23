import DefaultAttire from '@attire/default';
import { IThemeProps } from '@attire/ITheme';
import Text from '@primitives/text';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styled, { CSSObject } from 'styled-components';

export interface IProps {
  /**
   * The value of the input. The value's type depends on the type of input this is set to.
   */
  value: any;
}

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

Styled.defaultProps = {
  theme: DefaultAttire.primary,
};

/**
 * The component
 */
class Input extends PureComponent<IProps, IState> {
  public static propTypes = {
    value: PropTypes.any
  };

  public static defaultProps = {
    value: '',
  };

  public render() {
    return (
      <Styled {...this.props}>
        <Text editable>{this.props.value}</Text>
      </Styled>
    );
  }
}

export default Input;
