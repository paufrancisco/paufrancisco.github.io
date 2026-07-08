const path = require('path');

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  createTypes(`
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }

    type Frontmatter {
      cover: File @fileByRelativePath
    }
  `);
};

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html" || stage === "develop-html") {
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /miniraf/,
              use: loaders.null(),
            },
            {
                test: /scrollreveal/,
                use: loaders.null(),
              },
          ],
        },
      })
    }
  }