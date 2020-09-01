import React from "react";
import styled from "styled-components";
import Card from "../../shared/Card/Card";
import CardImage from "../../shared/Card/CardImage";
import CardContent from "../../shared/Card/CardContent";
import CharacterCardTop from "../CharacterCardTop";
import getThumbnailUrl from "../../../utils/getThumbnailUrl";
import getSanitizedDescription from "../../../utils/getSanitizedDescription";

const isComicDetailLink = (link) => link.type === "detail";

const StyledAnchor = styled.a`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;

  .comic-thumbnail {
    flex: 0 0 100px;

    .character-card__top {
      padding: 0.25rem;

      button {
        font-size: 1rem;
      }
    }
  }

  .comic-details {
    oveflow-y: hidden;

    padding: 0.5rem 1rem;
    flex: 1 1 70%;
    min-width: 380px;

    h4 {
      margin-bottom: 0.25rem;
    }
  }
`;

const ComicItem = ({ comic }) => {
  const {
    title, description, thumbnail, urls,
  } = comic;
  const comicDetailLink = urls.find(isComicDetailLink);
  const comicDetailUrl = comicDetailLink
    ? comicDetailLink.url
    : "http://marvel.com/comics/";

  return (
    <StyledAnchor
      href={comicDetailUrl}
      title={`Ver más detalles sobre ${title}`}
      target="_blank"
      rel="noreferrer"
    >
      <div className="comic-thumbnail">
        <Card>
          <CardImage src={getThumbnailUrl(thumbnail, "portrait_medium")} />
          <CardContent>
            <CharacterCardTop />
          </CardContent>
        </Card>
      </div>
      <div className="comic-details">
        <h4>{title}</h4>
        <p>{getSanitizedDescription(description)}</p>
      </div>
    </StyledAnchor>
  );
};

export default ComicItem;
