import { StockNews } from "../constants/types/PortfolioType"

const StockNewsComponent:React.FC<{news: StockNews[]}> = ({news}) => {
  return (
    <div className="bg-white rounded-4xl">
        <img src={news[0].image_url} alt="Stock News" className="rounded-4xl" />
        <h4 className="text-xl">{news[0].title}</h4>
        <p className="text-xs text-[#bfbfc2]">{news[0].date.split("2025")[0] + "2025"}</p>
        <p className="text-sm text-[#62667E] pt-1">{news[0].text}</p>
    </div>
  )
}

export default StockNewsComponent