import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Img, { FixedObject } from "gatsby-image";

type ProjectProps = {
  title?: string;
  summary?: string;
  thumb?: FixedObject;
};

const ProjectContainer = styled.div`
  margin: 1em;
`;

const ProjectSummary: FunctionComponent<ProjectProps> = ({
  title,
  summary,
  thumb
}) => {
  return (
    <ProjectContainer>
      <h1>{title}</h1>
      <h1>{summary}</h1>
      <Img fixed={thumb} />
    </ProjectContainer>
  );
};

export default ProjectSummary;
