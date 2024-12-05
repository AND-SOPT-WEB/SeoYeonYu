import { Global, ThemeProvider } from "@emotion/react";
import globalStyle from "./styles/global";
import theme from "./styles/theme";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import UserPage from "./pages/UserPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/mypage",
    element: <UserPage />,
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
