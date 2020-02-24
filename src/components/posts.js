import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';

const PostsList = () => {
    return (
        <StaticQuery
            query={graphql`
                query {
                    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
                        edges {
                            node {
                                id
                                frontmatter {
                                    category
                                    author
                                    date(formatString: "YYYY-MM-DD")
                                    title
                                    path
                                    hero
                                }
                            }
                        }
                    }
                }
                
            `}
            render={data => (
                <div className="uk-width-1-1 uk-width-2-3@l uk-width-2-3@xl uk-align-center">
                    {data.allMarkdownRemark.edges.map(({ node }) => (

                        <div className="uk-card uk-card-default uk-margin-bottom uk-grid" key={node.id}>
                            <div className="uk-card-media-left uk-width-1-3 uk-cover-container">
                                <Link to={`/${node.frontmatter.path}`}>
                                    <img src={node.frontmatter.hero} alt={node.frontmatter.title} data-uk-cover />
                                    <canvas></canvas>
                                </Link>        
                            </div>
                            <div className="uk-width-2-3">
                                <div className="uk-card-body">
                                    <h2 className="uk-card-title">
                                        <Link to={`/${node.frontmatter.path}`}>{node.frontmatter.title}</Link>
                                    </h2>
                                    <p className="uk-text-meta">
                                        <span uk-icon="icon: user"></span> <Link to={`/author/${node.frontmatter.author}`}>{node.frontmatter.author}</Link> @ {node.frontmatter.date}
                                        <span className="uk-float-right">
                                            <span uk-icon="icon: album" className="uk-margin-small-right"></span> 
                                            <Link to={`/${node.frontmatter.category}`}>{node.frontmatter.category}</Link>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div> 
            )}
        />
    );

};

export default PostsList;