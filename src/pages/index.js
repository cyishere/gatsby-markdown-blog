import React from 'react';
import Layout from '../templates/layout';
import PostsList from '../components/posts';

const Index = () => {
    return (
        <Layout>
            <div className="uk-padding uk-margin">
                <PostsList />
            </div>
        </Layout>
    );
};

export default Index;
