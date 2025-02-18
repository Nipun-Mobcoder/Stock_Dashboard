import { useState } from "react";
const WalletDialouge = () => {
  const [money, addMoney] = useState("");
  const constant = [100, 500, 1000];
  return (
    <div className="absolute w-full bg-black h-full">
        <h3 className="text-2xl font-semibold">Add money</h3>
      <input type="text" placeholder="Add money" />
      <div>
        {constant.map((data, id) => (
          <button className="bg-yellow-500 text-white font-semibold rounded-full shadow-2xl px-3 py-2" key={id}>{data}</button>
        ))}
      </div>
    </div>
  );
};

export default WalletDialouge;
