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

const allTagsIndex = ({ data, pageContext }) => {
  const { tags } = pageContext
  return(
    <Layout>
      <Helmet>
        <title>All Tags | {data.site.siteMetadata.title}</title>
      </Helmet>
      <section>
        <h2>All Tags:</h2>
          <div>
            {tags.map((tag, index) => {
              return (
                <Link className="label margin-right" to={`/tags/${tag}`} key={index}>{tag}</Link>
              )
            })}
                    
          </div>
      </section>
    </Layout>
  )
}

export default allTagsIndex