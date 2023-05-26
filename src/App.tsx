import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles"
import dark from "./styles/theme/dark";
import { Header } from "./Header"
import { AuthProvider } from "./hooks/auth";

function App() {

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={dark}>
          <AuthProvider>
            <Header />
          </AuthProvider>
      </ThemeProvider>
    </>
  )
}

export default App
