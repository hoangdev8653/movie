import React, { useEffect, useState } from "react";
import { getSuatChieuByMovie } from "../../apis/suatChieu";
function LichChieu({ data }) {
  const [value, setValue] = useState("");
  const movieId = data[0]?._id;

  useEffect(() => {
    const fetchData = async () => {
      const response = await getSuatChieuByMovie(movieId);
      if (response?.status === 200) {
        setValue(response.data.content);
      } else {
        console.log("Can not Call Api");
      }
    };
    fetchData();
  }, []);
  return (
    <div
      id="lichchieuphim"
      className="flex bg-white text-black rounded-xl w-[822px] ml-[25%] pb-16"
    >
      {value ? (
        <>
          <div className="w-1/3 border-r-[1px] border-solid ">
            <div className=" flex gap-2 mt-6">
              <img
                className="w-[40px] h-[40px] rounded-full mx-1"
                src={value?.rapId.hinhAnh}
                alt={value?.slug}
              />
              <span className="text-base font-normal">
                {value?.rapId.tenRap}
              </span>
            </div>
            <p className="mx-2 my-1">{value?.rapId.diaChi}</p>
          </div>
          <div className="w-2/3 mx-3 my-3 text-lg">
            {value.suatChieus.map((item, index) => (
              <button
                style={{
                  background: "rgb(232 229 229)",
                  color: "#9b9b9b",
                }}
                key={index}
                className="px-4 py-[6px]  text-sm  rounded-md hover:opacity-80  "
              >
                {item.gioChieu}
              </button>
            ))}
          </div>
        </>
      ) : (
        <>
          <p>Loadding...</p>
        </>
      )}
    </div>
  );
}

export default LichChieu;
