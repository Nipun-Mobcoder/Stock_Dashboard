import AppleIcon from "@mui/icons-material/Apple";
import MicrosoftIcon from '@mui/icons-material/Microsoft';
import GoogleIcon from "@mui/icons-material/Google";
import AmazonIcon from "@mui/icons-material/ShoppingCart";
import TeslaIcon from "@mui/icons-material/ElectricCar";
import FacebookIcon from "@mui/icons-material/Facebook";
import MovieIcon from "@mui/icons-material/Movie";
import NvidiaIcon from "@mui/icons-material/Memory";
import BusinessIcon from "@mui/icons-material/Business";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import CreditCardIcon from "@mui/icons-material/CreditCard";

export enum Company {
  APPLE = 'AAPL',
  MICROSOFT = 'MSFT',
  GOOGLE = 'GOOGL',
  AMAZON = 'AMZN',
  TESLA = 'TSLA',
  META = 'META',
  NETFLIX = 'NFLX',
  NVIDIA = 'NVDA',
  HATHAWAY = 'BRK.B',
  JNJ = 'JNJ',
  VISA = 'V',
}

export const companyIcons = {
  ["APPLE"]: AppleIcon,
  ["MICROSOFT"]: MicrosoftIcon,
  ["GOOGLE"]: GoogleIcon,
  ["AMAZON"]: AmazonIcon,
  ["TESLA"]: TeslaIcon,
  ["META"]: FacebookIcon,
  ["NETFLIX"]: MovieIcon,
  ["NVIDIA"]: NvidiaIcon,
  ["HATHAWAY"]: BusinessIcon,
  ["JNJ"]: HealthAndSafetyIcon,
  ["VISA"]: CreditCardIcon,
};
