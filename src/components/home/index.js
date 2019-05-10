import React from "react";
import { StyledHome, StyledLink } from "./style";
import Github from "../../images/svg/github.svg";
import Linkedin from "../../images/svg/linkedin.svg";

const Home = ({ children }) => {
    return (
        <StyledHome>
            <section className="showcase">
                <div className="header">
                    <div className="sentences">
                        <div className="sentence">
                            <span>1</span> elis jones;
                        </div>
                        <div className="sentence">
                            <span>2</span> web developer;
                        </div>
                        <div className="sentence">
                            <span>3</span> made in wales;
                        </div>
                    </div>
                    <div className="links">
                        <StyledLink to="./projects">projects</StyledLink>
                        <StyledLink to="./about_me">about_me</StyledLink>
                    </div>
                    <div className="logos">
                        <Github />
                        <Linkedin />
                    </div>
                </div>
            </section>
        </StyledHome>
    );
};

export default Home;
