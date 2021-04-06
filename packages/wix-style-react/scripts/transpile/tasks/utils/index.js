const path = require('path');
const mkdirp = require('mkdirp');
const copy = require('copy');
const { parse } = require('@babel/parser');
const fs = require('fs');

module.exports.writeFileAsync = function(file, output, code) {
  return new Promise((resolve, reject) => {
    const fullPath = path.join(output, file);

    mkdirp(path.parse(fullPath).dir, () => {
      fs.writeFile(fullPath, code, err => {
        if (err) {
          reject(err);
        }
        resolve();
      });
    });
  });
};

module.exports.readFileAst = function(fileLoc) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileLoc, 'utf8', (err, content) => {
      if (err) {
        reject(err);
      }
      resolve(
        parse(content, {
          sourceType: 'module',
          tokens: false,
          plugins: [
            'jsx',
            'asyncGenerators',
            'classProperties',
            'decorators-legacy',
            'dynamicImport',
            'exportDefaultFrom',
            'exportNamespaceFrom',
            'objectRestSpread',
          ],
        }),
      );
    });
  });
};

module.exports.copyAsync = ({ src, dist }) => {
  return new Promise((resolve, reject) => {
    copy(src, dist, function(err, files) {
      if (err) {
        return reject(err);
      }
      resolve(files);
    });
  });
};
