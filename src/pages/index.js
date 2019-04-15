import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div style={{ color: "purple" }}>
    <Link to="/contact/">Kontakt</Link>
    <Header headerText="Hello Menon Test Site" />
    <p>What a world.</p>
    <img
      src="https://image.freepik.com/free-vector/hand-drawn-children-ready-go-back-school_23-2147848901.jpg"
      alt="schoolkids"
    />
  </div>
)
