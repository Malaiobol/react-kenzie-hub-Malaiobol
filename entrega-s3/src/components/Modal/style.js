import styled from "styled-components";
export const StyledModal = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.5);

  span {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: var(--colorGrey2);

    top: 25%;
    left: 40%;
    border-radius: 4px 4px 0px 0px;

    width: 370px;
    height: 50px;
  }

  span > h4 {
    color: var(--colorGrey0);
  }

  span > button {
    color: var(--colorGrey1);

    font-size: 18px;
  }
`;
