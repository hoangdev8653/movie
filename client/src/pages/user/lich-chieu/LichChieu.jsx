import React, { useEffect, useState } from "react";
import {
  getAllMovieDangChieu,
  getAllMovieSapChieu,
} from "../../../apis/GioChieu";
import MovieDangChieu from "./MovieDangChieu";
import MovieSapChieu from "./MovieSapChieu";

function LichChieu() {
  const [movieDangChieu, setMovieDangChieu] = useState([]);
  const [movieSapChieu, setMovieSapChieu] = useState([]);

  useEffect(() => {
    const dangChieu = async () => {
      const response = await getAllMovieDangChieu();
      if (response.status === 200) {
        setMovieDangChieu(response.data.content);
      }
    };

    const sapChieu = async () => {
      const response = await getAllMovieSapChieu();
      if (response.status === 200) {
        setMovieSapChieu(response.data.content);
      }
    };

    dangChieu();
    sapChieu();
  }, []);

  return (
    <div style={{ background: "#1a1d29" }} className="w-full ">
      <div className="border-t-[1px] border-gray-500"></div>
      <MovieDangChieu movieDangChieu={movieDangChieu} />
      <div className="border-t-[1px] border-gray-500"></div>
      <MovieSapChieu movieSapChieu={movieSapChieu} />
    </div>
  );
}

export default LichChieu;
