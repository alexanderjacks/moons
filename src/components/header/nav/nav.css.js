import styled from 'styled-components';

export const Container = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 12px;

    li {
      text-transform: uppercase;
      font-size: calc(8px + 2.1vmin);
      font-family: 'Asset', cursive;
      text-shadow: 1px 1px 2px black, 0 0 1em lime, 0 0 0.2em lime;
      padding: 0.2vw 0.2vw 0.2vw 0.4vw;

      & + li {
        margin-left: 2rem;
      }
    }
  }
`;
