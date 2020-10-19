import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulBook {
        edges {
          node {
            author
            overview {
              overview
            }
            price
            slug
            title
            yearPublished
            coverImage {
              fixed(width: 100)  {
                src
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      {
        data.allContentfulBook.edges.map(({node}) => {
          return (
            <div style={{display: "flex", flexFlow: "column wrap", alignItems: "center"}}>
              <img src={node.coverImage.fixed.src} alt="pics"/>
              <h2>{node.title}</h2>
              <h3>Written By {node.author}</h3>
              <h4>&copy;{node.yearPublished}</h4>
              <p>{node.overview.overview}</p>
              <hr style={{backgroundColor:"black", width: "100%", height: "6px"}} />
            </div>
          )
        }
        )
      }
        <form name="contact" method="POST" netlify>
          <input type="hidden" name="form-name" value="contact" />
          <label>Email: <input type="email" placeholder="Enter Email" name="email"/></label>
          <label>Name: <input type="text" placeholder="Enter Name" name="name"/></label>
          <input type="submit" value="Submit"/>
        </form>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}

export default IndexPage
