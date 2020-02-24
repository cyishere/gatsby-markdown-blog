const path = require('path');

const createSinglePostPage = (createPage, posts) => {
    const singlePostPageTemplate = path.resolve(`./src/templates/post.js`);

    posts.forEach(({ node }) => {
        createPage({
            path: node.frontmatter.path,
            component: singlePostPageTemplate,
            context: {
                pathName: node.frontmatter.path
            }
        });
    });
}

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

const createTagPages = (createPage, posts) => {
    const allTagsIndexTemplate = path.resolve('src/templates/all-tags-index.js');
    const singleTagPostsTemplate = path.resolve('src/templates/single-tag-posts.js');

    postsByTag = {};

    posts.forEach(({ node }) => {
        if (node.frontmatter.tags) {
            node.frontmatter.tags.forEach(tag => {
                if (!postsByTag[tag]) {
                    postsByTag[tag] = [];
                }
                postsByTag[tag].push(node);
            });
        }
    });

    const tags = Object.keys(postsByTag);

    createPage({
        path: '/tags',
        component: allTagsIndexTemplate,
        context: {
            tags: tags.sort()
        }
    });

    tags.forEach(tagName => {
        const posts = postsByTag[tagName];
        
        createPage({
            path: `/tags/${tagName}`,
            component: singleTagPostsTemplate,
            context: {
                posts,
                tagName
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
                            tags
                            title
                        }
                    }
                }
            }
        }
    `);

    const posts = result.data.allMarkdownRemark.edges;

    createCategoryPages(createPage, posts);

    createSinglePostPage(createPage, posts);

    createTagPages(createPage, posts);
};