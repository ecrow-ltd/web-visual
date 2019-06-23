import React from "react";

import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
// import { linkTo } from "@storybook/addon-links";
import Button from "../styled/Button";
// import { Welcome } from "@storybook/react/demo";
// storiesOf("Welcome", module).add("to Storybook", () => <Welcome showApp={linkTo("RoundedButton")} />);

storiesOf("Button", module)
  .add(
    "Basic",
    () => (
      <Button
        onClick={action("onClick")}
        onMouseEnter={action("onMouseEnter")}
        onMouseLeave={action("onMouseLeave")}
      >
        Basic Button (for Sarah)
      </Button>
    ),
    {
      info: { inline: false },
    },
  )
  .add(
    "Emoji",
    () => (
      <Button
        onClick={action("onClick")}
        onMouseEnter={action("onMouseEnter")}
        onMouseLeave={action("onMouseLeave")}
      >
        <span role="img" aria-label="so cool">
          😀 😎 👍 💯
        </span>
      </Button>
    ),
    { info: { inline: false } },
  );
