import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Play', sans-serif;
    }

    .CodeMirror, .CodeMirror * {
        font-family: 'Source Code Pro', monospace !important;
    }

    a{
        text-decoration: none;
    }
`;
