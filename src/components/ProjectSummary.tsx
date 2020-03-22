import { graphql } from "gatsby";
import Img, { FixedObject } from "gatsby-image";
import React, { FunctionComponent } from "react";
import styled from "styled-components";

type ProjectProps = {
  className?: string;
  title?: string;
  summary?: string;
  languages?: string;
  thumb?: FixedObject;
};

const ProjectContainer = styled.div`
  display: flex;
  align-items: stretch;

  h1 {
    margin: 0;
    margin-bottom: auto;
    line-height: 30px;
  }
`;

const TextContainer = styled.div`
  max-width: 80%;
  display: flex;
  flex-direction: column;

  padding-left: 30px;
`;

const Summary = styled.span`
  font-size: 20px;
  letter-spacing: 4px;
  letter-spacing: 0.25px;

  margin-bottom: 10px;
`;

const ProjectSummary: FunctionComponent<ProjectProps> = ({
  title,
  summary,
  languages,
  thumb,
  className
}) => {
  return (
    <ProjectContainer className={className}>
      <Img fixed={thumb} />

      <TextContainer>
        <h1>{title}</h1>
        <Summary>{summary}</Summary>
        <div>{languages}</div>
      </TextContainer>
    </ProjectContainer>
  );
};

export default ProjectSummary;

export const ProjectThumbnail = graphql`
  fragment ProjectThumbnail on File {
    childImageSharp {
      fixed(width: 114, height: 114) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`;
