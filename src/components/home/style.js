import styled, { keyframes } from "styled-components";
import { Link } from "gatsby";

export const StyledLink = styled(Link)`
    padding: 0.5rem;
    background: lightgrey;
    text-decoration: none;
    color: black;

    :hover {
        background: grey;
    }
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

const fadeInFromLeft = keyframes`
    from { 
        opacity:0;
        margin-left:-5vw;
    }

    to {
        opacity: 1;
        margin-left:0px;
    }
`;

export const StyledHome = styled.div`
    .showcase {
        background: #001426;
        height: 100vh;
        display: grid;
        justify-items: center;
        align-items: center;

        .header {
            color: #ffffff;
            font-size: 28px;
            width: 260px;

            span {
                color: #6c6c6c;
                margin-right: 2rem;
            }

            .sentence {
                font-family: "Inconsolata";
                font-weight: normal;
                width: 260px;
                animation: 0.6s ease-out 0s 1 ${fadeIn};
                cursor: pointer;
            }

            .logos {
                display: flex;
                justify-content: center;
                margin-top: 1rem;
                animation: 0.6s ease-out 0s 1 ${fadeInFromLeft};

                svg {
                    justify-self: center;
                    height: 1.5rem;
                    width: 1.5rem;
                    margin: 0.5rem;
                    cursor: pointer;

                    path {
                        fill: #ffffff;
                    }

                    :hover {
                        path {
                            fill: turquoise;
                        }
                    }
                }
            }
        }

        .items {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-gap: 30px;

            .item {
                background: grey;
                height: 90px;
                width: 90px;
                border-radius: 50%;
            }
        }
    }

    .projects {
        display: grid;
        padding: 50px 115px;
        color: #595757;
        grid-template-areas:
            "header header header header"
            "a      b      c      d";
        grid-gap: 50px;

        h2 {
            font-size: 30px;
            grid-area: header;
        }

        .project {
            background: grey;
            height: 215px;
            width: 265px;
        }
    }
`;
