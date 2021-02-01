import * as React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { ProjectPageQuery } from "../../graphql-types";
import CenteredPage from "../components/CenteredPage";
import ProjectSummary from "../components/ProjectSummary";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const StyledPage = styled(CenteredPage)`
  margin-top: 180px;
  margin-bottom: 180px;

  .image-gallery-svg {
    height: 50px;
  }
  .image-gallery-icon:hover {
    color: #ffc785;
  }
  .image-gallery-bullet {
    padding: 3px;
  }
  div.image-gallery {
    margin-top: 65px;
    margin-bottom: 65px;
  }

  @media (max-width: 768px) {
    margin-top: 80px;
    margin-bottom: 80px;
  }
`;

const VideoContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
  margin-top: 65px;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const Video: React.FunctionComponent<{ src: string }> = ({ src }) => (
  <VideoContainer>
    <iframe src={src} frameborder="0" allowfullscreen></iframe>
  </VideoContainer>
);

const ProjectPage: React.FunctionComponent<{ data: ProjectPageQuery }> = ({
  data: { project },
}) => {
  return (
    <StyledPage>
      <ProjectSummary
        title={project.details.title}
        summary={project.details.summary}
        languages={project.details.languages}
        thumb={project.fields.thumbnail?.childImageSharp?.fixed}
      />
      {project.details.video_url && <Video src={project.details.video_url} />}
      <div dangerouslySetInnerHTML={{ __html: project.html }} />
      {project.fields.screenshots?.length ? (
        <ImageGallery
          items={project.fields.screenshots.map((screenshot) => ({
            original: screenshot.publicURL,
          }))}
          showThumbnails={false}
          showFullscreenButton={false}
          showPlayButton={false}
          showBullets={true}
        />
      ) : null}
    </StyledPage>
  );
};

export const query = graphql`
  fragment ProjectDetails on MarkdownRemarkFrontmatter {
    caption
    category
    date
    dateVisual
    languages
    libraries
    summary
    team
    video_url
    title
  }

  fragment ProjectScreenshotThumbnail on File {
    childImageSharp {
      fixed(width: 150, height: 150) {
        ...GatsbyImageSharpFixed
      }
    }
  }

  query ProjectPage($slug: String!) {
    project: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      details: frontmatter {
        ...ProjectDetails
      }
      fields {
        thumbnail {
          ...ProjectThumbnail
        }
        screenshots {
          publicURL
        }
      }
    }
  }
`;

export default ProjectPage;
