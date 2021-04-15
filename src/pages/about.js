import React from "react"
import Layout from '../components/layout'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import JordanProfessional from '../images/heart.png'
import { faTape, faCompass, faDatabase, faChartLine } from '@fortawesome/free-solid-svg-icons'
import donut from '../images/boots.png'
import hat from '../images/me.png'

const AboutPage = () => (
  <Layout>
    <Container fixed class=" subcontainer-padding-top-from-header">
      <Grid container spacing={4} className="max-width-container padding-top-bottom-container flex-wrap-reverse margin-auto">
        <Grid item xs={12} sm={6}>
          <div className="text-container">
            <p className="subtitle">ABOUT ME</p>
            <h1>Detail‑Oriented, Tech‑Savvy, & Analytically Focused</h1>
            <p className="">
            I thrive when breaking down complex technical problems, prioritizing for MVP, and then helping to communicate a resolution from stakeholders to developers and back again so that everyone is on the same page and has clear expectations.
          </p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src={JordanProfessional} />
        </Grid>
      </Grid>
      <div className="">
        <div className="">
          <Grid container className="black-container">
            <Grid className="pink-container  flex-wrap padding-top-bottom-container margin-auto d-flex">
              <Grid item xs={12} sm={6} className="d-flex align-items-start">
                <div class="text-container">
                  <h2 className="white-text" style={{ marginTop: 0 }}>My Approach</h2>
                  <p className="subtitle white-text" style={{ paddingBottom: "20px" }} >I bring a customer-centric approach to every project.</p>
                  <img src={donut} />
                </div>
              </Grid>
              <Grid item xs={12} sm={6} className="d-flex align-items-center padding-left-desktop-grid">
                <div className="text-container">
                  {/* <p className="white-text">Whether it’s a small change or a complete overhaul of your website, store, or app, I bring a customer-centric mindset to every project.</p> */}
                  <div className="icon-container">
                    <Grid container className="design-icon-container" spacing={6}>
                      <Grid item xs={12} >

                        <p className="white-text">At the end of the day, my goal is to view the product and its features from the eyes of the user and to create an optimized experience that eases pain points and brings joy. <br /><br />

                        As a former Web Engineer turned Product Manager, I understand what it means to build products that are high-quality, cohesive, and scalable. I have built awareness for the small details, which is helpful for working through requirements, visualizations, models, and prototypes with cross-functional team members. I feel at ease working with data scientists, engineers, creatives & other business-oriented individuals. I can appropriately approach problem-solving and actively maintain a holistic viewpoint through various phases.<br /><br />

                        I have multiple years of experience in a wide range of disciplines including entrepreneurship, engineering, data, analytics, internet marketing, conversion optimization, and UX. These experiences have given me unique insights into the product lifecycle and has allowed me to think through the entire customer journey while challenging our own assumptions.</p>
                      </Grid>

                    </Grid>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>

          <div container className="gray-container">

            <Grid container spacing={2} class=" pink-container flex-wrap margin-auto d-flex">
              <Grid item xs={12} sm={6} className="d-flex align-items-center">
                <div class="text-container">
                  <h2 className="" style={{ marginTop: 0 }}>Noteworthy Skills</h2>
                  <p className="subtitle" style={{ paddingBottom: "20px" }} ></p>
                  <div>
                    <p className="">
Google Analytics, SQL, MongoDB, PostgreSQL, MySQL, Microsoft Office Suite, Google Docs Suite, Slack, Intercom, Jira,Trello, SalesForce Commerce Cloud, HotJar,  Google Tag Manager, Git, JSON, RESTful API, Adobe Creative Suite, Sketch, Figma, HTML, CSS, Javascript, React.js, Scrum Methodologies.</p>
                  </div>

                </div>
              </Grid>
              <Grid item xs={12} sm={6} className="d-flex align-items-start">
                <img className="img-square-about" src={hat} />
              </Grid>
            </Grid>



          </div>


        </div>

      </div>

    </Container>


  </Layout>
)
export default AboutPage