import { ITheme } from '@attire/ITheme';
import base from './base';

const positive: ITheme = {
  ...base,
  color: {
    ...base.color,
    background: 'royalblue',
    font: 'white',
  },
};

export default positive;
