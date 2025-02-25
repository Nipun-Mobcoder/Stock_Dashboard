import { lastActivity } from "../constants/types/PortfolioType";
import NoActivity from "../assets/noActivity.svg";

const LatestSellActivity: React.FC<{ activity: lastActivity }> = ({
  activity,
}) => {
  if (activity.sold.length <= 0)
    return (
      <div className="rounded-4xl w-full h-full bg-white p-4 flex justify-center items-center">
        <div>
          <img src={NoActivity} height={40} width={40} />
        </div>
        <div className="px-2 text-center">
          <h4 className="text-2xl">Looks like you've not sold anything yet.</h4>
          <p className="text-sm">
            Browse through the stocks and sell them now without any additional
            cost.
          </p>
        </div>
      </div>
    );
  const [key] = Object.entries(activity.sold[0])[0];
  return (
    <div className="rounded-4xl bg-white p-4">
      <h3 className="text-xl">Sold {key}</h3>
      <p className="text-sm">Yesterday</p>
    </div>
  );
};

export default LatestSellActivity;
