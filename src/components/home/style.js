import styled, { keyframes } from "styled-components";
import { Link } from "gatsby";

export const StyledLink = styled(Link)`
    text-decoration: underline;
    font-family: "Inconsolata";
    color: #21f2ff;
    /* font-size: 36px; */
`;

const fadeIn = keyframes`
    from { 
        opacity:0;
        margin-left:5vw;
    }

    to {
        opacity: 1;
        margin-left:0px;
    }
`;

export const StyledHome = styled.div`
    .showcase {
        background: #222222;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;

        .header {
            display: flex;
            justify-content: center;
            flex-flow: row wrap;
            color: #ffffff;
            font-size: 28px;
            width: 320px;

            span {
                color: #6c6c6c;
                margin-right: 2rem;
            }

            .sentences {
                margin-bottom: 50px;
                animation: 0.6s ease-out 0s 1 ${fadeIn};
                .sentence {
                    font-family: "Inconsolata";
                    font-weight: normal;
                    width: 260px;
                    cursor: pointer;
                }
            }

            .links {
                animation: 0.6s ease-out 0s 1 ${fadeIn};
                display: flex;
                justify-content: space-between;
                width: 320px;
            }

            .logos {
                display: flex;
                justify-content: center;
                margin-top: 1rem;
                animation: 0.6s ease-out 0s 1 ${fadeIn};
                margin-bottom: 50px;

                svg {
                    justify-self: center;
                    height: 1.5rem;
                    width: 1.5rem;
                    margin: 0.5rem;
                    cursor: pointer;

                    path {
                        fill: #6c6c6c;
                    }

                    :hover {
                        path {
                            fill: turquoise;
                        }
                    }
                }
            }
        }
    }
`;
