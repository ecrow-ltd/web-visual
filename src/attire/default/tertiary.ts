import { ITheme } from '@attire/ITheme';
import primary from './primary';

const tertiary: ITheme = {
  ...primary,
  color: {
    ...primary.color,
    base: {
      background: '#fed8b1',
      font: 'black',
    },
  },
};

export default tertiary;
