import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Coins from '../assets/coins.svg'

const WalletDialouge = ({ ref }: { ref: React.RefObject<any> }) => {
  const constant = [100, 500, 1000];
  const [addMoney, setAddMoney] = useState(0);
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
          >
            <div className="flex justify-center">
            <img src={Coins} />
            {data}
            </div>
          </button>
        ))}
      </div>
      <div className="flex justify-center">
        <Button
          className="mt-3 rounded-full w-1/2 bg-green-600 hover:bg-green-400"
          type="submit"
          label="Add Money"
          disabled={false}
        />
      </div>
    </div>
  );
};

export default WalletDialouge;
