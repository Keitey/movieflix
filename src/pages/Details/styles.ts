import styled from "styled-components";

export const Container = styled.div`
  padding: 4rem 0;

  h2 {
    margin: 3rem 0;
  }

  .movie {
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 600px) {
      flex-direction: column;
    }
  }

  img {
    width: 300px;
    border-radius: 1rem;
  }

  .details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 4rem;
    max-width: 50%;

    @media (max-width: 600px) {
      margin-left: 0;
      max-width: 80%;
    }
  }

  .release {
    margin-top: 1rem;
    opacity: 0.7;
  }

  .buttons {
    display: flex;
    gap: 0.7rem;
    margin-top: 1rem;

    @media (max-width: 600px) {
      gap: 7.7rem;
    }
  }

  span {
    line-height: 140%;
    text-align: justify;
    font-size: 120%;
  }

  button {
    background: #f31734;
    border: none;
    color: #fff;
    padding: 0.5rem;
    border-radius: 8px;
    width: 70px;
    height: 36px;
    font-size: 100%;
    transition: 0.4s;
    cursor: pointer;

    &:hover {
      background: #930e1f;
    }
  }
`;
