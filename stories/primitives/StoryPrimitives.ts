import { withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

const StoryPrimitives = storiesOf("Primitives", module);
StoryPrimitives.addDecorator(withKnobs);

export default StoryPrimitives;
