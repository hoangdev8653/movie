import React, { useEffect } from "react";
import { MdOutlineModeEditOutline, MdDeleteForever } from "react-icons/md";
import { userStore } from "../../store/User";
import { Default_avatar_profile } from "../../image";

function User() {
  const { data, getAllUser } = userStore();

  useEffect(() => {
    const fetchData = async () => {
      await getAllUser();
    };
    fetchData();
  }, []);

  return (
    <div className="w-full h-full">
      <div className="mt-8 ml-8 text-2xl font-medium">User</div>
      <div className="relative overflow-x-auto sm:rounded-md my-2 mx-8">
        <table
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
          }}
          className="w-full text-sm text-left rtl:text-right "
        >
          <thead className="text-xs  uppercase bg-gray-50  ">
            <tr>
              <th scope="col" className="px-4 py-3 text-center">
                Tên
              </th>
              <th scope="col" className="px-4 py-3 text-center">
                Hình Ảnh
              </th>

              <th scope="col" className="px-4 py-3 text-center">
                Email
              </th>
              <th scope="col" className="px-4 py-3 text-center">
                Số Điện Thoại
              </th>
              <th scope="col" className="px-4 py-3 text-center">
                Role
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
                  <tr key={index} className="bg-white border-b ">
                    <td className="px-4 py-4 text-center">{item.username}</td>
                    <td className="px-4 py-4 text-center">
                      <img
                        className="w-[100px] mx-auto"
                        src={item.avarta || Default_avatar_profile}
                        alt={item._id}
                      />
                    </td>
                    <td className="px-4 py-4 text-center">{item.email}</td>
                    <td className="px-4 py-4 text-center">{item.phone}</td>
                    <td className="px-4 text-center">{item.role}</td>
                    <td className="px-4  text-center">{item.address}</td>
                    <td className="px-4 py-4 flex gap-1 justify-center my-20">
                      <span className="font-medium text-blue-600 dark:text-blue-500 hover:underline hover:opacity-60 cursor-pointer ">
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

export default User;
