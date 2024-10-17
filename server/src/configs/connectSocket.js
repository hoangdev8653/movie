import { Server } from "socket.io";

export const connectSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:5173", // URL của React client
      methods: ["GET", "POST"], // Các phương thức HTTP được phép
      credentials: true, // Nếu bạn sử dụng cookies với socket
    },
  });
  let currentSeats = [];
  io.on("connection", (socket) => {
    console.log("Kết nối socket thành công ✅");

    socket.emit("seatsUpdated", currentSeats);

    // Lắng nghe sự kiện 'updateSeats' từ client
    socket.on("updateSeats", ({ soGhe, arrayGhe }) => {
      currentSeats = arrayGhe; // Cập nhật trạng thái ghế toàn cục

      // Phát lại sự kiện 'seatsUpdated' tới tất cả các client khác
      io.emit("seatsUpdated", currentSeats);
      console.log("soGhe: ", soGhe);
      console.log("ghế hiện tại: ", arrayGhe);
    });

    // Ngắt kết nối
    socket.on("disconnect", () => {
      console.log("User disconnected");
    });
  });
};
