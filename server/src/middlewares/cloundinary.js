import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});
const multerVideoFilter = (req, file, cb) => {
  if (file.mimetype === "video/mp4") {
    cb(null, true);
  } else {
    cb(new Error("Only MP4 videos are allowed!"), false);
  }
};
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "tix",
  },
});

const uploadCloud = multer({ storage, fileFilter: multerVideoFilter });

export default uploadCloud;
