import React from "react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
export function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", color: "red" }}
      onClick={onClick}
    ></div>
  );
}

export function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} my-auto text-red-500 `}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    ></div>
  );
}
