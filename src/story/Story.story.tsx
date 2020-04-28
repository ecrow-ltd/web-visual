import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

const StoryInstances: { [key: string]: any } = {};

// Manager
function Story(name: string) {
  if (!(name in StoryInstances)) {
    StoryInstances[name] = storiesOf(name, module);
    StoryInstances[name].addDecorator((story: any, context: any) =>
      withInfo()(story)(context),
    );
    StoryInstances[name].addDecorator(withKnobs);
  }
  return StoryInstances[name];
}

export default Story;
