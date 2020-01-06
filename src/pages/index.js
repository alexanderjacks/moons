import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Gallery from 'components/gallery';
import { graphql } from 'gatsby';

const Index = ({ data }) => (
  <Layout>
    <Box>
      <Title as="h2" size="small">
        {data.homeJson.content.childMarkdownRemark.rawMarkdownBody}
      </Title>
    </Box>
    <Gallery items={data.homeJson.gallery} />
    <div style={{ height: '20vh' }} />
    <Box>
      <Title as="h2" size="small">
        Moons Above, Project Description Here?
      </Title>
    </Box>
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      gallery {
        title
        copy
        route
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      projects {
        title
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        cloud {
          childImageSharp {
            fluid(maxHeight: 195, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        href
      }
    }
  }
`;
