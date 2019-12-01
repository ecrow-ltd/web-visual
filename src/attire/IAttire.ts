import { ITheme } from './ITheme';

export interface IAttire {
  base: ITheme;
  creative: ITheme;
  destructive: ITheme;
  negative: ITheme;
  neutral: ITheme;
  positive: ITheme;
}

export type TAttireTypes =
  | 'base'
  | 'creative'
  | 'destructive'
  | 'negative'
  | 'neutral'
  | 'positive';

export interface IAttireProps {
  readonly attire: IAttire;
}
