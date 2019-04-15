import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"

export default () => (
  <Layout>
    <div style={{ color: "purple" }}>
      <Header headerText="Hello Menon Test Site" />
      <p>What a world.</p>
      <img
        src="https://image.freepik.com/free-vector/hand-drawn-children-ready-go-back-school_23-2147848901.jpg"
        alt="schoolkids"
      />
    </div>
  </Layout>
)
