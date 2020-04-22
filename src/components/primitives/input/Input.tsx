import { IThemeProps } from '@theme/ITheme';
import ThemeContext from '@context/ThemeContext';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styled, { CSSObject } from 'styled-components';

export interface IProps {
  /**
   * The initial value of the input. The value's type depends on the type of input this is set to.
   */
  value: any;

  /**
   * The title of the input field.
   */
  title: string;

  /**
   * Determines if the input field is editable.
   */
  editable: boolean;

  /**
   * Additional information to associate with the input.
   */
  information: string;

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
  const { theme, editable, focused } = props;
  const fontColor = theme.color.base.font;

  // Styling for this component.
  const style: CSSObject = {
    ...theme.font.base,
    ...theme.font.small,
    borderBottom: 'solid #00000000 1px',
    color: fontColor,
    display: 'inline-block',
    transition: `all ${theme.transition.duration.complex}ms`,
  };

  style['&:hover'] = {
    opacity: 1,
  };

  return style;
});

/**
 * Styling for the title component.
 */
export const TitleStyled = styled.div<any>((props: any & IThemeProps) => {
  const { theme, focused } = props;

  // Styling for this component.
  const style: CSSObject = {
    color: focused ? theme.color.positive.background : 'inherit',
    marginBottom: 2,
    marginTop: 2,
    transition: `all ${theme.transition.duration.complex}ms`,
  };

  return style;
});

/**
 * Styling for the input component.
 */
export const InputStyled = styled.input<any>((props: any & IThemeProps) => {
  const { theme, variant, editable, focused } = props;

  const backgroundColor = theme.color.positive.background;
  const fontColor = theme.color.base.font;
  const inputColor = theme.color.base.background;
  const focusColor = theme.color.positive.background;

  // Styling for this component.
  const style: CSSObject = {
    ...theme.font.base,
    ...theme.font[variant],
    border: 'none',
    color: fontColor,
    display: 'inline-block',
    marginBottom: 1,
    maxWidth: '100%',
    outline: 'none',
    transition: `all ${theme.transition.duration.complex}ms`,
  };

  style['&:hover'] = editable
    ? {
        cursor: 'text',
      }
    : {};

  if (editable) {
    style.borderBottom = `solid ${focused ? focusColor : inputColor} 1px`;
    style['&:hover'].borderBottom = `solid  ${focusColor} 1px`;
    style['&:hover'].borderWidth = 2;
    style['&:hover'].marginBottom = 0;
    style['&:focus'] = {
      ...style['&:hover'],
    };
  }

  return style;
});

/**
 * The component
 */
class Input extends PureComponent<IProps, IState> {
  public static propTypes = {
    editable: PropTypes.bool,
    information: PropTypes.string,
    onChange: PropTypes.func,
    testMode: PropTypes.bool,
    title: PropTypes.string,
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
    information: '',
    onChange: () => {},
    testMode: false,
    title: '',
    value: '',
    variant: 'base',
  };

  public state = {
    focused: false,
    value: this.props.value,
  };

  public render() {
    const {
      onChange,
      value,
      testMode,
      title,
      information,
      ...props
    } = this.props;
    const currentValue = testMode ? this.state.value : value;
    return (
      <ThemeContext.Consumer>
        {(theme) => (
          <Styled {...props} theme={theme} focused={this.state.focused}>
            <TitleStyled focused={this.state.focused} theme={theme}>
              {title.length ? title : '\u00A0'}
            </TitleStyled>
            <InputStyled
              type="text"
              value={currentValue}
              size={currentValue.length}
              onChange={this.handleChange}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              {...props}
              theme={theme}
            />
            <TitleStyled focused={this.state.focused} theme={theme}>
              {information.length ? information : '\u00A0'}
            </TitleStyled>
          </Styled>
        )}
      </ThemeContext.Consumer>
    );
  }

  private handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    if (this.props.editable) {
      this.setState({ focused: true });
    }
  };

  private handleBlur = (event: any) => {
    this.setState({ focused: false });
  };

  private handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
