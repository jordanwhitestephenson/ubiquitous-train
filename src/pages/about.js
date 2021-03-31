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
            <h1>Consultant. Partner. Cat Wrangler</h1>
            <p className="">I believe my job is straightforward: make every customer touchpoint matter in the pursuit of helping people thrive and businesses succeed.
After 5 years as a software developer,  I understand both the visual and functional aspects of creating for the web. I love helping products succeed.</p>
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
              <Grid item xs={12} sm={4} className="d-flex align-items-start">
                <div class="text-container">
                  <h2 className="white-text" style={{ marginTop: 0 }}>My Approach</h2>
                  <p className="subtitle white-text" style={{ paddingBottom: "20px" }} >I bring a customer-centric approach to every project.</p>
                  <img src={donut} />
                </div>
              </Grid>
              <Grid item xs={12} sm={8} className="d-flex align-items-center padding-left-desktop-grid">
                <div className="text-container">
                  {/* <p className="white-text">Whether it’s a small change or a complete overhaul of your website, store, or app, I bring a customer-centric mindset to every project.</p> */}
                  <div className="icon-container">
                    <Grid container className="design-icon-container" spacing={6}>
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
          </Grid>

          <div container className="gray-container">
        
            <Grid container spacing={2}class=" pink-container flex-wrap margin-auto d-flex">
              <Grid item xs={12} sm={6} className="d-flex align-items-center">
                <div class="text-container">
                  <h2 className="" style={{ marginTop: 0 }}>My Process</h2>
                  <p className="subtitle" style={{ paddingBottom: "20px" }} ></p>
                  <div>
                    <h5 className="icon-box-title">1.) Empathize</h5>
                    <p className="">(learn about the audience for whom I am designing). Using contextual inquiry, surveying, advanced UX research and competitive analysis, I can gain a variety of user insights that can be used to mold personas, storyboards, and journey maps. These all help inform the business who and why we are designing for.</p>
                  </div>
                  <div>
                    <h5 className="icon-box-title">2.) Define</h5>
                    <p className="">(construct a POV that is based on user needs and insights) by defining the problem we can understand what features, functions or elements we can use to help the users solve it.</p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} className="d-flex align-items-start">
                <img className = "img-square-about" src={hat} />
              </Grid>
            </Grid>
            <div className="d-flex align-items-center">
              <div className="text-container pink-container">
                {/* <p className="white-text">Whether it’s a small change or a complete overhaul of your website, store, or app, I bring a customer-centric mindset to every project.</p> */}
                <div className="icon-container">
                  <div className="design-icon-container" >

                    <div>
                      <h5 className="icon-box-title">3.) Ideate</h5>
                      <p className="">(generating ideas) by way of brainstorming, rapid prototyping, sketching, design studio, and low-fidelity wireframes, we can start ideating some solutions and even begin testing the concepts with users to start iterating the concepts. We want to be free thinking in this stage and expand the problem space.</p>
                    </div>
                    <div>
                      <h5 className="icon-box-title">4.) Prototype</h5>
                      <p className="">(experiment). In addition to designing the high-fidelity prototype, I will create an Invision prototype (or in some cases a paper prototype, as mentioned before) to use internally or with the testing panel to continue to inform us about the perspective of the end user.</p>
                    </div>
                    <div>
                      <h5 className="icon-box-title ">5.) Test</h5>
                      <p className="">(final stage). This is probably the best part of the process, by actually testing the clickable high-fidelity app/web prototype formally I can dig deeper into the product and the user's goals. In some cases, the problem may be redefined, and in many cases, we will iterate the design once more. In my most expansive projects, we can go through 3-4 rounds of testing.</p>
                    </div>

                  </div>
                </div>
              </div>
            </div>


          </div>


        </div>

      </div>

    </Container>


  </Layout>
)
export default AboutPage