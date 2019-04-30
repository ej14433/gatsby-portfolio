import React from "react";
import { StyledHome } from "./style";

const Home = ({ children }) => {
    return (
        <StyledHome>
            <section className="showcase">
                <h2>web developer, based in london</h2>
                <div className="items">
                    <div className="item" />
                    <div className="item" />
                    <div className="item" />
                </div>
            </section>
            <section className="projects">
                <h2 className="title">projects/</h2>
                {children.map(Post => (
                    <div className="project">{Post}</div>
                ))}
            </section>
        </StyledHome>
    );
};

export default Home;
