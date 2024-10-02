import React from "react";
import Sale from "./Sale";
import Event from "./Event";
function EventAndSale() {
  return (
    <div style={{ background: "#1a1d29" }} className="w-full">
      <Event />
      <Sale />
    </div>
  );
}

export default EventAndSale;
