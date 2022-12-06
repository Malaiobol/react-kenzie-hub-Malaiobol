import styled from "styled-components";

export const StyledFieldSet = styled.div`
  margin-bottom: 20px;

  label {
    font-weight: 400;
    font-size: 0.75rem;
    padding-top: 20px;
  }

  input {
    color: #fff;
    margin-top: 20px;
    background-color: var(--colorGrey2);
    width: 330px;
    height: 50px;

    border: solid 2px var(--colorGrey2);
    border-radius: 4px;
    padding: 0px 16px;
  }

  input::placeholder {
    color: var(--colorGrey1);

    font-weight: 400;
    font-size: 1rem;
    line-height: 26px;
  }

  p {
    position: absolute;
  }
`;
