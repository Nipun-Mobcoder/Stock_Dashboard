import Weekly from "../assets/weekly.svg";

const WeekTransaction: React.FC<{ transactions: number }> = ({
  transactions,
}) => {
  return (
    <div className="bg-white rounded-4xl px-10 py-4 flex w-full">
      <div className="w-[100%]">
        <img src={Weekly} width={50} height={50} />
        <div className="pt-4">
          <h5 className="text-lg text-[#C3C5CE]">Total Transactions</h5>
          <h5 className="text-lg text-[#C3C5CE]">This week</h5>
        </div>
      </div>
      <div>
        <h4 className="text-xl">{transactions}</h4>
      </div>
    </div>
  );
};

export default WeekTransaction;
