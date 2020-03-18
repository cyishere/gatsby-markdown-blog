import React from 'react'
import { Link, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Img from 'gatsby-image'
import Layout from './layout'

export const query = graphql`
  query($pathName: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathName } }) {
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        path
        tags
        hero {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

const PostPage = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const tags = post.frontmatter.tags
  const hero = post.frontmatter.hero
    
  const { prev, next } = pageContext

  return (
      <Layout>
        <Helmet>
          <title>{post.frontmatter.title} | {data.site.siteMetadata.title}</title>
        </Helmet>
        <div>
          {hero &&
            <Img fluid={hero.childImageSharp.fluid} alt={post.frontmatter.title} />
          }
          <div>
            <h2>{post.frontmatter.title}</h2>
            <p>@ {post.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
            <div>
              {tags.map((tag, index) => (
                <Link className="label margin-right" to={`/tags/${tag}`} key={index}>{tag}</Link>
              ))}
            </div>
          </div>

          <hr />

          <div>
            <h3>More Posts...</h3>
            {prev &&
              <div>
                <h4>
                  <Link to={prev.frontmatter.path}>{prev.frontmatter.title}</Link>
                </h4>
              </div>
            }
            {next &&
              <div>
                <h4>
                  <Link to={`/${next.frontmatter.path}`}>{next.frontmatter.title}</Link>
                </h4>
              </div>
            }
          </div>
                
        </div>
            
        
            
      </Layout>
  )
}

export default PostPage