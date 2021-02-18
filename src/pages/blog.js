import React from "react"
import { Link, graphql } from "gatsby"
import Grid from '@material-ui/core/Grid';
import Layout from "../components/layout"
import SEO from "../components/seo"

import SearchPosts from "../components/searchPosts"

class Blog extends React.Component {
  render() {
    const { data, navigate, location } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges
    const localSearchBlog = data.localSearchBlog

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Strategic Design (UX/CX) Blog" />
        <div>
        <Grid container style={{ height: "100%" }} container className=" padding-top-bottom-container max-width-container">
          <Grid item xs={12} md={6}>
            <div className="text-container">
              <h1 className="title">My Blog</h1>
              <p class="">My blog about Strategic Design (UX/CX) </p>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            {/* <img src={snake} /> */}
          </Grid>

        </Grid>
        <SearchPosts
          posts={posts}
          localSearchBlog={localSearchBlog}
          navigate={navigate}
          location={location}
        />
        </div>
        <Link to="/">
back
        </Link>
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
          }
        }
      }
    }
  }
`

