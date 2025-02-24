import { companyIcons } from "../enums/company.enum";


const StockIcon = ({ company }: { company: string }) => {
  const IconComponent = companyIcons[company];

  return IconComponent ? <IconComponent /> : null;
};

export default StockIcon;
