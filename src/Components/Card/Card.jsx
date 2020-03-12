import React from "react";

import "./Card.scss";

const Card = ({
  defaultImageLink,
  episode: { name, season, number, airdate, summary, image }
}) => (
  <div className="episode-card">
    <div
      className="image-wrap"
      style={{
        backgroundImage: `url(${image ? image.original : defaultImageLink})`
      }}
    ></div>
    <div className="episode-details-wrap">
      <div className="header">
        <h1>{name}</h1>
        <div className="body" dangerouslySetInnerHTML={{ __html: summary }} />
      </div>
      <div className="footer">
        <span>{`Season ${season} Episode ${number}`}</span>
        <span>{airdate}</span>
      </div>
    </div>
  </div>
);

export default Card;
