import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default ({ data }) => {
  return (
    <Layout>
      <div>
        <h1>Alle moeglichen Blogeintraege</h1>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p style={{ color: `grey` }}>{node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          html
          frontmatter {
            title
            date(formatString: "DD. MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`
