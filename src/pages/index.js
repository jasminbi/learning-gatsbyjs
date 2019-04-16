import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import schoolkids from "../img/schoolkids.jpg"

export default () => (
  <Layout>
    <div style={{ color: "purple" }}>
      <Header headerText="Hello Menon Test Site" />
      <p>What a world.</p>
      <img src={schoolkids} alt="schoolkids" style={{ width: `50%` }} />
    </div>
  </Layout>
)
