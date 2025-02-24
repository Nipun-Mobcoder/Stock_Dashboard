import {
  PaymentElement,
  LinkAuthenticationElement,
} from "@stripe/react-stripe-js";
import { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router";

const CheckoutForm: React.FC<{ paymentId: string }> = ({ paymentId }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  console.log(stripe);

  const navigate = useNavigate();
  const userLocalItem = localStorage.getItem("user:data");
  if (!userLocalItem) {
    navigate("/sign_in");
    return;
  }
  const userData = JSON.parse(userLocalItem);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/completion?paymentid=${paymentId}`,
      },
    });
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message ?? "");
    } else {
      setMessage("An unexpected error occured.");
    }

    setIsLoading(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <LinkAuthenticationElement
        id="link-authentication-element"
        options={{ defaultValues: { email: userData.email, } }}
      />
      <PaymentElement id="payment-element" />
      <div className="flex justify-center">
        <button
          disabled={isLoading || !stripe || !elements}
          id="submit"
          className="text-white bg-green-600 hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 cursor-pointer text-center mt-3 w-1/2 flex justify-center"
        >
          <span id="button-text">
            {isLoading ? (
              <div className="spinner" id="spinner"></div>
            ) : (
              "Pay now"
            )}
          </span>
        </button>
      </div>
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}

export default CheckoutForm;