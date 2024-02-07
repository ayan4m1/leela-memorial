const { resolve } = require('path');

exports.createPages = async () => {};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [resolve(__dirname, 'src'), 'node_modules']
    }
  });
};
