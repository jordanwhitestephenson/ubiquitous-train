import React from 'react'
import PropTypes from 'prop-types'
import { BlogPostTemplate } from '../../templates/blog-post'

const BlogPostPreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(['data', 'tags'])

  return (
    // <BlogPostTemplate
    <h2>y</h2>
    //   content={widgetFor('body')}
    //   title={entry.getIn(['data', 'title'])}
    //   thumbnail={entry.getIn(['data', 'thumbnail'])}
    //   body={entry.getIn(['data', 'body'])}
    //   rating={entry.getIn(['data', 'rating'])}
    //   title={entry.getIn(['data', 'title'])}
    // />
  )
}

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BlogPostPreview
