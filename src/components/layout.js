/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import SummerDrive from '../images/Intro.png'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Jordan from '../images/Jordan50111.png'
import Nav from "./nav"


import "./layout.css"
// class IndexPage extends React.Component {
const Layout = (props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>

      <div className="wrapper">
        {props && props.location === "Home" ?
          <div className="page-header section-dark">
            <Nav siteTitle={data.site.siteMetadata?.title || `Title`} />
            <div className="ultimate-parent-div-under-nav">

              <Grid container className="max-width-container mobile-padding-top" direction="row" justify="space-between" >
                <Grid item xs={12} sm={6} >
                  <h3 className="hello_word">HELLO I'M JORDAN</h3>
                  <h1 className="neon pink">UX/UI</h1>
                  <h1 className="designer_word"> DESIGNER</h1>
                  <p className="jordan-para">I design & develop websites and apps that your customers will love and will help you grow — all through the lens of Customer Experience (CX).</p>
                </Grid>
                <Grid item xs={12} sm={6}>

                  <div className="homeJordanBackground" style={{
                    backgroundImage: `url(${Jordan})`,
                  }}>


                  </div>
                </Grid>



                {/* <Grid item xs={12} sm={6}>
                  <div classNameName="title-brand" id="JordanSentence">
                    <h3 className = "hello_word">HELLO I'M JORDAN</h3>
                    <h2 className="neon pink">UX/UI</h2>
                    <h2 className = "designer_word"> DESIGNER</h2>
                    <p className = "jordan-para">I design & develop websites and apps that your customers will love and will help you grow — all through the lens of Customer Experience (CX).</p>

                    <Button variant="contained"> HIRE ME </Button>
                  </div>
        
                </Grid>
                <Grid item xs={12} sm={6} style = {{ 'display' : 'flex'}}>
                  <img src={SummerDrive} className = "JordanPhoto" />
                </Grid> */}
              </Grid>
            </div>

          </div> :

          <div className="page-header section-dark" >
            <Nav siteTitle={data.site.siteMetadata?.title || `Title`} navcolor="white" />
            <main className={props && props.location === 'Home' ? "main" : "other-pages"}>{props.children}</main>
            <footer style={{
              marginTop: `2rem`
            }}>
              © {new Date().getFullYear()}, Built with
              <a href="https://www.gatsbyjs.com">Gatsby</a>
            </footer>
          </div>
        }

      </div>

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
