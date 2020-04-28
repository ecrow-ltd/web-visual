import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

const WidgetStory = storiesOf('Widgets', module);
WidgetStory.addDecorator((story: any, context: any) =>
  withInfo()(story)(context),
);
WidgetStory.addDecorator(withKnobs);

export default WidgetStory;
