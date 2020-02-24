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

const allTagsIndex = ({ data, pageContext }) => {
    const { tags } = pageContext;
    return(
        <Layout>
            <Helmet>
                <title>All Tags | {data.site.siteMetadata.title}</title>
            </Helmet>
            <div className="uk-width-1-1 uk-width-2-3@l uk-width-2-3@xl uk-align-center">
                <h2 className="uk-artile-title">All Tags:</h2>
                <div data-uk-margin className="tag-group">
                    {tags.map((tag, index) => {
                        return (
                            <Link className="uk-button uk-button-default" to={`/tags/${tag}`} key={index}>{tag}</Link>
                        )
                    })}
                    
                </div>
            </div>
        </Layout>
    );
};

export default allTagsIndex;