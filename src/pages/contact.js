import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>The best way to reach me is through the below channels: </p>
      <p>Phone: 510-509-8495</p>
      <p>Email: owusu.eric@protonmail.com</p>
      <p>
        Github:{" "}
        <a href="https://github.com/saizen408" target="blank">
          github.com/saizen408
        </a>
      </p>
    </Layout>
  )
}

export default ContactPage
