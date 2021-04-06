import cista from 'cista';
import fs from 'fs';

import cleanDist from '../tasks/clean-dist';
import transpileCopyFiles from '../tasks/transpile-copy-files';
import transpileSrc from '../tasks/transpile-src';

describe('transpile task - clean-dist', () => {
  it('should delete ./dist folder and create new empty one', async () => {
    const fakeFs = cista({
      'dist/file.js': '',
    });

    await cleanDist({ dir: `${fakeFs.dir}/dist` });

    const output = fs.existsSync(`${fakeFs.dir}/dist`);
    expect(output).toBe(true);
  });
});

describe('transpile task - transpile-copy-files', () => {
  it('should transpile and copy js files from given folder', async () => {
    const fakeFs = cista({
      'test/another/file.js': 'import React from "react";',
    });

    await cleanDist({ dir: `${fakeFs.dir}/dist` });

    await transpileCopyFiles({
      dir: fakeFs.dir,
      destDir: `${fakeFs.dir}`,
      folder: 'test',
    });

    const output = fs.readFileSync(
      `${fakeFs.dir}/dist/test/another/file.js`,
      'utf8',
    );

    expect(/_interopRequireDefault/g.test(output)).toBe(true);
  });

  it('should copy nonjs files', async () => {
    const fakeFs = cista({
      'test/another/file.jpg': '',
    });

    await cleanDist({ dir: `${fakeFs.dir}/dist` });

    await transpileCopyFiles({
      dir: fakeFs.dir,
      destDir: fakeFs.dir,
      folder: 'test',
    });

    const output = fs.existsSync(
      `${fakeFs.dir}/dist/test/another/file.jpg`,
      'utf8',
    );

    expect(output).toBe(true);
  });
});

// TODO: we get some race conditions here and babel errors for custom plugins
// describe('transpile task - transpile src', () => {
//   it.skip('should transpile all js files to commonjs path dist/src', async () => {
//     const fakeFs = cista({
//       'src/Component/Component.js': 'import React from "react";',
//     });

//     await cleanDist({ dir: `${fakeFs.dir}/dist` });

//     await transpileSrc({ dir: fakeFs.dir, destDir: fakeFs.dir });

//     const output = fs.readFileSync(
//       `${fakeFs.dir}/dist/src/Component/Component.js`,
//       'utf8',
//     );

//     expect(/_interopRequireDefault/g.test(output)).toBe(true);
//   });
// });
