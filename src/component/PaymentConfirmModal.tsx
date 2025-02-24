import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { useNavigate } from "react-router";

interface PaymentDetails {
  referenceNumber: string;
  paymentTime: string;
  paymentMethod: string;
  amount: string;
}

const PaymentSuccess: React.FC<PaymentDetails> = ({
  referenceNumber,
  paymentTime,
  paymentMethod,
  amount,
}) => {
  const navigate = useNavigate();
  const userLocalItem = localStorage.getItem("user:data");
  if (!userLocalItem) {
    navigate("/sign_in");
    return;
  }
  const userData = JSON.parse(userLocalItem);

  return (
    <div className="bg-gray-900 text-white rounded-4xl shadow-xl p-10 relative w-96 mb-20">
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-green-500 p-2 rounded-full">
        <CheckCircleIcon className="text-white text-3xl" />
      </div>

      <div className="text-center mt-6">
        <h2 className="text-xl font-semibold">Payment Success!</h2>
        <p className="text-gray-400 text-sm">
          Your payment has been successfully done.
        </p>
      </div>

      <div className="text-center mt-4">
        <p className="text-gray-400 text-sm">Total Payment</p>
        <h2 className="text-2xl font-bold">{amount}</h2>
      </div>

      <div className="bg-gray-800 p-4 rounded-lg mt-4 space-y-3 text-sm">
        <div className="flex justify-between border-b border-gray-700 pb-2">
          <span className="text-gray-400">Ref Number</span>
          <span>{referenceNumber}</span>
        </div>
        <div className="flex justify-between border-b border-gray-700 pb-2">
          <span className="text-gray-400">Payment Time</span>
          <span>{paymentTime}</span>
        </div>
        <div className="flex justify-between border-b border-gray-700 pb-2">
          <span className="text-gray-400">Payment Method</span>
          <span className="font-semibold">{paymentMethod}</span>
        </div>
        <div className="flex justify-between border-b border-gray-700 pb-2">
          <span className="text-gray-400">Sender Name</span>
          <span className="font-semibold">{userData.userName.firstName} {userData.userName.lastName}</span>
        </div>
        <div className="flex justify-between border-b border-gray-700 pb-2">
        <span className="text-gray-400">Sender Email</span>
        <span className="font-semibold">{userData.email}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Sender Number</span>
          <span className="font-semibold">{userData.phoneNumber}</span>
        </div>
      </div>

      <button className="flex items-center justify-center w-full mt-4 text-gray-300 hover:text-white cursor-pointer">
        <PictureAsPdfIcon className="mr-2" />
        Get PDF Receipt
      </button>
    </div>
  );
};

export default PaymentSuccess;
