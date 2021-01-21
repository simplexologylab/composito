import React, {useState}  from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Container = styled.div`
  margin: 2rem auto;
  max-width: 960px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const Card = styled.div`
  position: relative;
  margin: 10px;
`;

const Image = styled(Img)`
  height: 300px;
  width: 300px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  @media (max-width: 500px) {
    width: 95vw;
  }
`;

const Banner = styled.div`
  background: rgba(250, 240, 202, 0.55);
  position: absolute;
  left: 0;
  right: 0;
  top: 70%;
  margin: 0 auto;
  width: 90%;
  height: 25%;
  text-align: center;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const Text = styled.h3`
  opacity: 1;
  color: #293241;
  margin: 0;
  font-family: "Rock Salt";
`;

const Input = styled.input`
  width: 90vw;
`;

const IndexPage = ({ data }) => {
  const [search, setSearch] = useState('')

  return (
    <Layout>
      <SEO />
      {/* <Input onChange={e => setSearch(e.target.value)} />
      <p>search is: {search}</p> */}
      <Container>
        {data.pages.nodes.map(({ id, frontmatter, fields }) => (
          <Card>
            <Link to={fields.slug}>
              <Image fluid={fields.cover.childImageSharp.fluid} />
              <Banner>
                <Text>{frontmatter.title}</Text>
              </Banner>
            </Link>
          </Card>
        ))}
      </Container>
    </Layout>
  );
};

export default IndexPage;

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
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
