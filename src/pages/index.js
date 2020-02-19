import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../templates/layout';
import PostsList from '../components/posts';

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`;

const Index = ({ data }) => {
    return (
        <Layout>
            <Helmet>
                <title>{data.site.siteMetadata.title}</title>
            </Helmet>
            <div className="uk-padding uk-margin">
                <PostsList />
            </div>
        </Layout>
    );
};

export default Index;
