import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from './layout';

export const query = graphql`
    query($categoryName: String!) {
        allMarkdownRemark(filter: {frontmatter: { category: { eq: $categoryName } }}) {
            edges {
                node {
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
            
        }
    }
`;

const postsByCategory = ({ data, pageContext }) => {
    const { categoryName } = pageContext;
    return (
        <Layout>
            <div className="uk-width-2-3 uk-align-center">
                <h2 className="uk-article-title uk-margin-bottom">Posts in Category: {categoryName}</h2>
                {data.allMarkdownRemark.edges.map(({node}) => {
                    return (
                        <div className="uk-card uk-card-default uk-margin-bottom uk-grid" key={node.frontmatter.title}>
                            <div className="uk-card-media-left uk-width-1-3 uk-cover-container">
                                <img src={node.frontmatter.hero} alt={node.frontmatter.title} data-uk-cover />
                                <canvas></canvas>
                            </div>
                            <div className="uk-width-2-3">
                                <div className="uk-card-body">
                                    <h2 className="uk-card-title">
                                        <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
                                    </h2>
                                    <p className="uk-text-meta">
                                        <span uk-icon="icon: user"></span> {node.frontmatter.author} @ {node.frontmatter.date}
                                        <span className="uk-float-right">
                                            <span uk-icon="icon: album" className="uk-margin-small-right"></span> 
                                            <Link to={node.frontmatter.category}>{node.frontmatter.category}</Link>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                    
                })}
            </div>
        </Layout>
    );
};

export default postsByCategory;