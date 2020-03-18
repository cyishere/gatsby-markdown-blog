import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

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
        <section>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <div>
                <Link to={node.frontmatter.path}>
                  <img src={node.frontmatter.hero} alt={node.frontmatter.title} />
                </Link>
              </div>
              <h3><Link to={node.frontmatter.path}>{node.frontmatter.title}</Link></h3>
              <p>@ {node.frontmatter.date}</p>
            </div>
          ))}
        </section>
      )}
    />
  )

}

export default PostsList