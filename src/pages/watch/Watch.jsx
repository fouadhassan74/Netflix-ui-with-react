import { ArrowBackOutlined } from "@mui/icons-material";
import React from "react";
import Karim from "../../video/Karim Osama X _ELWaili - Nazlet Seman _ كريم أسامة و الوايلي - نزلة سمان (Official Music Video)(720P_HD).mp4";
import "../watch/watch.scss";
function Watch() {
  const film = "https://youtube.com/shorts/xpH7Yba_8bM?feature=share ";
  return (
    <div className='watch'>
      <div className='back'>
        <ArrowBackOutlined />
        Home
      </div>
      <video autoPlay progress controls={true} src={Karim} />
    </div>
  );
}

export default Watch;
