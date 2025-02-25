import { StockChartData } from "./StockChartType";

export interface PortfolioGraphType extends StockChartData {
  balance: number;
}

export interface PortfolioPieType {
  holdings: { [s: string]: number } | ArrayLike<number>;
}

export interface StockNews {
  news_url: string;
  image_url: string;
  title: string;
  text: string;
  source_name: string;
  date: string;
  sentiment: string;
  type: string;
  tickers: string[];
}

export interface lastActivity {
    bought: [{[s: string]: number}],
    sold: [{[s: string]: number}]
}