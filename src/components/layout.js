import React from "react"
import { Link } from "gatsby"
const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
    <header style={{ marginBottom: `1.5rem` }}>
      <Link to="/">
        <h3 style={{ display: `inline`, float: `right` }}>Menon</h3>
      </Link>
      <ul style={{ listStyle: `none` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">Über uns</ListLink>
        <ListLink to="/contact/">Kontakt</ListLink>
      </ul>
    </header>
    {children}
  </div>
)
