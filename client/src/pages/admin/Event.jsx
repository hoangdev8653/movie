import React, { useEffect, useState } from "react";
import { MdOutlineModeEditOutline, MdDeleteForever } from "react-icons/md";
import Paginate from "../../components/paginate/Paginate";
import { EventAndSaleStore } from "../../store/EventAndSale";
function Event() {
  const { data, getAllEventAndSale } = EventAndSaleStore();
  const [currentItems, setCurrentItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await getAllEventAndSale();
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
                Tiêu đề
              </th>
              <th scope="col" className="px-4 py-3 text-center">
                Hình Ảnh
              </th>
              <th scope="col" className="px-4 py-3 text-center">
                Thời gian
              </th>
              <th scope="col" className="px-4 py-3 text-center">
                Nội dung
              </th>
              <th scope="col" className="px-4 py-3 text-center">
                Kiểu nội dung
              </th>
              <th scope="col" className="px-4 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems && currentItems.length > 0 ? (
              currentItems.map((item, index) => (
                <tr key={index} className="bg-white border-b  ">
                  <td className="px-4 py-4">{item.tieuDe}</td>
                  <td className="px-4 py-4">
                    <img src={item.hinhAnh} alt={item.slug} />
                  </td>
                  <td className="px-4 py-4">{item.thoiGian}</td>
                  <td className="px-4 py-4">{item.noiDung}</td>
                  <td className="px-4 py-4 uppercase">{item.kieuNoiDung}</td>

                  <td className="px-4 py-4 flex gap-1 my-20">
                    <span className="font-medium text-blue-600 dark:text-blue-500 hover:underline hover:opacity-60 cursor-pointer">
                      <MdOutlineModeEditOutline className="text-2xl" />
                    </span>
                    <span className="text-red-600 hover:opacity-70 cursor-pointer">
                      <MdDeleteForever className="text-2xl " />
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="px-4 py-4 text-center">
                  No movies available
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <Paginate
          data={data}
          itemsPerPage={5}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default Event;
