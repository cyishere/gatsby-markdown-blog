const path = require('path');

const createCategoryPages = (createPage, posts) => {
    const postsByCategoryTemplate = path.resolve('src/templates/posts-by-category.js');

    const postsByCategory = {};

    posts.forEach(({ node }) => {
        if (node.frontmatter.category) {
            const category = node.frontmatter.category;
            if (!postsByCategory[category]) {
                postsByCategory[category] = [];
            }
            postsByCategory[category].push(node);

        }
    });

    // console.log(JSON.stringify(postsByCategory, null, 4))

    const categories = Object.keys(postsByCategory);

    categories.forEach(categoryName => {
        const posts = postsByCategory[categoryName];

        createPage({
            path: categoryName,
            component: postsByCategoryTemplate,
            context: {
                posts,
                categoryName
            }
        });
    });

};

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const result = await graphql(`
        query {
            allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
                edges {
                    node {
                        frontmatter {
                            path
                            category
                        }
                    }
                }
            }
        }
    `);

    const posts = result.data.allMarkdownRemark.edges;

    createCategoryPages(createPage, posts);

    posts.forEach(({ node }) => {

        createPage({
            path: node.frontmatter.path,
            component: path.resolve(`./src/templates/post.js`),
            context: {
                pathName: node.frontmatter.path
            }
        });
    })
};