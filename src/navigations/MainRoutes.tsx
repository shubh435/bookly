import React, { Suspense, lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Loader from "../components/Loader";
import Layout from "../components/Layout";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

// Lazy load the Dashboard component
const Dashboard = lazy(() => import("../screens/Dashboard"));
const Login = lazy(() => import("../screens/Login")); // Assuming you have a Login screen

// PrivateRoute component to handle authentication
const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { token } = useSelector((store: RootState) => store.Auth);
  return token ? <>{children}</> : <Navigate to="/login" />;
};

// PublicRoute component to handle unauthenticated routes
const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const { token } = useSelector((store: RootState) => store.Auth);
  return !token ? <>{children}</> : <Navigate to="/" />;
};

const MainRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Route>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

export default MainRoutes;
