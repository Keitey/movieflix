import styled from "styled-components";

export const Container = styled.div`
  padding-bottom: 5rem;
`;

export const MovieList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 3rem;
  row-gap: 4rem;
  padding-top: 4rem;

  a{
    color:#f31734;
    text-align: center;
    font-size: 40px;
  }
`;

export const Movie = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 280px;
    margin-bottom: 2rem;
    border-radius: 0.5rem;
  }

  span {
    font-weight: bold;
    font-size: 120%;
    text-align: center;
  }

  a {
    transition: all 0.3s;
  }

  a:hover {
    transform: scale(1.1);
  }
`;
