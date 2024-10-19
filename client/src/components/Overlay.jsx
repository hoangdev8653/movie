import React from "react";

function Overlay({ onClick }) {
  return (
    <div
      onClick={onClick}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      className="fixed top-0 left-0 w-full h-full overflow-y-auto z[49] "
    ></div>
  );
}

export default Overlay;
