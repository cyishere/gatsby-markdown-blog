import React from 'react';
import Layout from '../templates/layout';

const About = () => {
    return (
        <Layout>
            <div className="uk-width-2-3 uk-align-center uk-margin-large-bottom">
                <div className="uk-article">
                    <h2 className="uk-article-title">What's The Different of This Boilerplate?</h2>
                    <p><strong>GatsMark</strong> is a Markdown blog system boilerplate with Gatsby.</p>
                    <ul>
                        <li>This boilerplate use the wonderful CSS Framework <a href="https://getuikit.com" target="_blank" rel="noopener noreferrer">UIkit</a>.
                            With React the attributes <code>uk-*</code> which trigger the Javascript functions should rewrite to <code>data-uk-*</code>, like in the example below:
                            
                        </li>
                        <li>Posts are organized by categories.</li>
                        <li>Posts are organized by authors.</li>
                    </ul>
                    <p>
                        <img src="images/cat.jpeg" alt="Cat" />
                    </p>
                </div>
            </div>
        </Layout>
    );
}

export default About;