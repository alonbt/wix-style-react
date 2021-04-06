const rm = require('rimraf');
const mkdirp = require('mkdirp');

module.exports = function({ dir = './dist' }) {
  return new Promise((resolve, reject) => {
    try {
      rm.sync(dir);
      mkdirp.sync(dir);
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
