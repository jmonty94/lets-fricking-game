import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Profile from "./pages/Profile"
import Signinup from "./pages/Signinup";
import Header from './components/Header';

const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
});

function App() {
    return (
        <ApolloProvider client={client}>
            <Router>
                <div><Header /></div>
                <div>
                    <Routes>
                    <Route
                path="/"
                element={<Home />} 
              />
                    <Route
                path="/"
                element={<Profile />}
              />
              </Routes>
              <Signinup />
                </div>
            </Router>
        </ApolloProvider >
    );
}

export default App;
