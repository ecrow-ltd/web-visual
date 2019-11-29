import * as React from 'react';
interface IProperties {}
interface IState {}

/**
 * A Sample Component
 */
class Component extends React.Component<IProperties, IState> {
  /**
   * @inheritdoc
   */
  public render() {
    return <div>My Component</div>;
  }
}

export default Component;
