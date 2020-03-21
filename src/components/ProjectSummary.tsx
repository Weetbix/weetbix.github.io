import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Img, { FixedObject } from "gatsby-image";

type ProjectProps = {
  title?: string;
  summary?: string;
  languages?: string;
  thumb?: FixedObject;
};

const ProjectContainer = styled.div`
  display: flex;
  /* justify-content: space-between; */
  /* justify-content: space-around; */
  align-items: stretch;

  margin-bottom: 180px;
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
  /* font-weight: 100; */
  /* font-weight: lighter; */
  font-weight: 1;
  letter-spacing: 4px;

  font: Light 25px/50px Helvetica;
  letter-spacing: 0.25px;

  margin-bottom: 10px;
`;

const Languages = styled.span`
  font-size: 15px;
  font-weight: 100;
`;

const ProjectSummary: FunctionComponent<ProjectProps> = ({
  title,
  summary,
  languages,
  thumb
}) => {
  return (
    <ProjectContainer>
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
