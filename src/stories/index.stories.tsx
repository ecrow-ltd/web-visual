import React from "react";

import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
// import { linkTo } from "@storybook/addon-links";
import StyledButton from "../styled/StyledButton";
// import { Welcome } from "@storybook/react/demo";
// storiesOf("Welcome", module).add("to Storybook", () => <Welcome showApp={linkTo("RoundedButton")} />);

storiesOf("StyledButton", module)
  .add(
    "Basic",
    () => (
      <StyledButton
        onClick={action("onClick")}
        onMouseEnter={action("onMouseEnter")}
        onMouseLeave={action("onMouseLeave")}
      >
        Basic StyledButton
      </StyledButton>
    ),
    {
      info: { inline: false },
    },
  )
  .add(
    "Emoji",
    () => (
      <StyledButton
        onClick={action("onClick")}
        onMouseEnter={action("onMouseEnter")}
        onMouseLeave={action("onMouseLeave")}
      >
        <span role="img" aria-label="so cool">
          😀 😎 👍 💯
        </span>
      </StyledButton>
    ),
    { info: { inline: false } },
  );
