import React, { useState } from "react";

function Comment() {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(1);

  const handleLike = () => {
    if (!liked) {
      setLikeCount(likeCount + 1);
      //   const likeComment = { like: likeCount };
      //   sessionStorage.setItem("likeComment", JSON.stringify(likeComment));
      //   const data = JSON.parse(sessionStorage.getItem("likeComment"));
      //   console.log(data);
    } else {
      setLikeCount(likeCount - 1);
    }
    setLiked(!liked);
  };
  return (
    <div
      style={{
        height: "250px",
        border: "1px solid #e6e6e6",
        padding: "20px 20px 12px",
        maxWidth: "580px",
        borderBottom: "none",
        borderRadius: "3px",
        marginBottom: "15px",
      }}
      className="text-black w-full m-auto bg-white "
    >
      <div>
        <div className="float-left">
          <span className="float-left inline-block">
            <img
              style={{ borderRadius: "25px" }}
              className="w-9 h-9"
              src="https://i.pravatar.cc/150?u=hdchgfwed123dfg"
              alt="avarta"
            />
          </span>
          <span className="inline-block ml-3">
            <p className="text-black text-sm font-medium capitalize">
              Huy Hoàng
            </p>
            <p>2 năm trước</p>
          </span>
        </div>
        <div className="float-right text-center">
          <p className="text-green-600">10</p>
          <span className="text-yellow-600  inline-flex relative text-left text-base">
            <span className="fa fa-star mr-1"></span>
            <span className="fa fa-star mr-1"></span>
            <span className="fa fa-star mr-1"></span>
            <span className="fa fa-star mr-1"></span>
            <span className="fa fa-star mr-1"></span>
          </span>
        </div>
      </div>
      <div
        style={{ borderBottom: "1px solid #dee2e6" }}
        className="py-3 mt-14 mb-3"
      >
        <p className="mb-0 text-base">
          mâu thuẫn chưa đủ sâu! tính cách nv xây dựng vẫn còn hời hợt. tuyến nv
          dày nhưng không kĩ họ chỉ xuất hiện để cố làm hợp lí mạch phim nên
          phim nh chỗ khá vô lý. và thêm 1 cái muôn thưở của phim Hàn là thích
          tạo drama để lấy đồng cảm của ng xem.
        </p>
      </div>
      <span className="inline-block cursor-pointer">
        <span onClick={handleLike} className="mr-2">
          {liked ? (
            <>
              <svg
                className="fill-current w-6 h-6 inline-block text-2xl select-none"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
                style={{
                  color: "red",
                  transition: "fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                }}
              >
                <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"></path>
              </svg>
            </>
          ) : (
            <>
              <svg
                className="fill-current w-6 h-6 inline-block text-2xl select-none"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
                style={{
                  color: "rgba(115, 117, 118, 0.45)",
                  transition: "fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                }}
              >
                <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"></path>
              </svg>
            </>
          )}
        </span>
        <span style={{ color: "rgb(115, 117, 118)", fontSize: 14 }}>
          {likeCount}
        </span>
      </span>
    </div>
  );
}

export default Comment;
