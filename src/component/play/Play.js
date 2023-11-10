import React, { useEffect, useState } from "react";
import "./Play.css";
import { useParams } from "react-router-dom";
import Asset from "../assets/Asset";

const Play = () => {
  const [current, setCurrent] = useState([]);

  const params = useParams();

  useEffect(() => {
    const paramsInt = parseInt(params.id);

    const filterParams = Asset.filter((item) => item.id === paramsInt);

    setCurrent(filterParams);
  }, [params.id]);

  const [audio, setAudio] = useState(null)

  const handleImgClick = (music) => {
    const audio = new Audio(music);
    audio.play()
    setAudio(audio)
  }

  const handlePause = () => {
    if(audio){
      audio.pause()
    }
  }


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
                {/* <h1 className="bg-img-title">{i.title}</h1> */}
                <button onClick={() => handleImgClick(i.music)}>play</button>
                <button onClick={() => handlePause()}>pause</button>

              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Play;
