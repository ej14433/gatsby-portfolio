import styled from "styled-components";
import { Link } from "gatsby";

export const StyledHeader = styled.header`
    background: #b3c4de;
    height: 75px;
    display: grid;
    align-items: center;
    padding-left: 115px;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: #595757;
`;
