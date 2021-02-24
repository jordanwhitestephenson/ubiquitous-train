import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { useFlexSearch } from "react-use-flexsearch"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { rhythm } from "../utils/typography"





const AllPosts = ({ posts }) => (
  <div style={{ margin: "20px 0 40px" }}>
    {posts.map(({ node }) => {
      const title = node.frontmatter.title || node.fields.slug
      return (
        <div key={node.fields.slug}>
          <h3
            style={{
              marginBottom: rhythm(1 / 4),
            }}
          >
            <Link style={{ boxShadow: `none` }} to={`/blog${node.fields.slug}`}>
              {title}
            </Link>
          </h3>
          <small>{node.frontmatter.date}</small>
          <p
            dangerouslySetInnerHTML={{
              __html: node.frontmatter.description || node.excerpt,
            }}
          />
        </div>
      )
    })}
  </div>
)

const SearchPosts = ({ posts, localSearchBlog, location, navigate }) => {
  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
  const classes = useStyles();
  console.log(posts, 'POSTS')
  // const title = node.frontmatter.title || node.fields.slug
  return (
    <>
      {posts.map(function (post) {
        return (

          <>
            <img
              className={classes.media}
              src={post.node.frontmatter.image.childImageSharp.fluid.src}
            />

            <Typography gutterBottom variant="h5" component="h2">
              {post.node.frontmatter.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {post.node.frontmatter.description}
            </Typography>



            <Link style={{ boxShadow: `none` }} to={`/blog${post.node.fields.slug}`}>
              GO
                </Link>
          </>

        )
      })}

    </>
  )
}

export default SearchPosts
