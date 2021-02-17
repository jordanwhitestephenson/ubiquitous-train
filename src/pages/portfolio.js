import React, { useState } from "react"
import Layout from '../components/Layout'
import Jordan from '../images/Jordan.png'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import MyModal from '../components/modal'
import Button from '@material-ui/core/Button';
import GiroSport from '../images/GiroMockupMobile.png'
import Nolly from '../images/2.png'
import BarnStay from '../images/1.png'
import snake from '../images/snake.png'

const PortfolioPage = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = (type) => {
    setOpen(type);
  }
  const onCloseModal = () => {
    setOpen(false);

  }

  return (
    <Layout>
      <div class="content-center" style={{ flexDirection: "column" }}>
        <Grid container style={{ height: "100%" }} container className=" padding-top-bottom-container max-width-container">
          <Grid item xs={12} md={6}>
            <div className="text-container">
              <h1 className="title">Portfolio</h1>
              <p class="">Over the past 5+ years of ecommerce experience, I’ve helped generate $250 million in online revenue for 15+ clients.  </p>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={snake} />
          </Grid>

        </Grid>
        <div className="case-studies max-width-container">
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
                <Button variant="contained" color="primary" className="">See More</Button>
              </div>

            </Grid>
            <Grid item xs={12} md={6}>
              <img src={GiroSport} />
            </Grid>
          </Grid>
          <Grid container className="case-study-container wrap-reverse">

            <Grid item xs={12} md={6} className="case-study-text-container">
              <div class="text-block-padding">
                <h5 className="icon-box-title ">Nolly Consulting</h5>
                <h6>UI/UX Designed</h6>
                <p className="">Giro Sport Design is composed of an established team of established ski, snowboard and bike athletes. Giro's goal was to showcase sponsered athletes in a new and exciting way. One of the main goals was to get consumers excited about the brand and the athletes that Giro sponsers.</p>
                <Button variant="contained" color="secondary" className="">See More</Button>
              </div>

            </Grid>
            <Grid item xs={12} md={6}>
              <img src={Nolly} />
            </Grid>
          </Grid>
          <Grid container className="case-study-container wrap-reverse">

            <Grid item xs={12} md={6} className="case-study-text-container">
              <div class="text-block-padding">
                <h5 className="icon-box-title ">BarnStay</h5>
                <h6>UI/UX Designed and Developed</h6>
                <p className="">Giro Sport Design is composed of an established team of established ski, snowboard and bike athletes. Giro's goal was to showcase sponsered athletes in a new and exciting way. One of the main goals was to get consumers excited about the brand and the athletes that Giro sponsers.</p>
                <Button variant="contained" color="secondary" className="">See More</Button>
              </div>

            </Grid>
            <Grid item xs={12} md={6}>
              <img src={BarnStay } />
            </Grid>
          </Grid>

        </div>







        {/* <button onClick={() => onOpenModal(1)}>Open modal 1</button>
            <button onClick={() => onOpenModal(2)}>Open modal 2</button>
              <MyModal headline="Giro" modalState = {open === 1}  onClose = {onCloseModal} />
              <MyModal headline="SECON"  modalState = {open === 2}   onClose = {onCloseModal}/> */}





      </div>
    </Layout>
  )
}
export default PortfolioPage