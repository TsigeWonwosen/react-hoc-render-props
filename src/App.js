import React from 'react';

import { UserProvider } from './context/userContext';
import ScrollToTop from './context/ScrollToTop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NavBar, Footer, Home, useRequest, Blog ,Login,Contact } from './components';

import './App.css';

function App() {
  const { posts, loading, error } = useRequest(
    'https://wonde-strapi-admin.herokuapp.com/blogs',
  );

  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <UserProvider value={{ posts, error, loading }}>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route path="/blogs/:id" render={(props) => <Blog {...props} />} />
          </Switch>
          <Footer />
        </UserProvider>
      </Router>
    </div>
  );
}

export default App;
