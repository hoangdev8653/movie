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
        <a href="/lich-chieu/">
          <li
            onClick={goLichChieu}
            className="hover:text-red-500 cursor-pointer"
          >
            Lịch chiếu
          </li>
        </a>
        <a href="/he-thong-rap">
          <li onClick={goCumRap} className="hover:text-red-500 cursor-pointer">
            Hệ thống rạp
          </li>
        </a>
        <a href="/news">
          <li onClick={goTinTuc} className="hover:text-red-500 cursor-pointer">
            Tin Tức
          </li>
        </a>
        <a href="/khuyen-mai-su-kien">
          <li onClick={goUngDung} className="hover:text-red-500 cursor-pointer">
            Khuyến mãi/Sự kiện
          </li>
        </a>
      </ul>
    </>
  );
}

export default Menu;
