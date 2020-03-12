import React from "react";
import SeasonButton from "../../Components/Buttons/SeasonButon/SeasonButton";

import "./SideBar.scss";

const SideBar = ({ show }) => {
  const {
    name,
    rating: { average: averageRating },
    language,
    premiered,
    status,
    genres,
    image: { original: imageLink },
    summary
  } = show;

  return (
    <aside className="sidebar">
      <div className="show-details">
        <div className="main">
          <img src={imageLink} className="show-image" alt="" />
          <div>
            <div className="title-wrap">
              <h1 className="title">{name || "n/a"}</h1>
            </div>
            <div className="detailed-items">
              <p>
                Ratings: <span>{averageRating || "n/a"}</span>
              </p>
              <p>
                Language: <span>{language || "n/a"}</span>
              </p>
              <p>
                Premiered: <span>{premiered || "n/a"}</span>
              </p>
              <p>
                Status: <span>{status || "n/a"}</span>
              </p>
              <p>
                Genres: <span>{(genres && (genres.map(genre => `${genre}, `))) || "n/a"}</span>
              </p>
            </div>
          </div>
        </div>
        <div
          className="summary"
          dangerouslySetInnerHTML={{ __html: summary }}
        />
        <div className="season-tags">
          <h4 className="heading">Filter By Season:</h4>
          {[...Array(5).keys()].map((number, index) => (
            <SeasonButton key={index} number={number} episodesNo={3} />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
