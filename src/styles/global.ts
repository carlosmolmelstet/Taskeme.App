import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: ${props => props.theme.colors.background};
        color:  ${props => props.theme.colors.text};
        font-family: 'Kanit', sans-serif;   

        &::-webkit-scrollbar {
            width: 8px;
        }
  
        &::-webkit-scrollbar-thumb {
            -webkit-border-radius: 10px;
            border-radius: 10px;
            background: ${props => props.theme.colors.scrollbar}; 
        }

    }

    h1, h2,h3,h4,h5 {
        color:  ${props => props.theme.colors.title};
        font-weight: bold;
    }

    body, input, textarea, button{
        font-family: 'Kanit', sans-serif;  
        outline: none;
    }

    a {
        text-decoration: none;
    }
    

`;
