import React from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";
import { useState, useRef } from "react";

import "./Intro.css";

const Intro = () => {
  const [playvideo, setPlayvideo] = useState(false);
  const videoRef = useRef(null);

  return (
    <div className="app__video">
      <video
        ref={videoRef}
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={() => {
            setPlayvideo(!playvideo);
            if (playvideo) {
              videoRef.current.play();
            } else {
              videoRef.current.pause();
            }
          }}
        >
          {playvideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
