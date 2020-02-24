import React from 'react';
import { Link, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from './layout';

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`;

const singleTagPosts = ({ data, pageContext }) => {
    const { tagName, posts } = pageContext;
    return(
        <Layout>
             <Helmet>
                <title>Posts by #{tagName} | {data.site.siteMetadata.title}</title>
            </Helmet>
            <div className="uk-width-1-1 uk-width-2-3@l uk-width-2-3@xl uk-align-center">
                <h2 className="uk-article-title uk-margin-bottom">Posts by #{tagName}</h2>
                {posts.map((post, index) => {
                    return (
                        <div className="uk-card uk-card-default uk-margin-bottom uk-grid" key={index}>
                            <div className="uk-card-body">
                                <h3 className="uk-card-title">
                                    <Link to={`/${post.frontmatter.path}`}>{post.frontmatter.title}</Link>
                                </h3>
                            </div>
                        </div>
                    )
                })}
            </div>
        </Layout>
    );
};

export default singleTagPosts;