import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const SecondPage = () => (
  <Layout>
    <SEO title="About" />
    <h3>Hello!</h3>
    <p>
      We got tired of seeing sites with more ads than recipes and more cookie
      pop-ups than cookie recipes. So, we made our own with no ads and none of
      the annoying cookies. Just the tasty ones!
    </p>
    <h3>Who we are</h3>
    <p>
      At the Simplexology Lab we believe our team should try new technologies to
      keep up with the latest trends in web development. In our spare time we
      try and create useful applications 1. so we can learn and 2. so you can
      benefit. Simple!
    </p>
    <a href="https://www.simplexologylab.com" target="_blank">
      Check us out
    </a>
    <h3>Don't like our recipes</h3>
    <p>
      Here's the code. Feel free to make it your own. Stay tuned and we'll
      provide instructions on how we built and deployed this site.
    </p>
    <a href="https://github.com/simplexologylab/composito" target="_blank">
      Here is the code
    </a>
    <br />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;
