import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";

import { UserProvider } from "./context/userContext";
import ScrollToTop from "./context/ScrollToTop";

import {
  NavBar,
  Footer,
  Home,
  useRequest,
  Blog,
  Blogs,
  Login,
  Contact,
} from "./components";

import "./App.css";
// "https://wonde-strapi-admin.herokuapp.com/blogs"
function App() {
  const { posts, loading, error } = useRequest();

  console.log("Post :");
  console.log(posts);
  let history = useHistory();
  return (
    <div className="App">
      <Router
        onUpdate={() => window.scrollTo(0, 0)}
        history={history}
      >
        <Route component={ScrollToTop} />
        <UserProvider value={{ posts, error, loading }}>
          <NavBar />
          <Switch>
            <Route
              exact
              path="/"
              component={Home}
              onChange={(prevState, nextState) => {
                if (nextState.location.action !== "POP") {
                  window.scrollTo(0, 0);
                }
              }}
            />
            <Route
              exact
              path="/contact"
              component={Contact}
            />
            <Route
              exact
              path="/login"
              component={Login}
            />
            <Route
              exact
              path="/blogs"
              component={Blogs}
            />
            <Route
              path="/blogs/:id"
              render={(props) => <Blog {...props} />}
            />
          </Switch>
          <Footer />
        </UserProvider>
      </Router>
    </div>
  );
}

export default App;
