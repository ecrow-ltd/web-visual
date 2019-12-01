import { ITheme } from '@attire/ITheme';
import base from './base';

const negative: ITheme = {
  ...base,
  color: {
    ...base.color,
    background: 'darkred',
    font: 'white',
  },
};

export default negative;
