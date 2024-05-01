function Menu() {
  function goLichChieu() {
    scroller.scrollTo("lichchieu", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }
  function goCumRap() {
    scroller.scrollTo("cumrap", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }
  function goTinTuc() {
    scroller.scrollTo("tintuc", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }
  function goUngDung() {
    scroller.scrollTo("ungdung", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }

  return (
    <>
      <ul className="flex gap-4 font-medium">
        <li onClick={goLichChieu} className="hover:text-red-500 cursor-pointer">
          Lịch chiếu
        </li>
        <li onClick={goCumRap} className="hover:text-red-500 cursor-pointer">
          Hệ thống rạp
        </li>
        <li onClick={goTinTuc} className="hover:text-red-500 cursor-pointer">
          Tin Tức
        </li>
        <li onClick={goUngDung} className="hover:text-red-500 cursor-pointer">
          Khuyến mãi/Sự kiện
        </li>
      </ul>
    </>
  );
}

export default Menu;
