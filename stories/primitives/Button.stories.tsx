import { select } from "@storybook/addon-knobs";
import React from "react";
import { ThemeProvider } from "styled-components";
// import { action } from "@storybook/addon-actions";
import Button from "../../src/primitive/Button";
import StoryPrimitives from "./StoryPrimitives";

import OthertideTheme from "../../src/styled/themes/Othertide.theme";

// Variant Select
const selectVariant = {
  default: "neutral",
  id: "COMPONENT",
  label: "variant",
  options: ["neutral", "positive", "negative", "creative", "destructive"]
};

// Button Chapter
StoryPrimitives.add("Button", () => {
  return (
    <ThemeProvider theme={OthertideTheme}>
      <Button
        variant={select(
          selectVariant.label,
          selectVariant.options,
          selectVariant.default,
          selectVariant.id
        )}
      >
        Button
      </Button>
    </ThemeProvider>
  );
});
