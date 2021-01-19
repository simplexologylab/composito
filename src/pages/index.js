import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Container = styled.div`
  margin: 2rem auto;
  max-width: 961px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`

const RecipeLink = styled.div`
  padding: 20px;
`
const Image = styled(Img)`
  border-radius: 20px;
  box-shadow: 0px 5px 10px rgba(0,0,0,0.2);
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO />
    <Container>
      {data.pages.nodes.map(({ id, frontmatter, fields }) => (
          <Link to={fields.slug}>
            <RecipeLink>
              {frontmatter.title}
              <br />
              <Image fixed={fields.cover.childImageSharp.fixed} />
            </RecipeLink>
          </Link>
      ))}
    </Container>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    pages: allMdx(
      filter: { fileAbsolutePath: { regex: "/content/recipes/" } }
    ) {
      nodes {
        id
        fileAbsolutePath
        frontmatter {
          title
          date
        }
        fields {
          slug
          cover {
            childImageSharp {
              fixed(width: 250, height: 250) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`
