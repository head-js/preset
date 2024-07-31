module.exports = function ({ source }, { jscodeshift: j }) {
  const root = j(source);
  // console.log(root);

  root.find(j.ImportDeclaration).forEach((path) => {
    // const specifiers = path.node.specifiers;
    const source = path.node.source;

    if (source.value === 'antd') {
      path.node.source = j.stringLiteral('antd-plus');
    }
  });

  return root.toSource({ quote: 'single' });
}
