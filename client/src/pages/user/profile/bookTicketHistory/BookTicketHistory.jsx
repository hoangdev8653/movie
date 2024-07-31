import React, { useEffect } from "react";
import { BookTicket } from "../../../../store/BookTicket";
import { formatPrice } from "../../../../utils/forrmatPriceVn";

function BookTicketHistory() {
  const { data, getTicketByUser } = BookTicket();

  useEffect(() => {
    const fetchData = async () => {
      await getTicketByUser();
    };
    fetchData();
  }, []);

  return (
    <div>
      {data && data.length > 0 ? (
        <div className="p-6">
          <div className="block w-full overflow-x-auto">
            <table className="w-full mb-4  border-b-2 border-solid border-w-[1px] border-gray-100 ">
              <thead>
                <tr>
                  <th scope="col">Stt</th>
                  <th scope="col">Tên phim</th>
                  <th scope="col">Ngày đặt</th>
                  <th scope="col">Tên rạp</th>
                  <th scope="col">Tên ghế</th>
                  <th scope="col">Giá vé(VNĐ)</th>
                  <th scope="col">Tổng tiền(VNĐ)</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} className="border-b">
                    <th scope="" className="px-4 py-2">
                      {index + 1}
                    </th>
                    <td className="text-center px-4 py-2">
                      {item.gioChieuId.suatChieuId.movieId.tenPhim}
                    </td>
                    <td className="text-center px-4 py-2">7/5/2024</td>
                    <td className="text-center px-4 py-2">
                      {item.gioChieuId.suatChieuId.rapId.tenRap}
                    </td>
                    <td className="text-center px-4 py-2">
                      {item.danhSachGhe}
                    </td>
                    <td className="text-center px-4 py-2">
                      {formatPrice(parseInt(item.gioChieuId.suatChieuId.giaVe))}
                    </td>
                    <td className="text-center px-4 py-2">
                      {formatPrice(parseInt(item.gioChieuId.suatChieuId.giaVe))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="text-center mt-4">
          <p className="font-semibold text-2xl">Bạn chưa đặt vé nào.</p>
        </div>
      )}
    </div>
  );
}

export default BookTicketHistory;
