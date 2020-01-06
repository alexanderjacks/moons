import styled from 'styled-components';
import { accent } from 'constants/theme';
import MEDIA from 'helpers/mediaTemplates';

export const Title = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: 500;
  margin: 2rem 2rem 1rem;
`;

export const Container = styled.div`
  padding: 4rem;
  margin: 4rem;
  border-radius: 10px;
  position: relative;
  text-align: center;
  color: #fff;
  transition: background-color 2.5s ease;
  background-color: ${({ isVisible }) => (isVisible ? accent : ' #3a6')};
`;

export const Copy = styled.p`
  color: #757575;
  margin: 0 2rem 2rem;

  ${MEDIA.TABLET`
    margin-bottom: 4rem;
  `};
`;
