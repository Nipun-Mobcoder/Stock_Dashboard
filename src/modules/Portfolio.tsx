import { useEffect, useState } from "react";
import { portfolioInfo } from "../component/api/main";
import Loader from "../component/Loader";
import PortfolioGraph from "../component/PortfolioGraph";
import { StockAPIType } from "../constants/types/StockAPIType";
import PortfolioPieChart from "../component/PortfolioPieChart";
import StocksGrid from "../component/StocksGrid";
import WeekTransaction from "../component/WeekTransaction";
import StockNewsComponent from "../component/StockNews";
import LatestBuyActivity from "../component/latestBuyActivity";
import LatestSellActivity from "../component/latestSellActivity";

const Portfolio = () => {
  const [userInfo, setUserInfo] = useState<StockAPIType>();

  useEffect(() => {
    const getInfo = async () => {
      const { data } = await portfolioInfo();
      console.log(data);
      if (data) {
        setUserInfo(data);
      }
    };

    getInfo();
  }, []);

  return userInfo ? (
    <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 p-4 min-h-screen bg-[#F8F9FD]">
  {/* Left Section */}
  <div className="sm:col-span-8 grid grid-rows-12 gap-2 bg-[#F8F9FD] p-4">
    {/* Portfolio Graph & Pie Chart */}
    <div className="row-span-6 grid grid-cols-1 md:grid-cols-12 gap-2">
      <div className="md:col-span-8 bg-white min-h-[300px]">
        <PortfolioGraph
          series={userInfo.graphData.series}
          xAxisLabels={userInfo.graphData.xAxisLabels}
          balance={userInfo.balance}
        />
      </div>
      <div className="md:col-span-4 bg-white min-h-[300px]">
        <PortfolioPieChart holdings={userInfo.holdings} />
      </div>
    </div>
    {/* Stocks Grid */}
    <div className="row-span-6 bg-white min-h-[300px]">
      <StocksGrid portfolio={userInfo.portfolio} />
    </div>
  </div>

  {/* Right Section */}
  <div className="sm:col-span-4 grid grid-rows-12 gap-2 bg-[#F8F9FD] p-4">
    <div className="row-span-2 bg-white p-2">
      <WeekTransaction transactions={userInfo.week.transactions} />
    </div>
    <div className="row-span-2 bg-white p-2">
      <LatestBuyActivity activity={userInfo.yesterday} />
    </div>
    <div className="row-span-2 bg-white p-2">
      <LatestSellActivity activity={userInfo.yesterday} />
    </div>
    <div className="row-span-7 bg-white p-2">
      <StockNewsComponent news={userInfo.stockNews} />
    </div>
  </div>
</div>

  ) : (
    <Loader />
  );
};

export default Portfolio;
