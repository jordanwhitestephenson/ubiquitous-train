import React from "react"
import Layout from '../components/Layout'
import Container from '@material-ui/core/Container';
import Contact from '../images/Contact.png'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      display: 'flex',
      flexDirection: 'column',

    },

  },
  textField: {
    fontFamily: "`IBM Plex Mono,monospace",
    borderColor: "#83a9a6",
    color: "#83a9a6",
  },

}));


const ContactPage = () => {
  const classes = useStyles();
  return (
    <Layout>
      <Grid container className="d-flex align-items-center max-width-container">
        <Grid item xs={12} md={6}>
          <img src={Contact} />
        </Grid>

        <Grid item xs={12} md={6} className="subcontainer-padding-top-from-header d-flex flex-column align-items-center">
          <h3 style = {{fontFamily : "`IBM Plex Mono,monospace"}}>CONTACT</h3>
          <div >
            <form method="post" action="https://getform.io/f/1318ddcf-3381-43f2-a17a-c2b62233ef10" className={classes.root}>


              <TextField  type="text" name="name" id="name" id="outlined-basic" label="Name" variant="outlined" />

              <TextField type="email" name="email" id="email" id="outlined-basic" label="Email" variant="outlined" />

              <TextField name="message" id="message" id="outlined-basic" label="Message" variant="outlined" />
              <Button type="submit" className="margin-top-auto" variant="contained" color="secondary">Send</Button>

            </form>
          </div>

        </Grid>

      </Grid>

    </Layout>
  )
}
export default ContactPage