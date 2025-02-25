import { useNavigate, useSearchParams } from "react-router";
import PaymentSuccess from "../component/PaymentConfirmModal";
import { useEffect, useState } from "react";
import { completePayment } from "../component/api/main";
import Loader from "../component/Loader";
import { useAppDispatch } from "../redux/hooks/hooks";
import { set } from "../redux/features/amount/amountSlice";

interface PaymentDataType {
  id: string;
  updatedAt: string;
  paymentMethod: string;
  amount: number;
}

const PaymentConfirmation = () => {
  const navigate = useNavigate();
  const userLocalItem = localStorage.getItem("user:data");
  if (!userLocalItem) {
    navigate("/sign_in");
    return;
  }
  const userData = JSON.parse(userLocalItem);
  const [searchParams, _setSearchParams] = useSearchParams();
  const paymentid = searchParams.get("paymentid");

  if (!paymentid) {
    navigate("/");
    return;
  }
  const [paymentData, setPaymentData] = useState<PaymentDataType>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (paymentid) {
      const fetchData = async () => {
        try {
          const { data } = await completePayment(paymentid);

          if (data) {
            localStorage.setItem(
              "user:data",
              JSON.stringify({
                ...userData,
                walletAmount: data.data.wallet,
              })
            );
            dispatch(set(data.data.wallet));
            setPaymentData(data.data.paymentInfo);
          }
        } catch (error) {
          console.log(error);
          navigate("/error");
        }
      };
      fetchData();
    }
  }, [paymentid, dispatch]);

  return paymentData ? (
    <div className="w-full h-screen flex justify-center items-center bg-blue-100">
      <PaymentSuccess
        referenceNumber={paymentData.id}
        paymentTime={paymentData.updatedAt}
        paymentMethod={paymentData.paymentMethod}
        amount={`USD ${paymentData.amount / 100}`}
      />
    </div>
  ) : (
    <Loader />
  );
};

export default PaymentConfirmation;
