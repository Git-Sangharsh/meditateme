  import React, { useEffect, useState } from "react";
  import "./Play.css";
  import { useParams } from "react-router-dom";
  import Asset from "../mainAsset/Asset";

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
              <div className="outer-map" key={i.id}>
                  <h1 className="map-title">{i.title}</h1>
                  <h2 className="map-line">{i.line}</h2>
                  {
                    i.mainMusic.map((item) => (
                      <div key={item.id}>
                        <h1>{item.meditate}</h1>
                      </div>
                    ))
                  }
              </div>
            ))}
        </div>
      </div>
    );
  };

  export default Play;
