import styled, { keyframes } from "styled-components";
import { Link } from "gatsby";

export const StyledLink = styled(Link)`
    text-decoration: none;
    font-family: "Inconsolata";
    color: #21f2ff;

    :hover {
        text-decoration: underline;
    }
`;

const fadeInFromRight = keyframes`
    from { 
        opacity:0;
        margin-left:5vw;
    }

    to {
        opacity: 1;
        margin-left:0px;
    }
`;

const fadeIn = keyframes`
    from { 
        opacity:0;
    }

    to {
        opacity: 1;
    }
`;

export const StyledHome = styled.div`
    .showcase {
        background: #222222;
        height: 100vh;
        display: flex;

        justify-content: center;

        .header {
            display: flex;
            justify-items: center;
            flex-flow: row wrap;
            color: #ffffff;
            font-size: 28px;
            width: 300px;
            align-items: center;
            height: 100vh;

            span {
                color: #6c6c6c;
                margin-right: 2rem;
            }

            .sentences {
                margin-bottom: 50px;
                align-self: flex-end;
                animation: 0.6s ease-out 0s 1 ${fadeInFromRight};
                .sentence {
                    font-family: "Inconsolata";
                    font-weight: normal;
                    width: 260px;
                    cursor: pointer;
                }
            }

            .links {
                animation: 0.6s ease-out 0s 1 ${fadeIn};
                align-self: center;
                display: flex;
                justify-content: space-between;
                width: 300px;
                height: 2rem;
            }
        }
        .logos {
            display: flex;
            justify-content: center;
            width: 300px;
            align-self: flex-end;
            animation: 0.6s ease-out 0s 1 ${fadeIn};
            margin: 1rem;

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
`;
