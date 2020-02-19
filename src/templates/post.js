import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from './layout';

export const query = graphql`
    query($pathName: String!) {
        markdownRemark(frontmatter: { path: { eq: $pathName } }) {
            frontmatter {
                author
                category
                title
                hero
                date(formatString: "YYYY-MM-DD")
                path
            }
            html
        }
    }
`;

const PostPage = ({ data }) => {
    const post = data.markdownRemark;
    console.log(post);
    return (
        <Layout>
            <div className="uk-width-1-1 uk-margin-bottom">
                <img src={post.frontmatter.hero} alt={post.frontmatter.title} />
            </div>
            <div className="uk-width-2-3 uk-align-center uk-margin-large-bottom">
                <div className="uk-article">
                    <h2 className="uk-article-title">{post.frontmatter.title}</h2>
                    <p className="uk-article-meta">
                        <span uk-icon="icon: user"></span> {post.frontmatter.author} @ {post.frontmatter.date}
                        <span className="uk-float-right">
                            <span uk-icon="icon: album"></span> <Link to={post.frontmatter.category}>{post.frontmatter.category}</Link>
                        </span>
                    </p>
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                </div>
            </div>
        </Layout>
    );
};

export default PostPage;