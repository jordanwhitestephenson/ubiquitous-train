import React, { useState } from "react"
import Layout from '../components/layout'
import Jordan from '../images/Jordan.png'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import MyModal from '../components/modal'
import Button from '@material-ui/core/Button';
import GiroSport from '../images/GiroMockupMobile.png'
import Nolly from '../images/2.png'
import BarnStay from '../images/1.png'
import flower from '../images/flower.png'

const ServicesPage = () => {
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
              <h1 className="title">Services</h1>
              <p class="">making sure your digital product usability helps to meet your business objectives  </p>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={flower} />
          </Grid>

        </Grid>
        <div className="case-studies">
          <div className="max-width-container">
            <div class="latest-work-container d-flex flex-column full-width">
              <h2>Specializing in design, tech, and CX audits.</h2>
              <div class="devicer"></div>
            </div>

            <Grid container className="case-study-container wrap-reverse">

              <Grid item xs={12} md={4} className="">
                <div class="text-block-padding">
                  <h5 className="icon-box-title ">UI/UX Design</h5>
                  <p className="">Visually designing every aspect of your customer's experience, I take careful consideration of their needs & your company's goals</p>
                </div>

              </Grid>
              <Grid item xs={12} md={4}>
                <div class="text-block-padding">
                  <h5 className="icon-box-title ">Audits</h5>
                  <p className="">Have an existing experience? I help identify friction points customers face and make insightful recommendations for improvement.</p>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div class="text-block-padding">
                  <h5 className="icon-box-title ">Code</h5>
                  <p className="">Taking the visual design, I programmatically develop every user interaction to make an experience people truly love.

                  I typically work with:
               <li> + ReactJS</li>
                    <li>+ Salesforce Commerce Cloud</li>
                    <li>+ Custom</li>
                  </p>
                </div>
              </Grid>
            </Grid>



          </div>
        </div>








        {/* <button onClick={() => onOpenModal(1)}>Open modal 1</button>
            <button onClick={() => onOpenModal(2)}>Open modal 2</button>
              <MyModal headline="Giro" modalState = {open === 1}  onClose = {onCloseModal} />
              <MyModal headline="SECON"  modalState = {open === 2}   onClose = {onCloseModal}/> */}





      </div>
  
  
    </Layout>
  )
}
export default ServicesPage
