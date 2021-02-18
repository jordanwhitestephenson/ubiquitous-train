import React from "react"
import { Link, graphql } from "gatsby"


import Layout from "../components/layout"
import SEO from "../components/seo"

import SearchPosts from "../components/searchPosts"

class Blog extends React.Component {
  render() {
    console.log(this.props, '1#!@3')
    const { data, navigate, location } = this.props

    const siteTitle = data.site.siteMetadata.title
    // const posts = data.allMdx.edges
    // const localSearchBlog = data.localSearchBlog

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
  
        {/* <SearchPosts
          posts={posts}
          localSearchBlog={localSearchBlog}
          navigate={navigate}
          location={location}
        /> */}
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

  }
`

