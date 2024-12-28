import React, { useEffect, useRef, useState } from "react";
import Overlay from "../../../components/Overlay";
import Default_avatar_profile from "../../../assets/Default_avatar_profile.jpg";
import { getLocalStorage } from "../../../utils/localStorage";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { userStore } from "../../../store/user";
import { useNavigate } from "react-router-dom";
import { CgSpinner } from "react-icons/cg";
import ButtonClose from "../../../components/ButtonClose";

function UpdateAvarta({ onClose }) {
  const navigate = useNavigate();

  const { updateAvarta, isLoading } = userStore();
  const user = getLocalStorage("user");

  const fileInputRef = useRef(null);
  const avatarImageRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(
    user?.avarta || Default_avatar_profile
  );

  const [fileChanged, setFileChanged] = useState(false);

  const formik = useFormik({
    initialValues: {
      avarta: null,
    },
    onSubmit: async (values) => {
      if (!fileChanged || !values.avarta) {
        toast.error("Bạn hãy chọn hình ảnh");
        return;
      }
      try {
        const formData = new FormData();
        if (values.avarta) {
          formData.append("avarta", values.avarta);
        }
        const error = await updateAvarta(formData);
        setCurrentImage(URL.createObjectURL(values.avarta));
        if (!error) {
          setTimeout(() => {
            navigate("/");
          }, 3000);
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      formik.setFieldValue("avarta", file);
      const fileUrl = URL.createObjectURL(file);
      avatarImageRef.current.src = fileUrl;
      setCurrentImage(fileUrl);
      setFileChanged(true);
    } else {
      setFileChanged(false);
      toast.error("Bạn hãy thay đổi hình ảnh");
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const overlay = document.getElementById("overlay");
  useEffect(() => {
    if (!overlay) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [overlay]);

  return (
    <div className="relative items-center mx-auto">
      <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded w-[50%] px-4 py-16 text-center relative">
          <p className="text-center mx-auto font-semibold">
            Thay đổi ảnh đại diện
          </p>
          <form onSubmit={formik.handleSubmit}>
            <div className="pb-4 mb-2 justify-center">
              <div className="mt-2 items-center justify-center">
                <input
                  type="file"
                  name="avarta"
                  accept="image/*"
                  onChange={handleFileChange}
                  ref={fileInputRef}
                  style={{ display: "none" }}
                />
                <img
                  ref={avatarImageRef}
                  className="w-20 h-20 object-cover rounded-full mx-auto my-4"
                  src={currentImage}
                  alt="avatar"
                />
                <button
                  type="button"
                  onClick={handleButtonClick}
                  className="rounded-md bg-white px-2.5 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Change
                </button>
              </div>
            </div>
            <div className="flex gap-12 text-center justify-center my-2">
              <button
                onClick={onClose}
                type="button"
                className="bg-red-600 py-2 px-6 rounded text-white font-semibold hover:opacity-70"
              >
                Cancel
              </button>
              <div className="relative">
                <button
                  type="submit"
                  className="bg-green-600 py-2 px-6 rounded text-white font-semibold hover:opacity-70"
                >
                  Save
                </button>
                {isLoading ? (
                  <CgSpinner className="text-lg absolute right-1 top-3 animate-spin" />
                ) : (
                  <></>
                )}
              </div>
            </div>
          </form>
          <ButtonClose
            onClick={onClose}
            className={"absolute top-1 right-1 text-red-600"}
          />
        </div>
      </div>

      <Overlay onClick={onClose} />
    </div>
  );
}

export default UpdateAvarta;
