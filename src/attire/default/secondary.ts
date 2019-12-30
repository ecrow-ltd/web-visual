import { ITheme } from '@attire/ITheme';
import primary from './primary';

const secondary: ITheme = {
  ...primary,
  color: {
    ...primary.color,
    base: {
      background: 'lightblue',
      font: 'black',
    },
  },
};

export default secondary;
