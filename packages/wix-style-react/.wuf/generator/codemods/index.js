module.exports = [
  {
    codemod: 'stories-file.js',
    dist: 'stories/index.js',
    description: 'Add story to the stories file',
  },
  {
    codemod: 'index-file.js',
    dist: 'src/index.js',
    description: 'Add component export to the index.js file',
  },
  {
    codemod: 'index-ts-file.js',
    dist: 'src/index.d.ts',
    description: 'Add component export to the index.d.ts file',
  },
  {
    codemod: 'perfer-config-file.js',
    dist: 'perfer.config.js',
    description: 'Add new threshold for new component',
  },
];
