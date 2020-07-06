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
import Input from './Input';

/**
 * Input Chapter
 */
Story('Core').add('Input', () => {
  return <Input />;
});
