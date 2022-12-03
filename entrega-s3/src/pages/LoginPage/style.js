import styled from "styled-components";

export const StyledForm = styled.form`
  width: 370px;
  height: max-content;

  color: var(--colorGrey0);
  background-color: var(--colorGrey3);
  border-radius: 4px;

  padding: 20px;
  margin-left: 40%;

  h2 {
    margin-top: 15px;
    margin-bottom: 15px;
    margin-left: 40%;
  }

  span {
    margin-left: 15%;
    margin-top: 30px;
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

  div {
    margin-top: 25px;
    margin-bottom: 25px;
  }

  small {
    margin-left: 15%;

    color: var(--colorGrey1);
    margin-bottom: 20px;
    margin-top: 20px;

    font-size: 1rem;
  }

  p {
    color: var(--colorNegative);
    margin-bottom: 20px;

    font-size: 1rem;
  }

  a {
    padding: 13px 119px;

    color: var(--colorGrey0);

    border: solid 2px var(--colorGrey1);
    border-radius: 4px;
    background-color: var(--colorGrey1);
  }

  a:hover {
    border-color: var(--colorGrey0);
    background-color: solid 2px var(--colorGrey0);
  }
`;
