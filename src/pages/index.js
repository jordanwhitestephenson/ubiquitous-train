import React, { useState, useEffect } from "react"
import Layout from '../components/layout'
import FadeIn from 'react-fade-in';
import SEO from "../components/seo"
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
    setTimeout(() => {
      this.setState({
        spinner: false
      })
    }, 3000);
  }

  render() {
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
    if (typeof window !== 'undefined') {
      return (

        this.state.spinner ?
          <FadeIn>
            <Animation />
          </FadeIn> :
          <MuiThemeProvider theme={theme}>
            <FadeIn transitionDuration="600">
              <SEO title="Home" />
              <Layout location={this.props.location} title={"Jordan Stephenson Consumer Designer"}>
              </Layout>
            </FadeIn>
          </MuiThemeProvider>
      )
    }
    else {
      return (
        <h2>W</h2>
      )

    }

  }
}


export default IndexPage
