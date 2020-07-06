/**
 * Knobs to possibly include with the chapter of this story.
 */
// import { action } from '@storybook/addon-actions';
// import { boolean, select, text } from '@storybook/addon-knobs';

/**
 * Require necessary components
 */
import Story from '@ecrowjs/storybook';
import React from 'react';
import Touchable from './Touchable';

/**
 * Touchable Chapter
 */
Story('Core').add('Touchable', () => {
  return <Touchable />;
});
