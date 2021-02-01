import React from "react";
import styled from "styled-components";
import Page from "./Page";

const BackLink = styled.a`
  display: block;
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
`;

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

type CenteredPageProps = {
  className?: string;
  showBack?: boolean;
};
const CenteredPage: React.FunctionComponent<CenteredPageProps> = ({
  children,
  className,
  showBack = true,
}) => (
  <Page>
    {showBack && (
      <BackLink
        href="javascript:history.back()"
        aria-label="back to the previous page"
      >
        Back
      </BackLink>
    )}
    <PageContainer>
      <ContentContainer className={className}>{children}</ContentContainer>
    </PageContainer>
  </Page>
);

export default CenteredPage;
