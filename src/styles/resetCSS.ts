import { createGlobalStyle } from 'styled-components';

export const ResetCSS = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
    }

    body {
        background-color: ${({ theme }) => theme.colors.gray};
    }

    body * {
        font-family: ${({ theme }) =>
          theme.font.family.default}, sans-serif;
    }

    a {
        color: inherit;
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.8);
        }
    }

    button {
        cursor: pointer;
        transition: filter 0.2s;

        &:hover {
            filter: brightness(1.3);
        }
    }
`;
