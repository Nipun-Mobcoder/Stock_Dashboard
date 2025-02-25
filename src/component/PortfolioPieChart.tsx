import { PieChart } from "@mui/x-charts/PieChart";
import { transformHoldingsToChartData } from "./TransformForPie";
import { PortfolioPieType } from "../constants/types/PortfolioType";

const DonutChart: React.FC<PortfolioPieType> = ({ holdings }) => {
  const data = transformHoldingsToChartData(holdings);
  console.log(holdings, data);
  return (
    <div className="p-5 rounded-lg">
      <h2 className="text-2xl text-[#4C506B]">Your holdings: </h2>
      <div className="h-[350px] w-full flex justify-center items-center">
        <PieChart
          series={[
            {
              data,
              innerRadius: 70,
              outerRadius: 83,
              paddingAngle: 5,
              cornerRadius: 5,
            },
          ]}
          slotProps={{
            legend: {
              position: { vertical: "bottom", horizontal: "middle" },
              direction: "row",
              itemMarkWidth: 10,
              itemMarkHeight: 10,
              labelStyle: { fontSize: 12, fill: "#666" },
            },
          }}
        />
      </div>
    </div>
  );
};

export default DonutChart;
