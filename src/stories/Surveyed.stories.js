import React from "react";
import { storiesOf } from "@storybook/react";

import App from '../playground/App'

const stories = storiesOf('Surveyed', module)

stories.add('Default Surveyed', () => {
    return <App />
})
