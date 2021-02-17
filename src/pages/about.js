import React from "react"
import Layout from '../components/Layout'
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Jordan from '../images/Jordan.png'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import JordanProfessional from '../images/heart.png'
import { faTape, faCompass, faDatabase, faChartLine } from '@fortawesome/free-solid-svg-icons'

const AboutPage = () => (
  <Layout>
    <Container fixed class=" subcontainer-padding-top-from-header">
      <Grid container spacing={3} className="max-width-container padding-top-bottom-container flex-wrap-reverse">
        <Grid item xs={12} sm={6}>
          <div className="text-container">
            <p className="subtitle">ABOUT ME</p>
            <h1>Consultant. Designer.
Developer. Partner.</h1>
            <p className="">I believe my job is straightforward: make every customer touchpoint matter in the pursuit of helping people thrive and businesses succeed.
After 5 years as a software developer,  I understand both the visual and functional aspects of creating for the web.</p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src={JordanProfessional} />
        </Grid>
      </Grid>
      <div className="black-container">
        <div className="">
          <Grid container spacing={3} className="pink-container padding-top-bottom-container">
            <Grid item xs={12} sm={6}>
              <div class="text-container">
                <p className="subtitle white-text">MY APPROACH</p>
                <h2 className="white-text">I bring a customer-centric approach to every project.</h2>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="text-container">
                <p className="white-text">Whether it’s a small change or a complete overhaul of your website, store, or app, I bring a customer-centric mindset to every project.</p>
                <div className="icon-container">
                  <Grid container className="design-icon-container" spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <FontAwesomeIcon icon={faTape} className="white-text" />
                      <h5 className="icon-box-title white-text">Design That Really Matters</h5>
                      <p className="white-text">Every customer touchpoint matters. Whether it's messaging, a simple click, or a multi-step process — it's important we consider every interaction our customers have.</p>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FontAwesomeIcon icon={faDatabase} className="white-text" />
                      <h5 className="icon-box-title white-text">Modern Tech That Scales</h5>
                      <p className="white-text">I believe it's critical to lay a technology foundation that won't just get you where you need to go, but will scale with you as you grow — making your life easier, not harder. </p>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FontAwesomeIcon icon={faCompass} className="white-text" />
                      <h5 className="icon-box-title white-text">Data-Driven Decisions</h5>
                      <p className="white-text">My approach is to intimately understand how your customers engage using analytics and data — it's one of the most important aspects of crafting a great CX. </p>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FontAwesomeIcon icon={faChartLine} className="white-text" />
                      <h5 className="icon-box-title white-text">Driving Results For Growth</h5>
                      <p className="white-text">I prefer to start with the end in mind. Asking, ``What are we trying to achieve and how will we get there?``. From there, every calculated decision is made towards helping you grow.</p>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>

      </div>

    </Container>


  </Layout>
)
export default AboutPage