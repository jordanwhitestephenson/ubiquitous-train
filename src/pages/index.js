import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Layout from '../components/layout'
import FadeIn from 'react-fade-in';
import SEO from "../components/seo"
import Navigation from '../components/nav'
import CMS from 'netlify-cms-app'
import BlogPostPreview from '../cms/preview-templates/BlogPostPreview'
import { Router } from "@reach/router"
import About from '../pages/about'
import Home from '../pages/home'
import Animation from '../components/animation'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


// Initialize the CMS object
// CMS.init()
// CMS.registerPreviewTemplate('blog', BlogPostPreview)
// Now the registry is available via the CMS object.
// CMS.registerPreviewTemplate('my-template', MyTemplate)
class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      spinner: true,
    }
  }

  componentDidMount() {
    // console.log('YAAA?!')


    setTimeout(() => {
      this.setState({
        spinner: false
      })
    }, 3000);

    // Runs after the first render() lifecycle
  }

  render() {
console.log(this.props, 'INDEX')
    const theme = createMuiTheme({
      palette: {
        primary: {
          light: '#fff',
          main: 'rgb(23, 105, 170)',
          dark: '#000'
        },
        secondary: {
          main: '#6f8a83',
        },
      },

    });
    return (

      this.state.spinner ?
        <FadeIn>
          <Animation />
        </FadeIn> :
        <MuiThemeProvider theme={theme}>
          <FadeIn transitionDuration="600">
            <SEO title="Home" />
            <Layout location = {this.props.location} title = {"Jordan Stephenson Consumer Designer"}>
              {/* <Home /> */}
            </Layout>
          </FadeIn>
        </MuiThemeProvider>
    )
  }
}


export default IndexPage
