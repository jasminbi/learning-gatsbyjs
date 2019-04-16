import React from "react"
import Layout from "../components/layout"
import schoolkids from "../img/schoolkids.jpg"
import Header from "../components/header"

export default () => (
  <Layout>
    <div>
      <Header headerText="Hello Menon Test Site" />
      <p>What a world.</p>
      <img src={schoolkids} alt="schoolkids" style={{ width: `50%` }} />
    </div>
  </Layout>
)
