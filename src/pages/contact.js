import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

export default () => (
  <Layout>
    <div style={{ color: "teal" }}>
      <Link to="/">Home</Link>
      <h1>Kontakt</h1>
      <p>Kontaktdaten gibts hier</p>
    </div>
  </Layout>
)
