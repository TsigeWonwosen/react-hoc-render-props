import React from "react";
import Cat from "./components/Cat";
import Dog from "./components/Dog";
import Mouse from "./components/Mouse";
import Head from "./components/Head";
import PageForm from "./components/PageForm";
import useRequest from "./components/useRequest";
import Posts from "./components/Posts";
import NavBar from "./components/NavBar";
import { UserProvider } from "./context/userContext";
import "./App.css";

function App() {
  const [page, setPage] = React.useState(4);
  const { posts, loading, error } = useRequest(
    `http://jsonplaceholder.typicode.com/posts?_page=${page}`
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
            <PageForm setPage={setPage} />
            {error && <div>{error}...</div>}
            {loading ? <h3>Loading ... </h3> : <Posts />}
          </div>
        </>
      </UserProvider>
    </div>
  );
}

export default App;
