import React, { useEffect, useState } from "react";
import "./Play.css";
import { useParams } from "react-router-dom";
import Asset from "../assets/Asset";

const Play = () => {
  const [current, setCurrent] = useState([]);
  const [audio, setAudio] = useState(null);
  const params = useParams();

  useEffect(() => {
    const paramsInt = parseInt(params.id);
    const filterParams = Asset.filter((item) => item.id === paramsInt);
    setCurrent(filterParams);
  }, [params.id]);

  const handleImgClick = (music) => {
    if (audio && !audio.paused) {
      audio.pause();
    } else {
      const newAudio = new Audio(music);
      newAudio.play();
      setAudio(newAudio);
    }
  };

  // const handlePause = () => {
  //   if (audio) {
  //     audio.pause();
  //   }
  // };

  useEffect(() => {
    return () => {
      // Clean up the audio when the component is unmounted
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, [audio]);

  console.log("current is ", current);
  return (
    <div className="play">
      <div className="play-wrapper">
        {current &&
          current.map((i) => (
            <div className="outer-play" key={i.id}>
              <img src={i.img} alt="" />
              <div className="titles">
                <h1 className="bg-img-line">{i.line}</h1>
                {/* <button onClick={() => handlePause()}>pause</button> */}
                <h1 className="time-1 common" onClick={() => handleImgClick(i.music)}>
                  Welcome
                </h1>
                <h1 className="time-11 common">1 min</h1>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Play;
