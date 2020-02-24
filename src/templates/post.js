import React from 'react';
import { Link, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
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
                tags
            }
            html
        }
        site {
            siteMetadata {
                title
            }
        }
    }
`;

const PostPage = ({ data, pageContext }) => {
    const post = data.markdownRemark;
    const tags = post.frontmatter.tags;
    
    const { prev, next } = pageContext;

    return (
        <Layout>
            <Helmet>
                <title>{post.frontmatter.title} | {data.site.siteMetadata.title}</title>
            </Helmet>
            <div className="uk-width-1-1 uk-margin-bottom">
                <img src={post.frontmatter.hero} alt={post.frontmatter.title} />
            </div>
            <div className="uk-width-2-3@xl uk-width-2-3@l uk-width-2-3@m uk-width-3-4 uk-align-center uk-margin-large-bottom">
                <div className="uk-article">
                    <h2 className="uk-article-title">{post.frontmatter.title}</h2>
                    <p className="uk-article-meta">
                        <span uk-icon="icon: user"></span> {post.frontmatter.author} @ {post.frontmatter.date}
                        <span className="uk-float-right uk-text-uppercase">
                            <span uk-icon="icon: album"></span> <Link to={`/${post.frontmatter.category}`}>{post.frontmatter.category}</Link>
                        </span>
                    </p>
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                    <div className="uk-width-1-1 uk-margin-large-top">
                        {tags.map((tag, index) => {
                            return (
                                <Link to={`/tags/${tag}`} class="uk-button uk-button-default uk-margin-right" key={index}>{tag}</Link>
                            )
                        })}
                    </div>
                </div>
                
            </div>
            
            <hr />

            <div className="uk-width-2-3@xl uk-width-2-3@l uk-width-2-3@m uk-width-3-4 uk-align-center uk-margin-large-bottom">
                <h3>More Posts...</h3>
                {prev &&
                    <div className="uk-card uk-card-default uk-card-body uk-margin-bottom">
                        <h4><Link to={prev.frontmatter.path}>{prev.frontmatter.title}</Link></h4>
                    </div>
                }
                {next &&
                    <div className="uk-card uk-card-default uk-card-body">
                        <h4><Link to={`/${next.frontmatter.path}`}>{next.frontmatter.title}</Link></h4>
                    </div>
                }
            </div>
            
        </Layout>
    );
};

export default PostPage;