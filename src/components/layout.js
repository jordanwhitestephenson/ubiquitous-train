/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Grid from '@material-ui/core/Grid';
import Jordan from '../images/Jordan50111.png'
import Nav from "./nav"
import "./layout.css"

const Layout = (props) => {
console.log(props, 'WHEN DOES')

  return (
    <>

      <div className="wrapper">
        {props && props.location === "Home" || props && props.location && props.location.pathname === "/" ?
          <div className="page-header section-dark">
            <Nav siteTitle={`Title`} />
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
              </Grid>
            </div>

          </div> :

          <div className="page-header section-dark" >
            <Nav siteTitle={`Title`} navcolor="white" />
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
