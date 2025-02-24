import { Navigate, Route, Routes } from "react-router";
import Form from "./modules/Form";
import Dashboard from "./modules/Dashboard";
import Wallet from "./modules/Wallet";
import Layout from "./component/Layout";
import PaymentConfirmation from "./modules/PaymentConfirmation";
import ErrorPage from "./modules/ErrorPage";
import Portfolio from "./modules/Portfolio";

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
            <Layout>
              <Dashboard />
            </Layout>
          </ProtectedRoutes>
        }
      />
      <Route
        path="/wallet"
        element={
          <ProtectedRoutes>
            <Layout>
              <Wallet />
            </Layout>
          </ProtectedRoutes>
        }
      />
      <Route
        path="/completion"
        element={
          <ProtectedRoutes>
            <Layout>
              <PaymentConfirmation />
            </Layout>
          </ProtectedRoutes>
        }
      />
      <Route
        path="/error"
        element={
          <ProtectedRoutes>
            <Layout>
              <ErrorPage />
            </Layout>
          </ProtectedRoutes>
        }
      />
      <Route
        path="/portfolio"
        element={
          <ProtectedRoutes>
            <Layout>
              <Portfolio />
            </Layout>
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
