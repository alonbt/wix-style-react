import transpileSASS from '../plugins/babel-plugin-sass-to-es';

const oneLevel = {
  api: {
    node: {
      source: {
        value: './style.scss',
      },
    },
  },
  state: {
    file: {
      opts: {
        filename: '/home/builduser/random/work/5eabb86f60cafa0d/src/Box/Box.js',
        generatorOpts: {
          sourceFileName: 'Box.js',
        },
      },
    },
  },
};

const twoLevel = {
  api: {
    node: {
      source: {
        value: '../style.scss',
      },
    },
  },
  state: {
    file: {
      opts: {
        filename:
          '/home/builduser/random/work/5eabb86f60cafa0d/src/Box/MoreBox/Box.js',
        generatorOpts: {
          sourceFileName: 'Box.js',
        },
      },
    },
  },
};

describe('babel-plugin-sass-to-es', () => {
  it('should handle 1 level paths', async () => {
    const data = { ...oneLevel };
    const transpiler = transpileSASS();
    expect(data.api.node.source.value).toBe('./style.scss');
    transpiler.visitor.ImportDeclaration(data.api, data.state);
    expect(data.api.node.source.value).toBe('../../es/src/Box/style.scss');
  });

  it('should handle 2 level paths', async () => {
    const data = { ...twoLevel };
    const transpiler = transpileSASS();
    expect(data.api.node.source.value).toBe('../style.scss');
    transpiler.visitor.ImportDeclaration(data.api, data.state);
    expect(data.api.node.source.value).toBe('../../../es/src/Box/style.scss');
  });
});
