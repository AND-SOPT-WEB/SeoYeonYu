import { Global, ThemeProvider } from "@emotion/react";
import globalStyle from "./styles/global";
import theme from "./styles/theme";

// pages
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      {/* <LoginPage /> */}
      {/* <SignUpPage /> */}
      <UserPage />
    </ThemeProvider>
  );
}

export default App;
