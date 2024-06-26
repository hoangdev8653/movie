import React, { useState } from "react";

function ShowMore({ children, className }) {
  const [showMore, setShowMore] = useState(false);
  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const itemsToShow = showMore ? children : children?.slice(0, 3);

  return (
    <>
      {itemsToShow}
      {children?.length > 3 && (
        <div
          onClick={handleShowMore}
          className={`${className} px-3 py-2 text-gray-400 rounded-md text-center cursor-pointer hover:opacity-85 border-[1px] border-solid border-gray-400`}
        >
          {showMore ? "Thu Gọn" : "Xem Thêm"}
        </div>
      )}
    </>
  );
}

export default ShowMore;
