import { ITheme } from './ITheme';

export interface IAttire {
  primary: ITheme;
  secondary: ITheme;
  tertiary: ITheme;
}

export type TAttireTypes = 'primary' | 'secondary' | 'tertiary';

export interface IAttireProps {
  readonly attire: IAttire;
}
