import { createBrowserRouter } from "react-router-dom";

import RootLayout from "@/layouts/root-layout";

import LoginPage from "@/pages/auth/login";

import ErrorPage from "@/pages/error/error-page";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        // element: <AuthLayout />,
        children: [
          {
            path: "/login",
            element: <LoginPage />,
          },
        ],
      },

      // {
      //   element: (
      //     <ProtectedRoute>
      //       <DashboardLayout />
      //     </ProtectedRoute>
      //   ),
      //   children: [
      //     {
      //       path: "/",
      //       element: <DashboardPage />,
      //     },
      //   ],
      // },
    ],
  },
]);
