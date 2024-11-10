import { Global, ThemeProvider } from "@emotion/react";
import globalStyle from "./styles/global";
import theme from "./styles/theme";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      <LoginPage />
    </ThemeProvider>
  );
}

export default App;
