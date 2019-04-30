import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Home from "../components/home";
import SEO from "../components/seo";

const IndexPage = ({
    data: {
        allMarkdownRemark: { edges },
    },
}) => {
    const Posts = edges
        .filter(({ node }) => !!node.frontmatter.title)
        .map(({ node }) => (
            <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
        ));

    return (
        <Layout>
            <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
            <Home>{Posts}</Home>
        </Layout>
    );
};

export default IndexPage;

export const pageQuery = graphql`
    query {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
            edges {
                node {
                    html
                    frontmatter {
                        title
                        path
                    }
                }
            }
        }
    }
`;
