export interface StockChartData {
    xAxisLabels: string[];
    series: {
      data: number[];
      label: string;
    }[];
  };