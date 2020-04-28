/**
 * Knobs to possibly include with the chapter of this story.
 */
// import { action } from '@storybook/addon-actions';
// import { boolean, select, text } from '@storybook/addon-knobs';

/**
 * Require necessary components
 */
import Story from '@story/Story.story';
import React from 'react';
import COMPONENT_NAME from './COMPONENT_NAME';

/**
 * COMPONENT_NAME Chapter
 */
Story('STORY_NAME').add('COMPONENT_NAME', () => {
  return <COMPONENT_NAME />;
});
