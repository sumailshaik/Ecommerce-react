import {css} from "styled-components";

export const mobile = (props) => {
    //styled component css
    return css`
        @media only screen and (max-width: 380px){
            ${props}
        }
    `;
}