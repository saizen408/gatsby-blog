import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About Me</h1>
      <p>
        My name is Eric Owusu. I'm obssessed with Full Stack Web Development.
        Hire me! Now!
      </p>
      <p>
        Don't be a stranger,
        <Link to="/contact"> get in touch!</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
