import React from "react"
import { Link, graphql } from "gatsby"

import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"

import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo.js"

const shortcodes = { Link }

const Container = styled.div`
  margin: 1rem 0rem;
`

const Title = styled.h2`
  text-align: center;
`

const Picture = styled(Img)`
  background: pink;
  max-width: 500px;
  margin: 0 auto;
  border-radius: 20px;
  box-shadow: 0px 5px 10px rgba(0,0,0,0.2);
`

const Content = styled.div`
  margin: 0 auto;
  max-width: 600px;
  padding: 0rem 1rem;
`

export default ({ data }) => {
  const { title } = data.mdx.frontmatter

  return (
    <Layout>
      <SEO title={title} />
      <Container>
        <Title>{title}</Title>
        <Picture fluid={data.mdx.fields.cover.childImageSharp.fluid} />
      </Container>
      <Content>
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </MDXProvider>
      </Content>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
      fields {
        cover {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
