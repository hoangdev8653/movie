import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING_PRODUCTION);
    console.log("Kết nối MongoDB thành công ✅ ");
  } catch (error) {
    console.error(" Lỗi kết nối MongoDB ❌: " + err);
  }
};
