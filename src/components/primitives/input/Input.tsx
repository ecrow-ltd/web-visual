import DefaultAttire from '@attire/default';
import { IThemeProps } from '@attire/ITheme';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styled, { CSSObject } from 'styled-components';

export interface IProps {
  /**
   * The initial value of the input. The value's type depends on the type of input this is set to.
   */
  value: any;

  /**
   * Determines if the input field is editable.
   */
  editable: boolean;

  /**
   * Variant of the input text
   */
  variant:
    | 'base'
    | 'title'
    | 'subtitle'
    | 'heading1'
    | 'heading2'
    | 'heading3'
    | 'subheading'
    | 'paragraph'
    | 'quote'
    | 'small';

  /**
   * Callback when the the input is receiving a new value.
   */
  onChange: (value: any) => void;

  /**
   * If the input is in test mode. This will not trigger callbacks for updated values.
   */
  testMode: boolean;
}

export interface IState {
  focused: boolean;
  value: any;
}

/**
 * Styling for the component.
 */
export const Styled = styled.div<any>((props: any & IThemeProps) => {
  const { theme, editable } = props;

  const inputColor = theme.color.base.background;
  const focusColor = theme.color.neutral.background;

  // Styling for this component.
  const style: CSSObject = {
    borderBottom: 'solid #00000000 2px',
    display: 'inline-block',
  };

  if (editable) {
    style.borderBottom = `solid ${inputColor} 2px`;
    style['&:focus'] = {
      borderBottom: `solid ${focusColor} 2px`,
    };
  }

  return style;
});

Styled.defaultProps = {
  theme: DefaultAttire.primary,
};

/**
 * Styling for the input component.
 */
export const InputStyled = styled.input<any>((props: any & IThemeProps) => {
  const { theme, variant, editable } = props;

  const fontColor = theme.color.base.font;

  // Styling for this component.
  const style: CSSObject = {
    ...theme.font.base,
    ...theme.font[variant],
    border: 'none',
    color: fontColor,
    display: 'inline-block',
    transition: `all ${theme.transition.duration.complex}ms`,
  };

  style['&:focus'] = {
    outline: 'none',
  };

  style['&:hover'] = {
    cursor: 'text',
  };

  return style;
});

InputStyled.defaultProps = {
  theme: DefaultAttire.primary,
};

/**
 * The component
 */
class Input extends PureComponent<IProps, IState> {
  public static propTypes = {
    editable: PropTypes.bool,
    onChange: PropTypes.func,
    testMode: PropTypes.bool,
    value: PropTypes.any,
    variant: PropTypes.oneOf([
      'base',
      'title',
      'subtitle',
      'heading1',
      'heading2',
      'heading3',
      'subheading',
      'paragraph',
      'quote',
      'small',
    ]),
  };

  public static defaultProps = {
    editable: false,
    onChange: () => {},
    testMode: false,
    value: '',
    variant: 'base',
  };

  public state = {
    focused: false,
    value: this.props.value,
  };

  public render() {
    const { onChange, value, testMode, ...props } = this.props;
    const currentValue = testMode ? this.state.value : value;
    return (
      <Styled {...props}>
        <InputStyled
          type="text"
          value={currentValue}
          size={currentValue.length}
          onChange={this.handleOnChange}
          {...props}
        />
      </Styled>
    );
  }

  private handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!this.props.editable) {
      return;
    }
    if (!this.props.testMode) {
      this.props.onChange(event.target.value);
    } else {
      this.setState({ value: event.target.value });
    }
  };
}

export default Input;
