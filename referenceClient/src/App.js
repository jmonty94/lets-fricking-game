import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Header from './components/Header';
import CreateTeam from './pages/CreateTeam';

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
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>

      <Router>
        <div>

          {/* header */}
          <Header />

          <div>
            <Routes>
              {/* landing page route */}

              {/* home page route */}
              <Route 
                path="/" 
                element={<Home />}
              />

              {/* login page route */}
              <Route 
                path="/login" 
                element={<Login />}
              />

              {/* signin page route */}
              <Route 
                path="/signup" 
                element={<Signup />}
              />

              {/* Profile page route */}
              <Route 
                path="/profiles/:profileId"
                element={<Profile />}
              />

              {/* Create Team page route */}
              <Route 
                path="/createteam"
                element={<CreateTeam />}
              />

            </Routes>
          </div>


        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
