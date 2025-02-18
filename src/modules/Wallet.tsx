
import { Elements } from "@stripe/react-stripe-js";
import { Appearance, loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import CheckoutForm from "./CheckoutForm";
import axios from 'axios';

const stripePromise = loadStripe('pk_test_51QtjEiRAfW5KHYKrcj5VAg3EW8FhZ9xpS1FPB8bjcyUr4EQuKwK8rVQaJjWLGbr8rNCvGJ1YpmCF3xkneFN0GA6800EJxUeCiY');

const appearance: Appearance = {
    theme: 'night',
    labels: 'floating',
    variables: {
      colorPrimary: '#ff9900',
      colorText: '#ffffff',
      fontSizeBase: '16px',
      borderRadius: '8px',
      spacingUnit: '5px',
    },
};

const Wallet = ({ amount }: {amount: number}) => {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    const fetch = async () => {
        const val = await axios.post("/create-payment-intent", {amount});
        if(val) {
            setClientSecret(val.data.clientSecret);
        }
    }
    fetch();
  }, [amount]);

  const options = {
    clientSecret,
    appearance,
  };

  return(
    clientSecret &&
      <Elements stripe={stripePromise} options={options}>
          <CheckoutForm />
      </Elements>
  );
}

export default Wallet;