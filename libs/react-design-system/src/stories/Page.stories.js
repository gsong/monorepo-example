import React from "react";

import { Page } from "./Page";
import * as HeaderStories from "./Header.stories";

const Meta = {
  title: "Example/Page",
  component: Page,
};

const Template = (args) => <Page {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};

export default Meta;
