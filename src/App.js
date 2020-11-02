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
  const { posts, error, loading } = useRequest(
    "http://jsonplaceholder.typicode.com/posts"
  );

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
            {error && <div>{error}...</div>}
            {loading ? <h3>Loading ... </h3> : <Posts />}
          </div>
        </>
      </UserProvider>
    </div>
  );
}

export default App;
