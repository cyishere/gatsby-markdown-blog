import React from 'react'
import { Link, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from './layout'

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const singleTagPosts = ({ data, pageContext }) => {
  const { tagName, posts } = pageContext
  return(
    <Layout>
      <Helmet>
        <title>Posts by #{tagName} | {data.site.siteMetadata.title}</title>
      </Helmet>
      <div>
        <h2>Posts by #{tagName}</h2>
        {posts.map((post, index) => {
          return (
            <div className="card margin-top-large margin-bottom-large" key={index}>
              <h3>
                <Link to={`/${post.frontmatter.path}`}>{post.frontmatter.title}</Link>
              </h3>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default singleTagPosts