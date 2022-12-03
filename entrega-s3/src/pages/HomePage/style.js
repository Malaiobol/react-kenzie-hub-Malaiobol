import styled from "styled-components";

export const StyledMain = styled.main`
  header {
    justify-content: space-around;
    margin: 0;
    width: 100%;

    padding: 20px;
  }

  div {
    height: 120px;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-around;

    border-top: solid 2px var(--colorGrey3);
    border-bottom: solid 2px var(--colorGrey3);
  }

  div > h2 {
    color: var(--colorGrey0);

    font-weight: 700;
    font-size: 1.125rem;
    line-height: 28px;
  }

  div > small {
    color: var(--colorGrey2);

    font-weight: 400;
    font-size: 0.75rem;
    line-height: 18px;
  }

  h3 {
    margin-top: 70px;
    margin-left: 35%;

    color: var(--colorGrey0);

    font-weight: 700;
    font-size: 1.125rem;
    line-height: 28px;
  }

  p {
    margin-top: 20px;
    margin-left: 35%;

    color: var(--colorGrey0);

    font-weight: 700;
    font-size: 1.125rem;
    line-height: 28px;
  }
`;
