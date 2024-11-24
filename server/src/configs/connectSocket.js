import { Server } from "socket.io";

export const connectSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:5173",
      methods: ["GET", "POST"],
      credentials: true,
    },
  });
  let currentSeats = [];
  io.on("connection", (socket) => {
    console.log("Kết nối socket thành công ✅");

    socket.emit("seatsUpdated", currentSeats);

    socket.on("updateSeats", ({ id, arrayGhe }) => {
      currentSeats = arrayGhe;

      io.emit("seatsUpdated", { id, arrayGhe });
      console.log("Mảng Ghế hiện tại: ", arrayGhe);
    });

    socket.on("disconnect", () => {
      console.log("User disconnected");
    });
  });
};
