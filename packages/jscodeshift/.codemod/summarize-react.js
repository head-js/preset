const fs = require('fs');
const path = require('path');
const { parse, print, visit } = require('recast');


const source = fs.readFileSync(path.resolve(__dirname, '../', 'src/ReactComponent.jsx'), 'utf8');


const root = parse(source);
// console.log(root);


let jsx = null;


visit(root, {
  visitExportDefaultDeclaration(path) {
    this.traverse(path);
  },

  visitReturnStatement(path) {
    jsx = path.node.argument;
    this.abort();
  },
});
// console.log(jsx);


function summerize(ast) {
  const root = { id: 'root', parent: 'root', name: '</>', children: [] };
  const stack = [ root ];

  visit(ast, {
    visitJSXElement(path) {
      const { node } = path;
      const name = node.openingElement.name.name;

      const current = { id: '', parent: '', name, children: [] };

      const parent = stack[stack.length - 1];
      parent.children.push(current);

      stack.push(current);

      this.traverse(path);

      stack.pop();

      return false;
    },
  });

  return root;
}


const summary = summerize(jsx);
// console.log(summary);
console.log(JSON.stringify(summary, null, 2));
