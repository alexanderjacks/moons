import React from 'react';
import PropTypes from 'prop-types';
import IO from 'components/io';
import Img from 'gatsby-image';
import { Title, Copy, Container } from './item.css';

const Item = ({ title, copy, image }) => (
  <IO rootMargin="-50px">
    {({ isVisible }) => (
      <Container isVisible={isVisible}>
      <figure>
        <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
        <figcaption>
          <Title>{title}</Title>
          <Copy>{copy}</Copy>
        </figcaption>
      </figure>
      </Container>
    )}
  </IO>
);

Item.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  image: PropTypes.object.isRequired,
};

export default Item;
