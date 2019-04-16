import React from "react"
import { Link } from "gatsby"
const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <div style={{ margin: `3rem auto`, padding: `0 4rem` }}>
    <header style={{ marginBottom: `4rem` }}>
      <Link
        to="/"
        style={{ textShadow: `none`, backgroundImage: `none`, float: `right` }}
      >
        <img
          src="https://menon.education/icons/menon/m.png"
          height="40"
          alt="menon"
        />
      </Link>
      <ul style={{ listStyle: `none`, padding: `0` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">Über uns</ListLink>
        <ListLink to="/contact/">Kontakt</ListLink>
      </ul>
    </header>
    {children}
  </div>
)
