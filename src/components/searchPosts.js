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
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { rhythm } from "../utils/typography"



const SearchPosts = ({ posts }) => {
  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      margin: 'auto',
      minHeight: "350px",
      filter: 'grayscale(1)'
    },
    flex: {
      display: "flex",
      justifyContent: "center"

    },
    padding: {

    }

  });

  posts = posts.slice(1)

  return (
    <Grid container className="blog-square-container">
      {posts.map(function (post, index) {
        if (index % 2) {
          return (

            <Grid item xs={12} md={6} className="blog-square">
              <div className="full-width">
                <Link style={{ boxShadow: `none` }} to={`/blog${post.node.fields.slug}`} className="text-center">
                  {/* <div className={classes.flex}>
                  <img
                    className={classes.media}
                    src={post.node.frontmatter.image.childImageSharp.fluid.src}
                  />
                </div> */}

                  <div className="blog-post-content">
                    <div className="d-flex">
                      <p className="blog-post-type">DESIGN</p>
                      <p className="">5 MIN READ</p>
                    </div>

                    <Typography gutterBottom variant="h5" component="h2" className="text-align-left">
                      {post.node.frontmatter.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" className="text-align-left">
                      {post.node.frontmatter.description}
                    </Typography>
                  </div>
                </Link>
              </div>

              <span class="divider"></span>
            </Grid>


          )
        }
        else {
          return (
            <Grid item xs={12} md={6} className="blog-square">
              <div className="full-width">
                <Link style={{ boxShadow: `none` }} to={`/blog${post.node.fields.slug}`} className="text-center">
                  {/* <div className={classes.flex}>
                <img
                  className={classes.media}
                  src={post.node.frontmatter.image.childImageSharp.fluid.src}
                />
              </div> */}

                  <div className="blog-post-content">
                    <div className="d-flex">
                      <p className="blog-post-type">DESIGN</p>
                      <p className="">5 MIN READ</p>
                    </div>

                    <Typography gutterBottom variant="h5" component="h2" className="text-align-left">
                      {post.node.frontmatter.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" className="text-align-left">
                      {post.node.frontmatter.description}
                    </Typography>
                  </div>
                </Link>
              </div>

            </Grid>

          )
        }


      })}

    </Grid>
  )
}

export default SearchPosts
