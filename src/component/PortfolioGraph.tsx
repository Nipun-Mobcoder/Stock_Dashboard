import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { LineChart } from "@mui/x-charts";
import TabContext from "@mui/lab/TabContext";
import { Box, Tab } from "@mui/material";
import TabList from "@mui/lab/TabList";
import React, { useState } from "react";
import { reports } from "../constants/maps/annualReport";
import { PortfolioGraphType } from "../constants/types/PortfolioType";

const PortfolioGraph: React.FC<PortfolioGraphType> = ({
  series,
  xAxisLabels,
  balance,
}) => {
  const [value, setValue] = useState(0);
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div className="px-3 rounded-4xl">
      <div className="py-3">
        <p className="text-sm text-[#62667E]">
          Your Balance{" "}
          <span className="py-2">
            <VisibilityOutlinedIcon />
          </span>
        </p>
        <h1 className="text-4xl text-[#4C506B]">${balance / 100}</h1>
      </div>
      <div className="p-4">
        <LineChart
          slotProps={{
            legend: {
              hidden: true,
            },
          }}
          series={series}
          height={240}
          xAxis={[
            {
              data: xAxisLabels,
              scaleType: "band",
              disableLine: true,
              disableTicks: true,
            },
          ]}
          yAxis={[
            {
              disableLine: true,
              disableTicks: true,
            },
          ]}
          margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
        />
      </div>
      <hr className="text-[#F8F9FD]" />
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            {reports.map((report, index) => {
              return <Tab label={report} key={index} value={index} />;
            })}
          </TabList>
        </Box>
      </TabContext>
    </div>
  );
};

export default PortfolioGraph;
