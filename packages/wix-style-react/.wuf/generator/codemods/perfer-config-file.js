module.exports = (file, api, options) => {
  const j = api.jscodeshift;
  const root = j(file.source);

  const { ComponentName } = options;

  const pushNewValue = (name, value, size) => {
    const list = root.find(j.VariableDeclaration, {
      declarations: [{ id: { name } }],
    });

    const newValue = j.arrayExpression([
      j.literal(value),
      j.numericLiteral(size),
    ]);

    list.get(0).node.declarations[0].init.elements.push(newValue);
  };

  // for js bundles
  pushNewValue('javascriptFiles', `${ComponentName}.bundle.min.js`, 10);

  return root.toSource({ quote: 'single', trailingComma: true });
};
