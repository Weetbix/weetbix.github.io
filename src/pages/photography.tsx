import React, { FunctionComponent } from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import CenteredPage from "../components/CenteredPage";
import galleryData from "../data/photography/gallery.json";
import { PhotographyPageQuery } from "../../graphql-types";

const Paragraph = styled.p`
  margin-bottom: 120px;
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
  margin-bottom: 200px;
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

const uppercaseFirstLetter = (str: string) => {
  const [first, ...rest] = str;
  return first.toUpperCase() + rest;
};

const PhotographyPage: FunctionComponent<{
  data: PhotographyPageQuery;
}> = ({ data: { photostories } }) => {
  return (
    <CenteredPage>
      <PageHeader>Photostories</PageHeader>
      <Paragraph>
        <span>Short stories told through photographs</span>
        <br />
        <br />
        <span>
          {photostories.categories.map(category => {
            return (
              <a href={`/photography/photostories/${category}/`}>
                {uppercaseFirstLetter(category)}
              </a>
            );
          })}
        </span>
      </Paragraph>

      {galleryData.map(galleryCategory => (
        <>
          <h1>{galleryCategory.title}</h1>
          {galleryCategory.photos.map(photo => (
            <Photo {...photo} />
          ))}
        </>
      ))}
    </CenteredPage>
  );
};

export default PhotographyPage;

export const pageQuery = graphql`
  query PhotographyPage {
    photostories: allMarkdownRemark {
      categories: distinct(field: fields___category)
    }
  }
`;
