import React, { useEffect, useState } from "react";
import "./Course.css";
import { Link } from "react-router-dom";
import Asset from "../mainAsset/Asset";

const Course = () => {
  const [courseImg, setCoursImg] = useState("");
  // const [audio, setAudio] = useState(null)
  useEffect(() => {
    setCoursImg(Asset);
  }, []);

  const handleImgClick = (music) => {
    const audio = new Audio(music);
    audio.play()
    // setAudio(audio)
  }


  // const handlePause = () => {
  //   if(audio){
  //     audio.pause()
  //   }
  // }

  // console.log("course img is ", courseImg);


  return (
    <div className="course">
      <div className="course-wrapper">
        <div className="outer-map-card">
          {courseImg &&
            courseImg.map((i) => (
              <div className="courseimg-map" key={i.id}>
                <Link to={`/${i.id}`}>
                {/* <img src={i.img} alt="" onClick={() => handleImgClick(i.music)} /> */}
                <img src={i.img} className="thubmnail" alt="" />
                {/* <button onClick={() => handlePause()}>pause</button> */}
                <h2 className="thubmnail-h2">{i.title}</h2>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Course;
