import React from "react";
import { connect } from "react-redux";

import { reset } from "../../redux/show/showActions";
import SearchBox from "../../Components/SearchBox/SearchBox";
import "./Home.scss";

const Home = ({ request, dispatch }) => {
  return (
    <section className={`home ${request ? "collapse" : ""}`}>
      <h1 className="back-home" onClick={() => dispatch(reset())}>
        <span>&#10150;</span> Home
      </h1>
      <SearchBox />
    </section>
  );
};

const mapStateToProps = ({ show: { request } }) => ({
  request
});

export default connect(mapStateToProps)(Home);
