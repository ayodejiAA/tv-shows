import React from "react";

import "./SeasonButton.scss";

const SeasonButton = ({ number, episodesNo }) => (
  <button className="season-button">
    Season {`${number} (${episodesNo})`}
  </button>
);

export default SeasonButton;
