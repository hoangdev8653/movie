import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  allowedFormats: ["jpg", "png"],
  params: async (req, file) => {
    return {
      folder: "tix",
      resource_type: "auto",
      allowedFormats: ["jpeg", "png", "jpg", "mp3", "mp4"],
    };
  },
});

const uploadCloud = multer({ storage });

export default uploadCloud;
