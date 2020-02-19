const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const result = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            path
                        }
                    }
                }
            }
        }
    `);
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {

        createPage({
            path: node.frontmatter.path,
            component: path.resolve(`./src/templates/post.js`),
            context: {
                pathName: node.frontmatter.path
            }
        });
    })
};