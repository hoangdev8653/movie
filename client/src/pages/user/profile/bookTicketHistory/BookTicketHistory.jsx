import React from "react";
import styles from "./BookTicketHistory.module.scss";
function BookTicketHistory(props) {
  const userTicket = props?.userTicket;

  return (
    <div>
      {userTicket ? (
        <div className="p-6">
          <div className="block w-full overflow-x-auto">
            <table className="w-full mb-4 bg-gray-800 border-b-2 border-solid border-w-[1px] border-gray-100 ">
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
                <tr className="tr">
                  <th scope="row">1</th>
                  <td>{userTicket.tenPhim}</td>
                  <td>{userTicket.ngayDat}</td>
                  <td>
                    {userTicket.diaChi}, {userTicket.tenRap}
                  </td>
                  <td>{userTicket.tenGhe}</td>
                  <td>{userTicket.giaVe}</td>
                  <td>{userTicket.tongTien}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <table className="table table-borderd table-striped">
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
        </table>
      )}
    </div>
  );
}

export default BookTicketHistory;
