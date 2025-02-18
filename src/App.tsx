import { Navigate, Route, Routes } from "react-router";
import Form from "./modules/Form";
import Home from "./modules/Home";
import axios from "axios";
import Wallet from "./modules/Wallet";

axios.defaults.baseURL = `http://localhost:8000`;

const ProtectedRoutes = ({ children }: React.PropsWithChildren) => {
  const isLoggedIn = localStorage.getItem("user:token") !== null;

  if (!isLoggedIn && window.location.pathname === "/")
    return <Navigate to="/sign_in" />;
  else if (
    isLoggedIn &&
    ["/sign_in", "/sign_up"].includes(window.location.pathname)
  )
    return <Navigate to="/" />;

  return children;
};

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoutes>
            <Home />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/wallet"
        element={
          <ProtectedRoutes>
            <Wallet amount={5} />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/sign_in"
        element={
          <ProtectedRoutes>
            <div className="bg-[#e1edff] h-screen flex justify-center items-center">
              <Form isSignInPage={true} />
            </div>
          </ProtectedRoutes>
        }
      />
      <Route
        path="/sign_up"
        element={
          <ProtectedRoutes>
            <div className="bg-[#e1edff] h-screen flex justify-center items-center">
              <Form isSignInPage={false} />
            </div>
          </ProtectedRoutes>
        }
      />
    </Routes>
  );
}

export default App;
