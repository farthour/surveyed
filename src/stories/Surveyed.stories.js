import React from "react";
import { storiesOf } from "@storybook/react";

import DefaultSurveyed from './examples/DefaultSurveyed'

const stories = storiesOf('Surveyed', module)

stories.add('Default Surveyed', () => {
    return <DefaultSurveyed />
})
