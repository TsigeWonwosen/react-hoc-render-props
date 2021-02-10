import React, { useState } from 'react';

import { UserProvider } from './context/userContext';

import {
  Cat,
  Dog,
  Head,
  PageForm,
  useRequest,
  Posts,
  NavBar,
} from './components';

import './App.css';

function App() {
  const [page, setPage] = useState(1);
  const { posts, loading, error } = useRequest(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}`,
  );

  return (
    <div className="App">
      <>
        <Head />
        <NavBar />
        <div className="app-body">
          <div className="app-container">
            <Cat name="Perry" />

            <Dog />
          </div>
          <UserProvider value={{ posts, error, loading }}>
            <PageForm setPage={setPage} />
            {loading ? <h3>Loading ... </h3> : <Posts />}
            {error && <div>{error}</div>}
          </UserProvider>
        </div>
      </>
    </div>
  );
}

export default App;
