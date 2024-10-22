import React, { useState } from "react";
import { BsPlayCircle } from "react-icons/bs";
import ReactPlayer from "react-player";
import ButtonClose from "./ButtonClose";
import Overlay from "./Overlay";
import ModalCustom from "./Modal";

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
        <div>
          <ModalCustom onClose={handleClose}>
            <div className="relative items-center mx-auto">
              <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
                <div className="w-[70%]">
                  <ReactPlayer
                    playing={true}
                    width="100%"
                    height="100%"
                    url={sourceUrl}
                    controls
                  />
                </div>
              </div>
            </div>
          </ModalCustom>
        </div>
      )}
    </div>
  );
}

export default Play;
