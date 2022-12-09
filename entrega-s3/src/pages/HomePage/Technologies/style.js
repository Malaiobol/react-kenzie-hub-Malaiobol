import styled from "styled-components";

export const StyledTech = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: var(--colorGrey4);

  height: 49px;
  width: 98%;

  border-radius: 4px;
  margin: 11px;

  :hover {
    background-color: var(--colorGrey2);

    small {
      color: var(--colorGrey4);
    }
  }

  div {
    border: none;
    height: 100%;
    display: flex;
    justify-content: space-around;
    width: 140px;
  }

  p {
    margin-top: 0;
    margin-left: 22px;
    padding: 0;

    font-size: 15px;
  }

  div > div {
    background-color: var(--colorGrey1);
    width: 26px;
    height: 26px;
    border-radius: 6px;
  }

  div > div:hover {
    cursor: pointer;
    background-color: var(--colorGrey2);
  }
`;
