import { action } from "@storybook/addon-actions";
import { boolean, select, text } from "@storybook/addon-knobs";
import React from "react";
import Button, { IProps as ButtonIProps } from "../../src/primitive/Button";
import StoryPrimitives from "./StoryPrimitives";

// Variant Select
const selectVariant = {
  default: "neutral" as ButtonIProps["variant"],
  id: "COMPONENT",
  label: "variant",
  options: [
    "neutral",
    "positive",
    "negative",
    "creative",
    "destructive"
  ] as Array<ButtonIProps["variant"]>
};

// Interaction Select
const selectInteraction = {
  default: "normal" as ButtonIProps["interaction"],
  id: "COMPONENT",
  label: "interaction",
  options: ["normal", "inversion"] as Array<ButtonIProps["interaction"]>
};

// Button Chapter
StoryPrimitives.add("Button", () => {
  return (
    <Button
      disabled={boolean("disabled", false, "COMPONENT")}
      variant={select(
        selectVariant.label,
        selectVariant.options,
        selectVariant.default,
        selectVariant.id
      )}
      interaction={select(
        selectInteraction.label,
        selectInteraction.options,
        selectInteraction.default,
        selectInteraction.id
      )}
      onClick={action("Clicked (onClick)")}
    >
      {text("text", "Button", "COMPONENT")}
    </Button>
  );
});
