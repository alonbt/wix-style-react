const path = require('path');
const glob = require('glob');
const { transformFileAsync } = require('@babel/core');
const { writeFileAsync, copyAsync } = require('./utils');

module.exports = function({ dir = './', folder }) {
  const srcDir = path.join(dir, folder);
  const destDir = path.join(dir, 'dist', folder);

  const files = glob.sync(`**/*.js`, {
    ignore: [`**/*.spec.js`],
    cwd: srcDir,
  });

  const nonJsFiles = copyAsync({
    src: `${srcDir}/**/!(*.js)`,
    dist: destDir,
  });

  return Promise.all(
    files
      .map(async file => {
        const filepath = path.join(srcDir, file);

        const something = await transformFileAsync(filepath, {
          plugins: ['@babel/plugin-transform-modules-commonjs'],
        });

        return await writeFileAsync(file, destDir, something.code);
      })
      .concat(nonJsFiles),
  );
};
