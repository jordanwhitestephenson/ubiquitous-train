import React, { useState } from "react"
import Layout from '../components/layout'
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
              <h1 className="title">Resume</h1>
              <p class="">Coming Soon </p>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={flower} />
          </Grid>

        </Grid>
      </div>
  
  
    </Layout>
  )
}
export default ServicesPage
