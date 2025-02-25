export const transformHoldingsToChartData = (holdings: { [s: string]: number; } | ArrayLike<number>) => {
    const color = [
        "#C8B6FF",
        "#E4D9FF",
        "#645DD7",
        "#3D348B",
        "#A6A6A6",
        "#4A4A4A",
      ];
  return Object.entries(holdings).map(([key, value], index) => ({
    id: index,
    label: key,
    value: Number(value),
    color: color[index],
  }));
}