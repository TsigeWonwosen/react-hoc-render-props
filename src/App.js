import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { UserProvider } from './context/userContext';
import ScrollToTop from './context/ScrollToTop';

import {
  NavBar,
  Footer,
  Home,
  useRequest,
  Blog,
  Blogs,
  Login,
  Contact,
} from './components';

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
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/blogs" component={Blogs} />
            <Route path="/blogs/:id" render={(props) => <Blog {...props} />} />
          </Switch>
          <Footer />
        </UserProvider>
      </Router>
    </div>
  );
}

export default App;
