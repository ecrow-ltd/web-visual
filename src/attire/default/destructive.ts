import { ITheme } from '@attire/ITheme';
import base from './base';

const destructive: ITheme = {
  ...base,
  color: {
    ...base.color,
    background: 'firebrick',
    font: 'white',
  },
};

export default destructive;
