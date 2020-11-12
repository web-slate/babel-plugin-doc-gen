let fs = require('fs');
let content = 'initial \n';

module.exports = function plugin({ types }) {
  return {
    name: "babel-plugin-doc-gen",
    visitor: {
      Program(path) {
        content += JSON.safeStringify(path.get("body"), null, 2)
      }
    },
    post() {
      fs.writeFileSync('./docs/router-docs.md', 'content');
    }
  };
};
