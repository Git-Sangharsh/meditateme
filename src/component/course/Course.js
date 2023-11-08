import React, { useEffect, useState } from "react";
import "./Course.css";
import Asset from "../assets/Asset";

const Course = () => {
  const [courseImg, setCoursImg] = useState("");
  const [audio, setAudio] = useState(null)
  useEffect(() => {
    setCoursImg(Asset);
  }, []);

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

  // console.log("course img is ", courseImg);


  return (
    <div className="course">
      <div className="course-wrapper">
        <div className="outer-map-card">
          {courseImg &&
            courseImg.map((i) => (
              <div className="courseimg-map" key={i.id}>
                <img src={i.img} alt="" onClick={() => handleImgClick(i.music)} />
                <button onClick={() => handlePause()}>pause</button>
                <h2>{i.title}</h2>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Course;
