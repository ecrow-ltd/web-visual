import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

export interface IProps {}

export interface IState {}

/**
 * A component
 */
class COMPONENT_NAME extends PureComponent<IProps, IState> {
  public static propTypes = {};

  public static defaultProps = {};

  public render() {
    return <div {...this.props}>Hello World</div>;
  }
}

export default COMPONENT_NAME;
