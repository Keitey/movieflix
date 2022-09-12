import styled from "styled-components";

export const Nav = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  h1 {
    font-size: 50px;
    color: #f31734;
    transition: 0.4s;
    &:hover {
      color: #930e1f;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const SearchMovie = styled.div`

  #movie {
    height: 30px;
    padding: 0.2rem 1rem;
    border-radius: 8px;
    width: 260px;
    border: none;
  }

  button {
    border-radius: 10px;
    height: 31px;
    padding: 0.2rem;
    width: 36px;
    background: #f31734;
    color: #fff;
    border: none;
    transition: 0.4s;
    cursor: pointer;

    &:hover {
      background: #930e1f;
    }
  }

  svg {
    font-size: 20px;
  }

  form{
    display: flex;
    gap: .3rem;
  }
`;
