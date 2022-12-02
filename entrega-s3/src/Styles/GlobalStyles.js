import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    *{
        font-family: 'inter', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    ul,li,a{
        list-style: none;
        text-decoration: none;
    }

    button{
        border: none;
        background-color: transparent;
    }

    button:hover{
        cursor: pointer;
    }

    :root{
        --colorPrimary: #FF577F;
        --colorHalfPrimary: #FF427F opacity: 0.5;
        --colorPrimaryDisabled: #59323F;

        --colorGrey4:  #121214;
        --colorGrey3: #212529;
        --colorGrey2: #343B41;
        --colorGrey1: #868E96;
        --colorGrey0: #F8F9FA;

        --colorSucess: #3FE864;
        --colorNegative: #E83F5B;

        --colorWhiteFixed: #fff;
    }

    body{
        background-color: var(--colorGrey4);

        width: 100vw;
        height: 100vh;
    }
`;
