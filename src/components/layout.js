import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import logo from "../img/logo_blue.png"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div>
        <header
          style={{
            margin: `4rem`,
            with: `100%`,
            height: `20%`,
            top: `0`,
            left: `0`,
          }}
        >
          <Link
            to="/"
            style={{
              textShadow: `none`,
              backgroundImage: `none`,
              float: `right`,
            }}
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
        <div style={{ margin: `3rem auto`, padding: `0 4rem` }}>{children}</div>
        <footer
          style={{
            backgroundColor: `black`,
            color: `white`,
            textAlign: `center`,
            left: `0`,
            bottom: `0`,
            width: `100%`,
            height: `20%`,
            position: `static`,
          }}
        >
          <img
            src={logo}
            alt="menon"
            style={{ height: `4em`, padding: `20px` }}
          />
          <ul style={{ listStyle: `none`, padding: `0`, textShadow: `none` }}>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/about/">Über uns</ListLink>
            <ListLink to="/contact/">Kontakt</ListLink>
          </ul>
          <p>{data.site.siteMetadata.title}</p>
        </footer>
      </div>
    )}
  />
)
