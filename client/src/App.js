import {Route, Routes} from 'react-router-dom'

import Profile from './pages/Profile'
import Layout from "./components/Layout"

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
                        <Routes>
                            <Route path="/"
                            element={<Layout />} />
                            <Route index element={<LogComponent /> } />
                            <Route path="/users/:userId"
                            element={<Profile />} />
                        </Routes>
            </ThemeProvider>
        </div>
    );
}

export default App;
