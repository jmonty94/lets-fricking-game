import { Route, Routes } from 'react-router-dom'

import CreateTeam from './pages/CreateTeam';
import Profile from './pages/Profile'
import Layout from "./components/Layout"

import { createTheme, ThemeProvider } from "@mui/material";
import LogComponent from "./components/LogComponent";
import ResponsiveAppBar from "./components/NavBar";
import Home from "./pages/Home";

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


const httpLink = createHttpLink({
    uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('id_token');
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    };
});

const client = new ApolloClient({
    // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});


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
        <ApolloProvider client={client}>
            <ThemeProvider theme={theme}>
                <ResponsiveAppBar />
                <Routes>
                    <Route
                        path="/"
                        element={<Home />}
                    />

                    <Route
                        path="/signinup"
                        element={<LogComponent />}
                    />

                    <Route
                        path="/profile"
                        element={<Profile />}
                    />

                    <Route
                        path="/createTeam"
                        element={<CreateTeam />}
                    />

                    <Route
                        path="/myTeam"
                        element={<Profile />}
                    />
                </Routes>
            </ThemeProvider>
        </ApolloProvider>
    );
}

export default App;
