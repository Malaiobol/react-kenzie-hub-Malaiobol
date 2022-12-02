import styled from "styled-components";

export const StyledForm = styled.form`
  background-color: var(--colorGrey3);
  width: 370px;
  height: min-content;
  color: var(--colorGrey0);

  border-radius: 4px;

  padding: 20px;
  margin-left: 40%;

  div > h2 {
    margin-left: 25%;
    margin-bottom: 20px;

    font-weight: 700;
    font-size: 1.5rem;
    line-height: 28px;
  }

  div > span > p {
    margin-left: 20%;

    color: var(--colorGrey1);

    font-weight: 400;
    font-size: 1rem;
    line-height: 22px;
  }

  small {
    color: var(--colorNegative);
    margin-bottom: 20px;

    font-size: 1rem;
  }

  select {
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: var(--colorGrey2);
    width: 330px;
    height: 50px;

    border: solid 2px var(--colorGrey2);
    border-radius: 4px;
    padding: 0px 16px;

    color: var(--colorGrey1);
  }

  select > option {
    font-weight: 400;
    font-size: 1rem;
    line-height: 26px;
  }

  button {
    height: 48px;
    width: 100%;

    color: var(--colorGrey0);
    background-color: var(--colorPrimary);
    border: solid 2px var(--colorPrimary);
    border-radius: 4px;
  }

  button:hover {
    background-color: var(--colorPrimary);
    border: solid 2px var(--colorPrimary);
    background-color: var(--colorHalfPrimary);
    border: solid 2px var(--colorHalfPrimary);
  }
`;
