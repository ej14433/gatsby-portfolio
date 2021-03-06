import React from "react";
import Header from "../components/header";
import { graphql } from "gatsby";

const Template = ({ data }) => {
    const { markdownRemark } = data; // data.markdownRemark holds our post data
    const { frontmatter, html } = markdownRemark;

    return (
        <>
            <Header siteTitle={data.site.siteMetadata.title} />
            <div className="blog-post-container">
                <div className="blog-post">
                    <h1>{frontmatter.title}</h1>
                    <h2>{frontmatter.date}</h2>
                    <div
                        className="blog-post-content"
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                </div>
            </div>
        </>
    );
};

export default Template;

export const pageQuery = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
            }
        }
        site {
            siteMetadata {
                title
            }
        }
    }
`;
