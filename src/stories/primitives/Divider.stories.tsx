import { color } from "@storybook/addon-knobs";
import React from "react";
import Divider from "../../components/primitive/Divider";
import StoryPrimitives from "./StoryPrimitives";

// Divider Chapter
StoryPrimitives.add("Divider", () => {
    return (
      <Divider color={color("Color", "#333333")}/>
    );
  });