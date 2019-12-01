import defaultAttire from '@attire/default';
import { IAttireProps } from '@attire/IAttire';
import React from 'react';

/**
 * Provides the attire for components.
 */
const AttireContext = React.createContext(defaultAttire);

const AttireProvider: React.FunctionComponent<IAttireProps> = (props) => {
  const { attire, children } = props;
  return (
    <AttireContext.Provider value={attire}>{children}</AttireContext.Provider>
  );
};

export default AttireProvider;
