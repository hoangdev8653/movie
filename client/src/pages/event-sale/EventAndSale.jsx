import React from "react";
import Sale from "./Event";
import Event from "./Sale";
function EventAndSale() {
  return (
    <div style={{ background: "#1a1d29" }} className="w-full">
      <Event />
      <Sale />
    </div>
  );
}

export default EventAndSale;
