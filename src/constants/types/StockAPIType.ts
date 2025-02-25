import { lastActivity, StockNews } from "./PortfolioType";
import { StockChartData } from "./StockChartType";

export interface StockAPIType {
  market_cap: string;
  balance: number;
  price: number;
  "7day": {
    profit: boolean;
    value: number;
  };
  "30day": {
    profit: boolean;
    value: number;
  };
  "1year": {
    profit: boolean;
    value: number;
  };
  "graphData": StockChartData;
  "holdings": { [s: string]: number; } | ArrayLike<number>;
  "portfolio": any[];
  week: {
    transactions: number;
  }
  stockNews: StockNews[];
  yesterday: lastActivity;
}
