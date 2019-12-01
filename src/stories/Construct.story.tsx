import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

const ConstructStory = storiesOf('Constructs', module);
ConstructStory.addDecorator((story: any, context: any) =>
  withInfo()(story)(context),
);
ConstructStory.addDecorator(withKnobs);

export default ConstructStory;
