import styled from 'styled-components';
import { accent } from 'constants/theme';
import MEDIA from 'helpers/mediaTemplates';

export const Title = styled.span`
@import url('https://fonts.googleapis.com/  css?family=Quicksand&display=swap');
  font-family: 'Quicksand', sans-serif;
  display: block;
  font-size: 2rem;
  font-weight: 500;
  margin: 2rem 2rem 1rem;
`;

export const Container = styled.div`
  padding: 1.1rem;
  margin: 1.1rem;
  border-radius: 10px;
  position: relative;
  text-align: center;
  color: #fff;
  transition: background-color 2.5s ease;
  background-color: ${({ isVisible }) => (isVisible ? accent : ' #009')};
`;

export const Copy = styled.p`
  transition: color 2.5s ease;
  color: ${({ isVisible }) => (isVisible ? accent : ' #ffa')};
  margin: 0 2rem 2rem;

  ${MEDIA.TABLET`
    margin-bottom: 4rem;
  `};
`;
