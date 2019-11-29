import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import OthertideTheme from '@themes/Othertide.theme';
import React from 'react';
import { ThemeProvider } from 'styled-components';

const withProvider = (story: any) => (
  <ThemeProvider theme={OthertideTheme}>{story()}</ThemeProvider>
);

const ConstructStory = storiesOf('Constructs', module);
ConstructStory.addDecorator((story: any, context: any) =>
  withInfo()(story)(context),
);
ConstructStory.addDecorator(withKnobs);
ConstructStory.addDecorator(withProvider);

export default ConstructStory;
