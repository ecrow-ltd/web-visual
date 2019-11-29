import * as React from 'react';

interface IProperties {}
interface IState {}

/**
 * A Sample Component
 */
class VisualProvider extends React.Component<IProperties, IState> {
  /**
   * @inheritdoc
   */
  public render() {
    return this.props.children;
  }
}

export default VisualProvider;
