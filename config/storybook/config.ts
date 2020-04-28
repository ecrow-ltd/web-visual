import { setDefaults as setInfoAddonDefaults } from '@storybook/addon-info';
import { addParameters, configure } from '@storybook/react';
import theme from './theme';

// automatically import all files ending in *.chapter.tsx
// @ts-ignore
const req = require['context']('../../src/component', true, /.chapter.tsx$/);

function loadStories() {
  addParameters({
    options: {
      panelPosition: 'right',
      theme,
    },
    info: {},
  });
  req.keys().forEach(req);
}

setInfoAddonDefaults({
  inline: true,
  source: true,
  styles: {
    header: {
      body: {
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        marginBottom: 0,
        paddingBottom: 0,
        paddingTop: 0,
      },
      h1: {
        display: 'inline',
        fontSize: '25px',
        marginBottom: 0,
        marginRight: '20px',
        marginTop: 0,
        padding: 0,
      },
      h2: {
        color: '#999',
        display: 'inline',
      },
    },
    infoBody: {
      backgroundColor: '#e8edf4',
      borderRadius: 5,
      lineHeight: '2',
      padding: '10px 10px',
    },
    source: {
      h1: {
        marginTop: 0,
      },
    },
  },
});

configure(loadStories, module);
