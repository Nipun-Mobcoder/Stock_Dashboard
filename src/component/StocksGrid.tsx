import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import {
  GridType,
  PortfolioItem,
  PortfolioRow,
} from "../constants/types/PortfolioGridType";
import { Typography } from "@mui/material";

const transformPortfolioForDataGrid = (
  portfolio: PortfolioItem[]
): PortfolioRow[] => {
  return portfolio.map((item) => {
    const [stock, details] = Object.entries(item)[0];

    return {
      id: stock,
      stock,
      marketCap: details.market_cap,
      balance: details.balance,
      price: `$${details.price.toFixed(2)}`,
      "7day": { profit: details["7day"].profit, value: details["7day"].value },
      "30day": {
        profit: details["30day"].profit,
        value: details["30day"].value,
      },
      "1year": {
        profit: details["1year"].profit,
        value: details["1year"].value,
      },
    };
  });
};

const renderProfitCell = (params: any) => {
  const { profit, value } = params.value;
  return (
    <Typography sx={{ color: profit ? "green" : "red", fontWeight: "bold" }}>
      {profit ? "↑" : "↓"} {value}%
    </Typography>
  );
};

const profitSortComparator = (a: { value: number }, b: { value: number }) => {
  return a.value - b.value;
};

const StocksGrid: React.FC<GridType> = ({ portfolio }) => {
  const rows = transformPortfolioForDataGrid(portfolio);
  const columns: GridColDef[] = [
    { field: "stock", headerName: "Stock", flex: 1 },
    { field: "marketCap", headerName: "Market Cap", flex: 1 },
    { field: "balance", headerName: "Balance", type: "number", flex: 0.5 },
    { field: "price", headerName: "Price", flex: 0.8 },
    {
      field: "7day",
      headerName: "7-Day",
      flex: 0.8,
      renderCell: renderProfitCell,
      sortComparator: profitSortComparator,
    },
    {
      field: "30day",
      headerName: "30-Day",
      flex: 0.8,
      renderCell: renderProfitCell,
      sortComparator: profitSortComparator,
    },
    {
      field: "1year",
      headerName: "1-Year",
      flex: 0.8,
      renderCell: renderProfitCell,
      sortComparator: profitSortComparator,
    },
  ];

  return (
    <Box sx={{ height: 400, width: "100%", borderRadius: "100%" }}>
      <DataGrid rows={rows} columns={columns} disableRowSelectionOnClick />
    </Box>
  );
};

export default StocksGrid;
