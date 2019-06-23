import React from "react";

import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
// import { linkTo } from "@storybook/addon-links";
import Component from "../Component";
// import { Welcome } from "@storybook/react/demo";
// storiesOf("Welcome", module).add("to Storybook", () => <Welcome showApp={linkTo("RoundedButton")} />);

storiesOf("RoundedButton", module)
  .add("with text", () => <Component>Hello Button</Component>, {
    info: { inline: false },
  })
  .add(
    "with some emoji",
    () => (
      <Component>
        <span role="img" aria-label="so cool">
          😀 😎 👍 💯
        </span>
      </Component>
    ),
    { info: { inline: false } },
  );
