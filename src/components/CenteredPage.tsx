import React from "react";
import styled from "styled-components";
import Page from "./Page";

const PageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  height: 100%;

  @media (max-width: 768px) {
    display: block;
  }
`;

const ContentContainer = styled.div`
  flex-basis: 0;
  flex-grow: 999;
  max-width: 800px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const CenteredPage: React.FunctionComponent<{ className?: string }> = ({
  children,
  className
}) => (
  <Page>
    <PageContainer>
      <ContentContainer className={className}>{children}</ContentContainer>
    </PageContainer>
  </Page>
);

export default CenteredPage;
