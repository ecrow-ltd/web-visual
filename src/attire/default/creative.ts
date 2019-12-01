import { ITheme } from '@attire/ITheme';
import base from './base';

const creative: ITheme = {
  ...base,
  color: {
    ...base.color,
    background: 'forestgreen',
    font: 'white',
  },
};

export default creative;
