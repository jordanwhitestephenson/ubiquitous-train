import React, { useState } from "react"
import Layout from '../components/layout'
import Grid from '@material-ui/core/Grid';
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"
import GiroSport from '../images/GiroMockupMobile.png'
import Nolly from '../images/2.png'
import BarnStay from '../images/1.png'
import snake from '../images/snake.png'
import Button from '@material-ui/core/Button';

const PortfolioPage = (props) => {

  return (
    <Layout location={props.location} title={'Portfolio'}>
      <SEO title="Jordan Portfolio" />

      <div class="content-center" style={{ flexDirection: "column" }}>
        <Grid container style={{ height: "100%" }} container className=" padding-top-bottom-container max-width-container">
          <Grid item xs={12} md={6}>
            <div className="text-container">
              <h1 className="title">Portfolio</h1>
              <p class=""> At my best, I am a thoughtful, collaborative leader and passionate learner. I use my well-rounded perspective to find creative and purposeful solutions for the tough problems. I am an authentic community builder who works with intention for the greater good.  </p>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={snake} />
          </Grid>

        </Grid>
        <div className="case-studies ">
          <div className= "max-width-container">
          <div class="latest-work-container d-flex flex-column full-width">
            <h2>Latest Work</h2>
            <div class="devicer"></div>
          </div>

          <Grid container className="case-study-container wrap-reverse">

            <Grid item xs={12} md={6} className="case-study-text-container ">
              <div class="text-block-padding">
                <h5 className="icon-box-title ">Giro Sport Design</h5>
                <h6>UI/UX Designed and Developed</h6>
                <p className="">Giro Sport Design is composed of an established team of ski, snowboard and bike athletes. Giro's goal was to showcase sponsered athletes in a new and exciting way. One of the main goals was to get consumers excited about the brand and the athletes that Giro sponsers.</p>
                <Button variant="contained">Learn More</Button>
              </div>

            </Grid>
            <Grid item xs={12} md={6}>
              <img src={GiroSport} className="img-portfolio-padding-right-mobile" />
            </Grid>
          </Grid>
          <Grid container className="case-study-container wrap-reverse">

            <Grid item xs={12} md={6} className="case-study-text-container">
              <div class="text-block-padding">
                <h5 className="icon-box-title ">Nolly Consulting</h5>
                <h6>UI/UX Designed</h6>
                <p className="">Giro Sport Design is composed of an established team of established ski, snowboard and bike athletes. Giro's goal was to showcase sponsered athletes in a new and exciting way. One of the main goals was to get consumers excited about the brand and the athletes that Giro sponsers.</p>
                <Button variant="contained">Learn More</Button>
              </div>

            </Grid>
            <Grid item xs={12} md={6}>
              <img src={Nolly} className="img-portfolio-padding-right-mobile" />
            </Grid>
          </Grid>
          <Grid container className="case-study-container wrap-reverse">

            <Grid item xs={12} md={6} className="case-study-text-container">
              <div class="text-block-padding">
                <h5 className="icon-box-title ">BarnStay</h5>
                <h6>UI/UX Designed and Developed</h6>
                <p className="">Giro Sport Design is composed of an established team of established ski, snowboard and bike athletes. Giro's goal was to showcase sponsered athletes in a new and exciting way. One of the main goals was to get consumers excited about the brand and the athletes that Giro sponsers.</p>
                <Button variant="contained">Learn More</Button>
              </div>

            </Grid>
            <Grid item xs={12} md={6}>
              <img src={BarnStay} className="img-portfolio-padding-right-mobile" />
            </Grid>
          </Grid>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default PortfolioPage

