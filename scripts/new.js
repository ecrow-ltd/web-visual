/**
 * Creates a new component with a chapter and unit test.
 */
const path = require('path');
const fs = require('fs');

// Get passed in arguments
const args = process.argv.slice(2);
// Extract arguments
const type = args[0] ? args[0] : null;
const name = args[1]
  ? args[1].charAt(0).toUpperCase() + args[1].slice(1)
  : null;

// Get the absolute path to this directory.
const PATH_ROOT = path.resolve('.');
const PATH_TEMPLATES = `${PATH_ROOT}/scripts/templates`;
const PATH_LIBRARY = `${PATH_ROOT}/src/library`;

// Array of template files
const templateFiles = [
  'MyComponent.tsx',
  'MyComponent.test.tsx',
  'MyComponent.chapter.tsx',
  'index.ts',
];
const templateReplaceString = {
  componentName: 'COMPONENT_NAME',
  storyName: 'STORY_NAME',
};

// Array of allowable component types
const typesAllowed = fs
  .readdirSync(PATH_LIBRARY, { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => dirent.name);

/**
 * ERROR CHECKING
 */
const usageString =
  'npm run new <library_name> <new_component_name>\nyarn new <library_name> <new_component_name>';

// Ensure type is not undefined or else error.
if (!type) {
  console.log('\nThe library name of component must be provided.\n');
  return 1;
}

// Ensure name is not undefined or else error.
if (!name || !name.length) {
  console.log('\nThe name of component must be provided.\n');
  return 1;
}

// Ensure that the type is among allowable types.
if (!typesAllowed.includes(type)) {
  console.log(
    `\n${usageString}\n\n<library_name> for the new component must be one of the following:\n> ${typesAllowed.join(
      '\n',
    )}\n`,
  );
  return 1;
}

// Used styled component template if it's a primitive component.
if (type === 'primitive') {
  templateFiles[0] = 'MyComponentStyled.tsx';
}
const STORY_NAME = type.charAt(0).toUpperCase() + type.slice(1);

/**
 * FILE CREATION
 */
// Path the the component type directory
const PATH_COMPONENTS_TYPE = `${PATH_LIBRARY}/${type.toLowerCase()}`;
// Path to the component's new directory with the name.
const PATH_COMPONENTS_TYPE_NAME = `${PATH_COMPONENTS_TYPE}/${name.toLowerCase()}`;
if (!fs.existsSync(PATH_COMPONENTS_TYPE)) {
  fs.mkdirSync(PATH_COMPONENTS_TYPE);
}

if (!fs.existsSync(PATH_COMPONENTS_TYPE_NAME)) {
  fs.mkdirSync(PATH_COMPONENTS_TYPE_NAME);
} else {
  console.log(`\nThe ${name} component already exists.\n`);
  return 1;
}

for (var i = 0; i < templateFiles.length; i++) {
  const file = templateFiles[i];
  const fullFilePath =
    file === 'index.ts'
      ? `${PATH_COMPONENTS_TYPE_NAME}/${file}`
      : `${PATH_COMPONENTS_TYPE_NAME}/${
          name + file.substring(file.indexOf('.'))
        }`;

  // Copy the template file to the new path with the new name.
  fs.copyFileSync(`${PATH_TEMPLATES}/${file}`, fullFilePath);

  // Replace the content of the files with values that match the component's name.
  const fileContents = fs.readFileSync(fullFilePath, { encoding: 'utf8' });
  const replaceComponentName = new RegExp(
    `${templateReplaceString.componentName}`,
    'g',
  );
  const replaceStoryName = new RegExp(
    `${templateReplaceString.storyName}`,
    'g',
  );
  var newFileContents = fileContents;
  newFileContents = newFileContents.replace(replaceComponentName, name);
  newFileContents = newFileContents.replace(replaceStoryName, STORY_NAME);
  fs.writeFileSync(fullFilePath, newFileContents, { encoding: 'utf8' });
}

console.log('Your new component has been create:', PATH_COMPONENTS_TYPE_NAME);
return 0;
