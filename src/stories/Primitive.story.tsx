import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

// const withProvider = (story: any) => (
//   <ThemeProvider theme={OthertideTheme}>{story()}</ThemeProvider>
// );

const StoryPrimitives = storiesOf('Primitives', module);
StoryPrimitives.addDecorator((story: any, context: any) =>
  withInfo()(story)(context),
);
StoryPrimitives.addDecorator(withKnobs);
// StoryPrimitives.addDecorator(withProvider);

export default StoryPrimitives;
