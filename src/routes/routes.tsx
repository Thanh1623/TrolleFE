import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/layouts/root-layout";
import LoginPage from "@/pages/auth/login";
import ErrorPage from "@/pages/error/error-page";
import { ROUTES } from "./route-constants";
import { RegisterPage } from "@/pages/auth/register";
import AuthLayout from "@/layouts/auth-layout";
import ProtectedRoute from "./protected-route";
import HomeLayout from "@/layouts/home-layout";
import HomePage from "@/pages/HomePage";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          {
            path: ROUTES.LOGIN,
            element: <LoginPage />,
          },
          {
            path: ROUTES.REGISTER,
            element: <RegisterPage />,
          },
        ],
      },

      {
        element: (
          <ProtectedRoute>
            <HomeLayout />
          </ProtectedRoute>
        ),
        children: [
          {
            path: "/",
            element: <HomePage />,
          },
        ],
      },
    ],
  },
]);
