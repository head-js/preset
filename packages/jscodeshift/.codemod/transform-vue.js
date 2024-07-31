const adapter = require('vue-jscodeshift-adapter');


function transform({ source }, { jscodeshift: j }) {
  const root = j(source);
  // console.log(root);

  root.find(j.ImportDeclaration).forEach((path) => {
    // const specifiers = path.node.specifiers;
    const source = path.node.source;

    if (source.value === 'element') {
      path.node.source = j.stringLiteral('element-plus');
    }
  });

  return root.toSource({ quote: 'single' });
}


module.exports = adapter(transform);
