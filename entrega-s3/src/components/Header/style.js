import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  width: 370px;
  justify-content: space-between;

  margin: 0 0 20px 40%;

  padding-top: 20px;

  h1 {
    color: var(--colorPrimary);
  }

  button {
    background-color: var(--colorGrey3);
    color: var(--colorGrey0);

    font-weight: 600;
    font-size: 0.75rem;
    line-height: 28px;

    padding: 0px 16px;
    border: solid 2px var(--colorGrey3);
    border-radius: 4px;
  }
`;
