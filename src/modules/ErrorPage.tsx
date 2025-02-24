import { useNavigate } from "react-router";
import errorImage from "../assets/error.png"

const ErrorPage = () => {
    const navigate = useNavigate();
    return (
      <div className="flex items-center justify-center h-screen w-screen bg-gray-100">
        <div className="flex bg-white shadow-2xl rounded-2xl overflow-hidden max-w-3xl w-full">
          <div className="w-full hidden md:block">
            <img
              src={errorImage}
              alt="Error Illustration"
              className="w-full h-full object-cover"
            />
          </div>
  
          <div className="w-full md:w-2/3 p-10 text-center">
            <h1 className="text-6xl font-bold text-red-500">404</h1>
            <h2 className="text-2xl font-semibold text-gray-700 mt-2">Oops! Something went wrong.</h2>
            <p className="text-gray-500 mt-4">
              The page you're looking for doesn't exist or an error occurred.
            </p>
            <button
              onClick={() => navigate("/")}
              className="mt-6 px-6 py-3 text-white bg-blue-600 rounded-full shadow-md hover:bg-blue-500 transition cursor-pointer"
            >
              Go Back Home
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ErrorPage;
  