import React from "react"
import { Link, graphql } from "gatsby"
import Grid from '@material-ui/core/Grid';
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from '@material-ui/core/Button';
import SearchPosts from "../components/searchPosts"
import BlogImage from '../images/123123.png'

class Blog extends React.Component {
  render() {
    const { data, navigate, location } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges
    const localSearchBlog = data.localSearchBlog



    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <div>
          <Grid container style={{ height: "100%"}} container className="featured-blog-container">

            <Grid item xs={12} md={12} className = "d-flex blog-background flex-wrap" 
            >
              <Grid item xs={12} md={6} className = "d-flex justify-content-center image-container">
                <img className = "square-image" alt = {posts[0].node.frontmatter.title} src = {posts[0].node.frontmatter.image.childImageSharp.fluid.src} />
              </Grid>
              <Grid item xs={12} md={6} className = "d-flex justify-content-center flex-column padding-50">
                <h1 className="white-text">{posts[0].node.frontmatter.title}</h1>
                <p className = "white-text">{posts[0].node.frontmatter.description}</p>
                <Link to = {`/blog${posts[0].node.fields.slug}`}>
                <Button variant="contained">READ ARTICLE</Button>
                </Link>
              </Grid>
              {/* <div className="text-container my-blog-container">
                <h1 className="title text-center">My Blog</h1>
                <p class="text-center">My blog about Strategic Design (UX/CX) </p>
              </div> */}
            </Grid>
            <Grid item xs={12} md={12}>
              <h2 className = "latest-post">Latest Posts</h2>
              <SearchPosts 
                posts={posts}
                localSearchBlog={localSearchBlog}
                navigate={navigate}
                location={location}
              />
            </Grid>

          </Grid>

        </div>
      </Layout>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }

    localSearchBlog {
      index
      store
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
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
    }
  }
`

