import React from 'react';
import { Link } from 'gatsby';
import Layout from './layout';

const postsByAuthor = ({ pageContext }) => {
    const { authorName, posts } = pageContext;
    return (
        <Layout>
            <div className="uk-width-1-1 uk-width-2-3@l uk-width-2-3@xl uk-align-center">
                <h2 className="uk-article-title uk-margin-bottom">Posts in Category: {authorName}</h2>
                {posts.map((post, index) => {
                    return(
                        <div className="uk-card uk-card-default uk-card-body uk-margin-bottom" key={index}>
                            <h3 className="uk-card-title">
                                <Link to={`/${post.frontmatter.path}`}>{post.frontmatter.title}</Link>
                            </h3>
                            <p className="uk-text-meta">
                                <span uk-icon="icon: album" className="uk-margin-small-right"></span> 
                                <Link to={`/${post.frontmatter.category}`}>{post.frontmatter.category}</Link>
                            </p>
                        </div>
                    )
                    
                })}
            </div>
        </Layout>
    );
};

export default postsByAuthor;