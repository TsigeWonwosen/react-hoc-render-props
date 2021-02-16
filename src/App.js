import React from 'react';

import { UserProvider } from './context/userContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  Card,
  Head,
  NavBar,
  Footer,
  Home,
  About,
  Service,
  Blog,
  useRequest,
} from './components';
import './App.css';
const Contact = () => console.log('Contact Page');
const Login = () => console.log('Login Page');
function App() {
  const { posts, loading, error } = useRequest(
    // `https://jsonplaceholder.typicode.com/posts?_page=${page}`,
    'https://wonde-strapi-admin.herokuapp.com/blogs',
  );

  return (
    <UserProvider value={{ posts, error, loading }}>
      <div className="App">
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Head />
              <About />
              <Service />
              <Home />
              <Card />
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
        </Router>
      </div>
    </UserProvider>
  );
}

export default App;
