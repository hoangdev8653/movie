import React, { useEffect, useRef, useState } from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import Comment from "./comment";
import Ratting from "../../../../components/Rating";
import { getLocalStorage } from "../../../../utils/localStorage";
import { Default_avatar_profile } from "../../../../image";
import { reviewStore } from "../../../../store/Review";
import LogoLoader from "../../../../components/loader/loader";

function DanhGia({ data }) {
  const movieId = data[0]._id;
  const [isShowModal, setIsShowModal] = useState(false);
  const [starValue, setStarValue] = useState(0);
  const [content, setContent] = useState("");
  const { createReview, isLoading } = reviewStore();
  const [canSubmit, setCanSubmit] = useState(false);
  const [isDisible, setIsDisible] = useState(false);
  const user = getLocalStorage("user");
  const modalRef = useRef();

  const handleShowModal = () => {
    setIsDisible(true);
    setIsShowModal(true);
  };
  const handleClickOuside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setIsShowModal(false);
    }
    setIsShowModal(true);
    setIsDisible(false);
  };

  useEffect(() => {
    if (isShowModal) {
      document.addEventListener("mousedown", handleClickOuside);
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("mousedown", handleClickOuside);
      document.body.style.overflow = "auto";
      setContent("");
      setStarValue(0);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOuside);
    };
  }, [isShowModal]);

  useEffect(() => {
    if (content.length > 5 && starValue !== 0) {
      setCanSubmit(true);
    } else {
      setCanSubmit(false);
    }
  }, [content, starValue]);

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleStarChange = (value) => {
    setStarValue(value);
  };

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    await createReview({ content, ratting: starValue, movieId });
    setTimeout(() => {
      setIsShowModal(false);
      setStarValue(0);
      setContent("");
    }, 3000);
  };

  return (
    <div className="mt-4 max-w-[870px] mx-auto">
      {user ? (
        <>
          <div ref={modalRef} onClick={handleShowModal} className="mb-4">
            <div className="w-[90%] cursor-pointer m-auto relative max-w-[580px]">
              <span className="absolute left-[3%] top-[20%]">
                <img
                  className="w-10 h-10 rounded-3xl"
                  src={user?.avarta ? user.avarta : Default_avatar_profile}
                />
              </span>
              <input
                disabled={isDisible}
                style={{
                  padding: "10px 10px 10px 60px",
                }}
                className="text-black cursor-pointer border-[1px] border-solid rounded text-sm h-[60px] outline-none max-w-[580px] w-full"
                type="text"
                placeholder="Bạn nghĩ gì về bộ phim này?"
              />
              <span
                style={{ transform: " translateY(-50%)" }}
                className="top-1/2 m-auto flex absolute right-[3%]"
              >
                <Ratting
                  defaultValue={5}
                  rating={5}
                  disabled={true}
                  onRateChange={handleStarChange}
                  allowHalf={true}
                />
              </span>
            </div>
          </div>
          {isShowModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none mx-auto top-[-50px] ">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  <form
                    onSubmit={handleSubmitReview}
                    className="border-0 rounded-lg shadow-lg relative flex flex-col  bg-white outline-none focus:outline-none max-w-[90%] w-[560px] mx-auto py-8"
                  >
                    <div className=" m-auto p-2 text-3xl text-green-400">
                      {starValue}
                    </div>
                    <button
                      onClick={() => setIsShowModal(false)}
                      className="top-2 right-2 absolute p-2 hover:bg-gray-100  rounded-full "
                    >
                      <IoMdClose className="text-3xl text-gray-400" />
                    </button>

                    <div className="flex items-center justify-center  border-solid border-slate-200 rounded-t">
                      <Ratting onRateChange={handleStarChange} />
                    </div>
                    <div className="p-4 text-center">
                      <input
                        value={content}
                        onChange={(e) => handleContentChange(e)}
                        className="text-black border-solid border-2 border-gray mx-auto p-4 text-base focus:border-red-300 rounded w-11/12"
                        type="text"
                      />
                    </div>
                    <div className="p-4 text-center">
                      {isLoading ? <LogoLoader /> : ""}
                    </div>
                    <div className="flex items-center justify-center p-2 border-solid border-slate-200 rounded-b">
                      <button
                        disabled={!canSubmit}
                        className={`text-white font-bold uppercase text-sm px-6 py-3 rounded shadow  outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 ${
                          canSubmit
                            ? "bg-red-500 active:bg-red-400 hover:shadow-lg"
                            : "bg-red-200"
                        }`}
                        type="submit"
                      >
                        Đăng
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div
                onClick={handleClickOuside}
                className="opacity-45 fixed inset-0 z-40 bg-black overflow-y-hidden"
              ></div>
            </>
          ) : null}
        </>
      ) : (
        <>
          <div className="mb-4">
            <div
              onClick={handleShowModal}
              className="w-full cursor-pointer m-auto relative max-w-xl"
            >
              <span className="absolute top-[20%] left-[3%]">
                <img
                  className="w-9 h-9 rounded-3xl"
                  src="	https://movie-booking-project.vercel.app/img/unknowUser.png"
                  alt="ảnh lỗi"
                />
              </span>
              <input
                disabled={isDisible}
                style={{
                  padding: "10px 10px 10px 60px",
                }}
                className="text-gray-700 w-full cursor-pointer bg-white border-solid border-[1px] text-sm rounded h-[60px] outline-none"
                type="text"
                placeholder="Bạn nghĩ gì về bộ phim này?"
              />
              <span
                style={{ right: "3%", transform: " translateY(-50%)" }}
                className="top-1/2 m-auto flex absolute"
              ></span>
            </div>
          </div>
          {isShowModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ml-14 top-[-50px]">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <div className="flex items-start justify-between p-5 border-solid border-slate-200 rounded-t">
                      <AiOutlineExclamationCircle
                        style={{
                          alignItems: "center",
                          fontSize: 90,
                          margin: "auto",
                          color: "#f8bb86",
                        }}
                        className="items-center"
                      />
                    </div>
                    <div
                      style={{
                        color: "#595959",
                        fontSize: "1.875rem",
                        fontWeight: "700",
                        alignItems: "center",
                        margin: "14px 80px",
                        padding: "10px 20px",
                      }}
                    >
                      Bạn cần phải đăng nhập
                    </div>
                    <div className="flex items-center justify-center p-6 border-solid border-slate-200 rounded-b">
                      <Link to="/login">
                        <button
                          style={{ backgroundColor: "rgb(48, 133, 214)" }}
                          className=" text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                        >
                          Đăng nhập
                        </button>
                      </Link>
                      <button
                        className="bg-gray-500 text-white active:bg-sky-800 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setIsShowModal(false)}
                      >
                        Không
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </>
      )}
      <Comment data={data[0]?._id} />
    </div>
  );
}

export default DanhGia;
