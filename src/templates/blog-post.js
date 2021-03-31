import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

class BlogPostTemplate extends React.Component {
  render() {

    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext



    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description}
        />
        <div className = "parent-blog-post-container">
        <div>
          <img className = "full-width contained-image" src={post.frontmatter.image.childImageSharp.fluid.src} />
        </div>

        <div style={{ "padding": "20px" }}>
        <div class = "bread-crumbs">
          <Link to = {`/`} rel = "home" style = {{"paddingLeft": "10px", "color" : "#acacac"}}>
            Home / 
          </Link>
          <Link to = {`/blog`} rel = "blog" style = {{"paddingLeft": "10px", "paddingRight" : "10px", "color" : '#acacac'}}>
                Blog / 
          </Link>
          {post.frontmatter.title}
        </div>
          <h1>{post.frontmatter.title}</h1>
          <p> {post.frontmatter.description} </p>
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


          <div dangerouslySetInnerHTML={{ __html: this.props.data.markdownRemark.html }} />


          <div>
            <ul
              style={{
                display: `flex`,
                flexWrap: `wrap`,
                justifyContent: `space-between`,
                listStyle: `none`,
                padding: "35px",
              }}
            >
              <li>
                {previous && (
                  <Link to={`/blog${previous.fields.slug}`} rel="prev">
                    ← Previous Story :  {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={`/blog${next.fields.slug}`} rel="next">
                    Next Story : {next.frontmatter.title} →
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
        </div>

       

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
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        description
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



