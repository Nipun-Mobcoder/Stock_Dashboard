import { Elements } from "@stripe/react-stripe-js";
import { Appearance, loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import CheckoutForm from "./CheckoutForm";
import { addMoney } from "../component/api/main";
import { useSearchParams } from "react-router";

const stripePromise = loadStripe(
  "pk_test_51QtjEiRAfW5KHYKrcj5VAg3EW8FhZ9xpS1FPB8bjcyUr4EQuKwK8rVQaJjWLGbr8rNCvGJ1YpmCF3xkneFN0GA6800EJxUeCiY"
);

const appearance: Appearance = {
  theme: "night",
  labels: "floating",
  variables: {
    colorPrimary: "#ff9900",
    colorText: "#ffffff",
    fontSizeBase: "16px",
    borderRadius: "8px",
    spacingUnit: "5px",
  },
};

const Wallet = () => {
  const [clientSecret, setClientSecret] = useState("");
  const [paymentId, setPaymentId] = useState("");
  const [searchParams, _setSearchParams] = useSearchParams();
  const amount = Number(searchParams.get("amt"));

  useEffect(() => {
    if (amount) {
      const fetch = async () => {
        const { data: val } = await addMoney(amount);
        if (val) {
          console.log(val)
          setClientSecret(val.data.stripeId);
          setPaymentId(val.data.id);
        }
      };
      fetch();
    }
  }, [amount]);
  console.log(clientSecret, amount);

  return (
    clientSecret &&
    amount && (
      <div className="h-screen flex justify-center items-center">
        <Elements
          stripe={stripePromise}
          options={{
            clientSecret,
            appearance,
          }}
        >
          <div className="w-1/2 ">
            <CheckoutForm paymentId={paymentId} />
          </div>
        </Elements>
      </div>
    )
  );
};

export default Wallet;
