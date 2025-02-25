import { lastActivity } from "../constants/types/PortfolioType";
import NoActivity from "../assets/noActivity.svg";
import Buy from "../assets/buy.svg";

const LatestBuyActivity: React.FC<{ activity: lastActivity }> = ({
  activity,
}) => {
  if (activity.bought.length <= 0)
    return (
      <div className="rounded-4xl w-full h-full bg-white p-4 flex justify-center items-center">
        <div>
          <img src={NoActivity} height={40} width={40} />
        </div>
        <div className="px-2 text-center">
          <h4 className="text-2xl">
            Looks like you've not bought anything yet.
          </h4>
          <p className="text-sm">
            Browse through the stocks and buy them now without any additional
            cost.
          </p>
        </div>
      </div>
    );
  const [key, value] = Object.entries(activity.bought[0])[0];
  console.log(activity.bought[0]);
  return (
    <div>
      <div className="rounded-4xl bg-white p-4 flex">
        <div className="w-[100%]">
          <h3 className="text-xl">Bought {key}</h3>
          <p className="text-sm">Yesterday</p>
        </div>
        <div>
          <h5 className="text-lg">{value}</h5>
        </div>
      </div>
      <img src={Buy} height={80} width={80} className="ml-[45%] " />
    </div>
  );
};

export default LatestBuyActivity;
