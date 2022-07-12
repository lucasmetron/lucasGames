import React from "react";
import { StoryFn } from "@storybook/addons";
import GlobalStyleComponent from "../src/styles/global";

const withGlobalStyles = (storyFn: StoryFn) =>(
    <>
    <GlobalStyleComponent/>
    {storyFn()}
    </>
)


export default withGlobalStyles