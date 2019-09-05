import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Gallery from 'components/gallery';
import IOExample from 'components/io-example';
import { graphql } from 'gatsby';

const Index = ({ data }) => (
  <Layout>
    <Box>
      <Title as="h2" size="large">
        {data.homeJson.content.childMarkdownRemark.rawMarkdownBody}
      </Title>
    </Box>
    <Gallery items={data.homeJson.gallery} />
    <div style={{ height: '50vh' }} />
    <IOExample
      title='dailypricer.sh'
      text='AppSync/Dynamo for queries/data, Cognito auth'
    />
    <IOExample
      title='top100crypto.info'
      text='Lambda ƒ to foil CORS, R53/S3/Cloudfront static site hosting'
    />
    <IOExample
      title='stardewdex.com'
      text='R53/S3/Cloudfront static site hosting'
    />
    <IOExample
      title='FightTheBan.org'
      text='S3 image hosting, Route53 DNS'
    />
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
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
