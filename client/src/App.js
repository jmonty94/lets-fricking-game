import { createTheme, ThemeProvider } from "@mui/material";
import LogComponent from "./components/LogComponent";
import ResponsiveAppBar from "./components/NavBar";
import Home from "./pages/Home";


function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#002984',
      },
      secondary: {
        main: '#ff7961'
      }
    }
  })
  return (
    <div>
      <ThemeProvider theme={theme}>
        <ResponsiveAppBar />
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
