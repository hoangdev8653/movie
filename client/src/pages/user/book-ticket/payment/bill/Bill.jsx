import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { getLocalStorage } from "../../../../../utils/localStorage";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { BookTicket } from "../../../../../store/BookTicket";

function Bill({ totalPrice, arrayGhe, id }) {
  const { bookTicket } = BookTicket();
  const navigate = useNavigate();
  console.log(arrayGhe);
  console.log(totalPrice);
  console.log(id);
  const token = getLocalStorage("accessToken");

  async function createOrder(data, actions) {
    return actions.order.create({
      intent: "CAPTURE",
      purchase_units: [
        {
          description: "Cool looking table",
          amount: {
            value: totalPrice,
          },
        },
      ],
    });
  }

  async function onApprove(data, actions) {
    const order = await actions.order.capture();
    if (order.status === "COMPLETED") {
      try {
        await bookTicket({ gioChieuId: id, danhSachGhe: arrayGhe });
        setTimeout(() => {
          navigate("/");
        }, 3000);
      } catch (error) {
        console.log("Thất bại: ", error);
        toast.error("Thanh toán Thất bại");
      }
    } else {
      toast.error("Thanh toán Thất bại");
    }
  }

  return (
    <PayPalScriptProvider>
      <PayPalButtons createOrder={createOrder} onApprove={onApprove} />
    </PayPalScriptProvider>
  );
}

export default Bill;
