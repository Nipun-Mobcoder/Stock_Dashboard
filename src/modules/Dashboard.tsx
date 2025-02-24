// import { BarChart } from "@mui/x-charts/BarChart";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import React, { useEffect, useState } from "react";
import { Company } from "../constants/enums/company.enum";
import { LineChart } from "@mui/x-charts";
import { fetchStockData } from "../component/api/main";
import { Alert, CircularProgress, Snackbar } from "@mui/material";
import StockIcon from "../constants/icons/CompanyIcons";
import { useAppDispatch } from "../redux/hooks/hooks";
import { useNavigate } from "react-router";
import { set } from "../redux/features/amount/amountSlice";

type StockChartData = {
  xAxisLabels: string[];
  series: {
    data: number[];
    label: string;
  }[];
};

const Dashboard = () => {
  const navigate = useNavigate();
  const userLocalItem = localStorage.getItem("user:data");
  if (!userLocalItem) {
    navigate("/sign_in");
    return;
  }
  const userData = JSON.parse(userLocalItem);

  const [value, setValue] = useState(0);
  const [companyName, setCompanyName] = useState("APPLE");
  const [transformedData, setTransformedData] = useState<StockChartData>();
  const [loading, setLoading] = useState<Boolean>(true);
  const [open, setOpen] = useState(false);
  
  const dispatch = useAppDispatch();
  dispatch(set(userData.walletAmount));

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    const selectedCompany = Object.keys(Company)[newValue];
    setCompanyName(`${selectedCompany}`);
  };
  const companyValues = Object.keys(Company);

  useEffect(() => {
    if (companyName) {
      const fetchData = async () => {
        try {
          setLoading(true);
          const { data } = await fetchStockData(companyName);
          setTransformedData(data.data);
        } catch (error) {
          console.log(error);
          setLoading(false);
          setOpen(true);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [companyName]);

  return (
    <>
      {!loading ? (
        <div className="mt-10 h-full w-full flex justify-center">
          <div className="w-300 border border-black ">
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  {companyValues.map((company, index) => {
                    return <Tab label={company} key={index} value={index} />;
                  })}
                </TabList>
              </Box>
              {companyValues.map((company, index) => {
                return (
                  <TabPanel key={index} value={index}>
                    <div className="flex justify-center text-xl">
                      {company}
                      <StockIcon company={company} />
                    </div>
                    {transformedData && (
                      <LineChart
                        slotProps={{
                          legend: {
                            hidden: true,
                          },
                        }}
                        series={transformedData.series}
                        height={290}
                        xAxis={[
                          {
                            data: transformedData.xAxisLabels,
                            scaleType: "band",
                          },
                        ]}
                        margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                      />
                    )}
                  </TabPanel>
                );
              })}
            </TabContext>
          </div>
        </div>
      ) : (
        <CircularProgress className="h-full w-full flex justify-center items-center"></CircularProgress>
      )}
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Looks like something went wrong.
        </Alert>
      </Snackbar>
    </>
  );
};

export default Dashboard;
