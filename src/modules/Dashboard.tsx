import { BarChart } from "@mui/x-charts/BarChart";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import React from "react";
import { Company } from "../constants/enums/company.enum";

const Dashboard = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const companyValues = Object.keys(Company);
  return (
    <>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            {companyValues.map((company, index) => {
              return <Tab label={company} key={index} value={index} />;
            })}
          </TabList>
        </Box>
        {companyValues.map((company, index) => {
          return (
            <TabPanel key={index} value={index}>
              {company}
            </TabPanel>
          );
        })}
      </TabContext>
      <BarChart
        series={[
          { data: [35, 44, 24, 34] },
          { data: [51, 6, 49, 30] },
          { data: [15, 25, 30, 50] },
          { data: [60, 50, 15, 25] },
        ]}
        height={290}
        xAxis={[{ data: ["Q1", "Q2", "Q3", "Q4"], scaleType: "band" }]}
        margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
      />
    </>
  );
};

export default Dashboard;
