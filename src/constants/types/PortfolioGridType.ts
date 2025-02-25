export interface ProfitData {
  profit: boolean;
  value: number;
}

export interface StockDetails {
  market_cap: string;
  balance: number;
  price: number;
  "7day": ProfitData;
  "30day": ProfitData;
  "1year": ProfitData;
}

export interface PortfolioItem {
  [key: string]: StockDetails;
}

export interface PortfolioRow {
  id: string;
  stock: string;
  marketCap: string;
  balance: number;
  price: string;
  "7day": {profit: boolean, value: number};
  "30day": {profit: boolean, value: number};
  "1year": {profit: boolean, value: number};
}

export interface GridType {
    portfolio: PortfolioItem[]
}