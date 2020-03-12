import React from "react";
import { connect } from "react-redux";

import Card from "../../Components/Card/Card";
import SideBar from "../../Components/SideBar/SideBar";
import Loader from "../../Components/Loader/Loader";

import "./Show.scss";

const Show = ({ show }) => {
  const { showDetails, episodes, loading, request } = show;

  const showSection = (episodes) => (
    <section className="show">
      <main className="container">
        {episodes.map((episode, index) => (
          <Card key={index} episode={episode} defaultImageLink={showDetails.image.original} />
        ))}
      </main>
      <SideBar show={showDetails} />
    </section>
  )

  return (
    (loading && <Loader />) ||
    (request && showSection(episodes))
  );
};

const mapStateToProps = ({ show }) => ({
  show
});

export default connect(mapStateToProps)(Show);
