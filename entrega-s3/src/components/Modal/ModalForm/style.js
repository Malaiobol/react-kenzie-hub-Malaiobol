import styled from "styled-components";
export const StyledModalForm = styled.form`
  position: relative;
  height: max-content;
  background-color: var(--colorGrey3);

  top: 25%;
  left: 40%;

  width: 370px;
  padding: 24px;
  border-radius: 0px 0px 4px 4px;

  div {
    flex-wrap: wrap;
    color: var(--colorGrey0);
    margin-bottom: 0px;
  }

  div > label {
    margin-right: 90%;

    font-weight: 400;
    font-size: 0.75rem;
    padding-top: 20px;
  }

  input {
    margin-bottom: 22px;
  }

  button {
    background-color: var(--colorPrimary);
    color: var(--colorGrey0);

    width: 100%;
    height: 50px;
    border-radius: 6px;
    margin-top: 13px;
  }

  button:hover {
    background-color: var(--colorHalfPrimary);
  }

  select {
    color: var(--colorGrey0);
    background-color: var(--colorGrey2);
    border: solid 2px var(--colorGrey2);

    border-radius: 4px;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 0px 16px;
    height: 50px;
    width: 100%;
  }

  select > option {
    color: var(--colorGrey1);

    font-weight: 400;
    font-size: 1rem;
    line-height: 26px;
  }
`;
