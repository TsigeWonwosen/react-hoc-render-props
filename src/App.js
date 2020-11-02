import React from "react";
import "./App.css";
import Cat from "./components/Cat";
import Dog from "./components/Dog";
import Mouse from "./components/Mouse";
import Head from "./components/Head";
import useRequest from "./components/useRequest";
import { UserProvider } from "./context/userContext";
import Posts from "./components/Posts";
import NavBar from "./components/NavBar";

function App() {
  // const [posts, setPost] = React.useState([]);
  // const [error, setError] = React.useState("");
  const { posts, error, loading } = useRequest(
    "http://jsonplaceholder.typicode.com/posts?_limit=10"
  );

  // async function fetchPost() {
  //   try {
  //     const response = await axios.get(
  //       "http://jsonplaceholder.typicode.com/posts?_limit=10"
  //     );
  //     if (response) {
  //       const postData = await response.data;
  //       setPost([...postData]);
  //     }
  //   } catch (e) {
  //     setError("Error retrieving Data");
  //   }
  // }

  // React.useEffect(() => {
  //   fetchPost();
  // }, []);
  return (
    <div className='App'>
      <UserProvider value={{ posts, error }}>
        <>
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
            {loading || error ? error : <Posts />}
          </div>
        </>
      </UserProvider>
    </div>
  );
}

export default App;
