import React from "react";
import Navabr from "../../components/navbar/navbar";
import Featured from "../../components/featured/featured";
import List from "../../components/list/list";
import "../Home/home.scss";

function Home() {
  return (
    <div className='home'>
      <Navabr />
      <Featured type={"movie"} />
      <List />
      <List />
      <List />
    </div>
  );
}

export default Home;
