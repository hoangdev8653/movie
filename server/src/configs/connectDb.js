import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect(
      process.env.CONNECTION_STRING || "mongodb://127.0.0.1:27017/tix"
    );
    console.log("Kết nối MongoDB thành công ✅ ");
  } catch (error) {
    console.error(" Lỗi kết nối MongoDB ❌: " + err);
  }
};
