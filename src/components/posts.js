import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

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
                  date(formatString: "YYYY-MM-DD")
                  title
                  path
                  hero {
                    childImageSharp {
                      fixed {
                        ...GatsbyImageSharpFixed
                      }
                    }
                  }
                }
              }
            }
          }
        }  
      `}
      render={data => (
        <section>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div className="card margin-top-large margin-bottom-large" key={node.id}>
              
              {node.frontmatter.hero &&
                <div>
                  <Link to={node.frontmatter.path}>
                    <Img fixed={node.frontmatter.hero.childImageSharp.fixed} alt={node.frontmatter.title} />
                  </Link>
                </div>  
              }
                
              
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