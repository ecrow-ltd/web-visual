import { ITheme } from './ITheme';

const DefaultTheme: ITheme = {
  color: {
    base: 'white',
    complement: 'gainsboro',
    indicate: {
      creative: 'forestgreen',
      destructive: 'firebrick',
      negative: 'darkred',
      neutral: 'dimgrey',
      positive: 'royalblue',
    },
  },
  font: {
    base: {
      color: 'black',
      family: 'Roboto, Helvetica, Arial, sans-serif',
      opacity: 1,
      size: '1rem',
      style: 'normal',
      weight: 400,
    },
    button: {
      color: 'white',
      size: '1.425rem',
    },
    heading1: {},
    heading2: {},
    heading3: {},
    paragraph: {},
    quote: {},
    small: {},
    subheading: {},
    subtitle: {},
    title: {},
  },
  shadow: [
    '0 0 0 transparent',
    '0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12)',
    '0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12)',
    '0px 1px 8px 0px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 3px 3px -2px rgba(0,0,0,0.12)',
    '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
    '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
    '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
  ],
  shape: {
    border: {
      radius: 4,
      thickness: 1,
    },
  },
  touchable: {
    active: {
      filter: 'brightness(80%)',
      transition: `all 200ms`,
    },
    disabled: {
      opacity: 0.6,
      pointerEvents: 'none',
      userSelect: 'none',
    },
    hover: {
      cursor: 'pointer',
      filter: 'brightness(120%)',
      transition: `all 200ms`,
    },
  },
  transition: {
    duration: {
      complex: 375,
      entering: 225,
      leaving: 195,
      short: 250,
      shorter: 200,
      shortest: 150,
      standard: 300,
    },
    ease: {
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      out: 'cubic-bezier(0.0, 0, 0.2, 1)',
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
  },
};

export default DefaultTheme;
