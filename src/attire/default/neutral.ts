import { ITheme } from '@attire/ITheme';
import base from './base';

const neutral: ITheme = {
  ...base,
  color: {
    ...base.color,
    background: 'dimgrey',
    font: 'white',
  },
};

export default neutral;
