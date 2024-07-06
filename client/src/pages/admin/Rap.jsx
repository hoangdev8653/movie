import React, { useEffect } from "react";
import { MdOutlineModeEditOutline, MdDeleteForever } from "react-icons/md";
import { rapStore } from "../../store/Rap";

function Rap() {
  const { data, getAllRap } = rapStore();

  useEffect(() => {
    const fetchData = async () => {
      await getAllRap();
    };
    fetchData();
  }, []);
  console.log(data);

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
              <th scope="col" className="px-4 py-3">
                Id
              </th>
              <th scope="col" className="px-4 py-3">
                Tên Rạp
              </th>
              <th scope="col" className="px-4 py-3">
                Hình Ảnh
              </th>
              <th scope="col" className="px-4 py-3 text-center">
                Địa Chỉ
              </th>
              <th scope="col" className="px-4 py-3 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data && data.length > 0 ? (
              <>
                {data.map((item, index) => (
                  <tr key={index} className="bg-white border-b  ">
                    <td className="px-4 py-4">{item._id}</td>
                    <td className="px-4 py-4">{item.tenRap}</td>
                    <td className="px-4 py-4">
                      <img
                        className="w-[238px]"
                        src={item.hinhAnh}
                        alt={item.slug}
                      />
                    </td>
                    <td className="px-4 py-4">{item.diaChi}</td>
                    <td className="px-4 py-4 flex gap-1 ">
                      <span className="font-medium text-blue-600 dark:text-blue-500 hover:underline hover:opacity-60 cursor-pointer">
                        <MdOutlineModeEditOutline className="text-2xl" />
                      </span>
                      <span className="text-red-600 hover:opacity-70 cursor-pointer">
                        <MdDeleteForever className="text-2xl " />
                      </span>
                    </td>
                  </tr>
                ))}
              </>
            ) : (
              <></>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Rap;
