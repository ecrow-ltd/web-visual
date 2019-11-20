import PropTypes from "prop-types";
import React, { Component } from "react";

export interface IProps {}

export interface IState {}

/**
 * A component
 */
class MyComponent extends Component<IProps, IState> {
  public static propTypes = {};

  public static defaultProps = {};

  public render() {
    return <div {...this.props} />;
  }
}

export default MyComponent;
