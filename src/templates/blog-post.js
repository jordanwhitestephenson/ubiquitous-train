import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

class BlogPostTemplate extends React.Component {
  render() {

    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    console.log('this.props from blog-post', this.props)
    

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description}
        />
        <div>
          <h1>{post.frontmatter.title}</h1>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1),
              marginTop: rhythm(-1),
            }}
          >
            {post.frontmatter.date}
          </p>
          <img src = {post.frontmatter.image.childImageSharp.fluid.src}/>
          <p> {post.frontmatter.description} </p>
          
          <div>
            <ul
              style={{
                display: `flex`,
                flexWrap: `wrap`,
                justifyContent: `space-between`,
                listStyle: `none`,
                padding: 0,
              }}
            >
              <li>
                {previous && (
                  <Link to={`/blog${previous.fields.slug}`} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={`/blog${next.fields.slug}`} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>

        {/* <MDXRenderer>{post.rawBody}</MDXRenderer> */}



      </Layout>
    )
  }
}

export default BlogPostTemplate



export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }

    mdx(fields: { slug: { eq: $slug } }) {
      id
      rawBody
      
      frontmatter {
        
        title
        date(formatString: "MMMM DD, YYYY")
        description
        
        image {
          childImageSharp {
            fluid {
              src
            }
          }
        }
        
      }
    }
  } 


  
`



