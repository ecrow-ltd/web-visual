import { withInfo } from "@storybook/addon-info";
import { addDecorator, addParameters, configure } from "@storybook/react";
import theme from "./theme";

// automatically import all files ending in *.stories.tsx
const req = require.context("../../src/stories", true, /.stories.tsx$/);

function loadStories() {
  addParameters({
    options: {
      panelPosition: "right",
      theme
    }
  });
  req.keys().forEach(req);
}

configure(loadStories, module);
