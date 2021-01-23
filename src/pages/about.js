import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Block = styled.div`
  padding: 10px;
`;

const Heading = styled.h3`
  margin: 0;
`;

const Text = styled.p`
  padding: 4px;
  margin: 0;
`;

const SecondPage = () => (
  <Layout>
    <SEO title="About" />
    <Link to="/">Go back to the homepage</Link>
    <Block>
      <Heading>Hello!</Heading>
      <Text>
        We got tired of seeing sites with more ads than recipes and more cookie
        pop-ups than cookie recipes. So, we made our own with no ads and none of
        the annoying cookies. Just the tasty ones!
      </Text>
    </Block>
    <Block>
      <Heading>Who we are</Heading>
      <Text>
        At the Simplexology Lab we believe our team should try new technologies
        to keep up with the latest trends in web development. In our spare time
        we try and create useful applications 1. so we can learn and 2. so you
        can benefit. Simple!
      </Text>
      <a href="https://www.simplexologylab.com" target="_blank" rel="noreferrer">
        Check us out
      </a>
    </Block>
    <Block>
      <Heading>Don't like our recipes</Heading>
      <Text>
        Here's the code. Feel free to make it your own. Stay tuned and we'll
        provide instructions on how we built and deployed this site.
      </Text>
      <a href="https://github.com/simplexologylab/composito" target="_blank" rel="noreferrer">
        Here is the code
      </a>
    </Block>
  </Layout>
);

export default SecondPage;
