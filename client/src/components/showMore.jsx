import React, { useState } from "react";

function ShowMore({ data }) {
  const [showMore, setShowMore] = useState(false);
  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
      <div
        onClick={handleShowMore}
        className="px-3 py-2 text-gray-400 rounded-md text-center cursor-pointer hover:opacity-85 border-[1px] border-solid border-gray-400"
      >
        Xem Thêm
      </div>
  );
}

export default ShowMore;
