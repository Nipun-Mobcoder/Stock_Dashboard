import { useState } from "react";
import Input from "./Input";
import Coins from "../assets/coins.svg";
import { useNavigate } from "react-router";

const WalletDialouge = ({
  ref,
  setModal,
}: {
  ref: React.RefObject<any>;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const constant = [100, 500, 1000];
  const [addMoney, setAddMoney] = useState(0);
  const navigator = useNavigate();

  const navigate = (amount: string) => {
    setModal(false);
    navigator(`/wallet?amt=${amount}`);
  };
  return (
    <div
      ref={ref}
      className="bg-white absolute z-20 right-20 w-[550px] h-[250px] rounded-xl gap-3 px-3 py-4 "
    >
      <h3 className="text-2xl font-semibold">Add money</h3>

      <div className="flex justify-center w-full px-14">
        <Input
          type="number"
          placeholder="Add money"
          className="mt-5 w-full"
          value={addMoney}
          onChange={(e: { target: { value: number } }) =>
            setAddMoney(e.target.value)
          }
        />
      </div>
      <div className="mt-5 flex justify-center w-full gap-3">
        {constant.map((data, id) => (
          <button
            className="bg-orange-400 text-white font-semibold rounded-full shadow-2xl px-3 py-2 min-w-25 cursor-pointer hover:bg-yellow-500"
            key={id}
            onClick={() => navigate(data.toString())}
          >
            <div className="flex justify-center">
              <img src={Coins} />
              {data}
            </div>
          </button>
        ))}
      </div>
      <div className="flex justify-center">
        <button
          className={`text-white bg-green-600 hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 cursor-pointer text-center mt-3 w-1/2 `}
          onClick={() => navigate(addMoney.toString())}
          disabled={addMoney === 0}
        >
          Add Money
        </button>
      </div>
    </div>
  );
};

export default WalletDialouge;
