import React, { useEffect, useState } from "react";
import { HeThongRap } from "../../store/HeThongRap";
import { MdOutlineModeEditOutline, MdDeleteForever } from "react-icons/md";
import Paginate from "../../components/paginate/Paginate";

function TheaterSystem() {
  const { data, getAllHeThongRap } = HeThongRap();
  const [currentItems, setCurrentItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await getAllHeThongRap();
    };
    fetchData();
  }, []);

  const handlePageChange = (items) => {
    setCurrentItems(items);
  };
  return (
    <div className="w-full h-full">
      <div className="mt-8 ml-8 text-2xl font-medium">Movie</div>
      <div className="relative overflow-x-auto sm:rounded-md my-2 mx-8">
        <table
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
          }}
          className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
        >
          <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
            <tr>
              <th scope="col" className="px-4 py-3 text-center">
                Id
              </th>
              <th scope="col" className="px-4 py-3 text-center">
                Mã Hệ Thống
              </th>
              <th scope="col" className="px-4 py-3 text-center">
                Hình Ảnh
              </th>
              <th scope="col" className="px-4 py-3 text-center">
                Tên Hệ Thống
              </th>
              <th scope="col" className="px-4 py-3 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr key={index} className="bg-white border-b  ">
                <td className="px-4 py-4 text-center">{item._id}</td>
                <td className="px-4 py-4 text-center">{item.maHeThongRap}</td>
                <td className="px-4 py-4 text-center">
                  <img
                    className="w-[200px] mx-auto"
                    src={item.logo}
                    alt={item._id}
                  />
                </td>
                <td className="px-4 py-4 text-center">{item.tenHeThongRap}</td>
                <td className="px-4 py-4 flex gap-1 text-center">
                  <span className="font-medium text-blue-600 dark:text-blue-500 hover:underline hover:opacity-60 cursor-pointer">
                    <MdOutlineModeEditOutline className="text-2xl" />
                  </span>
                  <span className="text-red-600 hover:opacity-70 cursor-pointer">
                    <MdDeleteForever className="text-2xl " />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <>
          <Paginate
            data={data}
            itemsPerPage={3}
            onPageChange={handlePageChange}
          />
        </>
      </div>
    </div>
  );
}

export default TheaterSystem;
