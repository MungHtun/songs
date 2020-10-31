import React from "react";

import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  //   console.log(props);
  if (!song) {
    return <div>select song</div>;
  }
  return (
    <div>
      <h3>Detail for:</h3>
      <p>Title: {song.title}</p>
      <p>Title: {song.duration}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

// const mapDispatchToProps = {

// }

export default connect(mapStateToProps)(SongDetail);
