import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME || "dp1k689ar",
  api_key: process.env.CLOUDINARY_KEY || "255648665943757",
  api_secret: process.env.CLOUDINARY_SECRET || "pOiC7UYKTmFGB6-d4ER9whh-gQw",
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
