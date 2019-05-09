import React from "react";
import { StyledHome } from "./style";
import Github from "../../images/svg/github.svg";
import Linkedin from "../../images/svg/linkedin.svg";

const Home = ({ children }) => {
    return (
        <StyledHome>
            <section className="showcase">
                <div className="header">
                    <div className="sentence">
                        <span>1</span> test sentence;
                    </div>
                    <div className="sentence">
                        <span>2</span> test sentence;
                    </div>
                    <div className="sentence">
                        <span>3</span> test sentence;
                    </div>
                    <div className="logos">
                        <Github />
                        <Linkedin />
                    </div>
                </div>
            </section>
            {/* <section className="projects">
                <h2 className="title">projects/</h2>
                {children.map(Post => (
                    <div className="project">{Post}</div>
                ))}
            </section> */}
        </StyledHome>
    );
};

export default Home;
