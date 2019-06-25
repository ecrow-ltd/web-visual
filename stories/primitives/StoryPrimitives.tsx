import { withKnobs } from "@storybook/addon-knobs";
import { storiesOf, StoryDecorator } from "@storybook/react";
import React from "react";
import { ThemeProvider } from "styled-components";
import OthertideTheme from "../../src/styled/themes/Othertide.theme";
import withInfo from "../withInfoDecorator";

const withProvider: StoryDecorator = (story: any) => (
  <ThemeProvider theme={OthertideTheme}>{story()}</ThemeProvider>
);

const StoryPrimitives = storiesOf("Primitives", module);
StoryPrimitives.addDecorator(withInfo);
StoryPrimitives.addDecorator(withKnobs);
StoryPrimitives.addDecorator(withProvider);

export default StoryPrimitives;
