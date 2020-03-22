import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Page from "../components/Page";
import galleryData from "../data/photography/gallery.json";

const PageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  height: 100%;

  h1 {
    margin-top: 120px;
  }
`;

const ContentContainer = styled.div`
  flex-basis: 0;
  flex-grow: 999;
  max-width: 800px;
`;

const PageHeader = styled.h1`
  && {
    line-height: 30px;
    margin-top: 300px;
  }
`;

const PhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 100px;
`;

const Photo: FunctionComponent<{ href: string; src: string }> = ({
  href,
  src
}) => {
  return (
    <PhotoContainer>
      <a href={href}>
        <img src={src} />
      </a>
    </PhotoContainer>
  );
};

const PhotographyPage: FunctionComponent<{}> = ({}) => {
  return (
    <Page>
      <PageContainer>
        <ContentContainer>
          {/* <PageHeader>Photos</PageHeader> */}
          <PageHeader>Photostories</PageHeader>
          <div>Short stories told through photographs</div>
          <br />
          <span>
            <a>Vietnam</a>
          </span>

          {galleryData.map(galleryCategory => (
            <>
              <h1>{galleryCategory.title}</h1>
              {galleryCategory.photos.map(photo => (
                <Photo {...photo} />
              ))}
            </>
          ))}
        </ContentContainer>
      </PageContainer>
    </Page>
  );
};

export default PhotographyPage;
