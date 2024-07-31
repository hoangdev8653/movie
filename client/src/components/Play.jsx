import React, { useEffect, useState } from "react";
import { BsPlayCircle } from "react-icons/bs";
import ReactPlayer from "react-player";
import ButtonClose from "./ButtonClose";
import Overlay from "./overlay/Overlay";

function Play({ className, onClick, sourceUrl }) {
  const [showVideo, setShowVideo] = useState(false);

  const handlePlayClick = () => {
    setShowVideo(true);
  };
  const handleClose = () => {
    setShowVideo(false);
  };

  return (
    <div>
      <div
        className={`${className} absolute text-white opacity-50 text-5xl cursor-pointer hover:opacity-40 z-10 shadow-lg`}
        onClick={handlePlayClick}
      >
        <BsPlayCircle />
      </div>
      {showVideo && (
        <div className="">
          <div className="fixed top-24 w-[900px] z-50 ">
            <ReactPlayer width="100%" height="100%" url={sourceUrl} controls />
          </div>
          <div onClick={handleClose}>
            <ButtonClose className={"top-20 right-64"} />
          </div>
          <Overlay onClick={handleClose} />
        </div>
      )}
    </div>
  );
}

export default Play;
