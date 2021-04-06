const fs = require('fs');
const glob = require('glob');
const path = require('path');

const targetDir = path.resolve(
  __dirname,
  '..',
  '..',
  '..',
  'dist',
  'es',
  'src',
);

const STYLABLE_PATTERN = '/**/*.st.css';
const STYLABLE_ES_PATTERN = '/**/*.es.st.css';

const PATHS_TO_CHANGE = [
  {
    regexp: /wix-ui-core\/index\.st\.css/g,
    changeTo: 'wix-ui-core/index.es.st.css',
  },
  {
    regexp: /wix-ui-core\/hocs\.st\.css/g,
    changeTo: 'wix-ui-core/hocs.es.st.css',
  },
  {
    regexp: /wix-ui-core\/dist\/src\/(.*st\.css)/g,
    changeTo: 'wix-ui-core/dist/es/src/$1',
  },
];

const stylableFiles = glob.sync(targetDir + STYLABLE_PATTERN, {
  ignore: [targetDir + STYLABLE_ES_PATTERN],
});

module.exports = function() {
  return Promise.all(
    stylableFiles.map(filepath => {
      return new Promise((resolve, reject) => {
        fs.readFile(filepath, 'utf-8', function(e, content) {
          if (e != null) {
            reject(e);
            return;
          }

          let results = content;

          const changes = PATHS_TO_CHANGE.find(({ regexp }) =>
            regexp.test(results),
          );

          if (!changes) {
            resolve();
            return;
          }

          if (changes) {
            PATHS_TO_CHANGE.forEach(({ regexp, changeTo }) => {
              results = results.replace(regexp, changeTo);
            });
          }

          fs.writeFile(filepath, results, function(err) {
            if (err) {
              reject(err);
              return;
            }
            resolve();
          });
        });
      });
    }),
  );
};
