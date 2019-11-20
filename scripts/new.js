/**
 * Creates a new component with a chapter and unit test.
 */
const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// Get passed in arguments
const args = process.argv.slice(2);
// Extract arguments
const type = args[0] ? args[0] : null;
const name = args[1] ? args[1] : null;

// Get the absolute path to this directory.
const PATH_ROOT = path.resolve('.');
const PATH_TEMPLATES = `${PATH_ROOT}/scripts/templates`;
const PATH_COMPONENTS = `${PATH_ROOT}/src/components`;

// Array of allowable component types
const allowedTypes = ['primitive', 'construct', 'widget'];

// Ensure type is not undefined or else error.
if (!type) {
    console.log('\nThe type of component must be provided.\n');
    return 1;
}

// Ensure name is not undefined or else error.
if (!name) {
    console.log('\nThe name of component must be provided.\n');
    return 1;
}

