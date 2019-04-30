import styled from "styled-components";
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

export const StyledHome = styled.div`
    .showcase {
        background: #e3ebf7;
        height: 275px;
        display: grid;
        justify-items: center;
        align-items: center;

        h2 {
            color: #595757;
            font-size: 35px;
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
