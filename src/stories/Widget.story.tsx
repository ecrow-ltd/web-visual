import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import OthertideTheme from '@themes/Othertide.theme';
import React from 'react';
import { ThemeProvider } from 'styled-components';

const withProvider = (story: any) => (
  <ThemeProvider theme={OthertideTheme}>{story()}</ThemeProvider>
);

const WidgetStory = storiesOf('Widgets', module);
WidgetStory.addDecorator((story: any, context: any) =>
  withInfo()(story)(context),
);
WidgetStory.addDecorator(withKnobs);
WidgetStory.addDecorator(withProvider);

export default WidgetStory;
