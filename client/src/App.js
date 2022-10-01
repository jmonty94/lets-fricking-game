

import { createTheme, ThemeProvider } from "@mui/material";
import LogComponent from "./components/LogComponent";
import ResponsiveAppBar from "./components/NavBar";


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
                        <LogComponent />
            </ThemeProvider>
        </div>
    );
}

export default App;
