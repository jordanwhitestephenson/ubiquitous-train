import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

const MyTemplate = (props) => {
  console.log(props, 'props sent to blogtemplate')
  return (
    <div>
      <SEO title="Page two" />
      <h1>*!)#*!)@#*)!@(#!)@#!@*#</h1>
    </div>
  )
}



export default MyTemplate