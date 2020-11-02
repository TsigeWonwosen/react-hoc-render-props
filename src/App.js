import React from "react";
import axios from "axios";
import "./App.css";
import Cat from "./components/Cat";
import Dog from "./components/Dog";
import Mouse from "./components/Mouse";
import Head from "./components/Head";
import { UserProvider } from "./context/userContext";
import Posts from "./components/Posts";
import NavBar from "./components/NavBar";
const users = [
  { id: 1, fName: "wonde", lName: "Tsige", age: "30" },
  {
    id: 2,
    fName: "Abel",
    lName: "Shi",
    age: "20",
  },
  {
    id: 3,
    fName: "Meron",
    lName: "Awol",
    age: "25",
  },
];
function App() {
  const [posts, setPost] = React.useState([]);
  const [error, setError] = React.useState("");

  React.useEffect(async () => {
    try {
      const response = await axios.get(
        "http://jsonplaceholder.typicode.com/posts?_limit=10"
      );
      if (response) {
        const postData = await response.data;
        setPost([...postData]);
      }
    } catch (e) {
      console.log(e);
      setError("Error retrieving Data");
    }
  }, []);
  return (
    <div className='App'>
      <UserProvider value={{ users, posts, error }}>
        <Head />
        <NavBar />
        <div className='app-body'>
          <div className='app-container'>
            <Cat name='Perry' />
            <Mouse
              render={(mouse, handleCount, resetCount) => (
                <Dog
                  count={mouse}
                  handleCount={handleCount}
                  resetCount={resetCount}
                />
              )}
            />
          </div>
          <Posts />
        </div>
      </UserProvider>
    </div>
  );
}

export default App;
