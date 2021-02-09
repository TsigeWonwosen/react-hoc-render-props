import React from 'react';

import {
  Cat,
  Dog,
  Mouse,
  Head,
  PageForm,
  useRequest,
  Posts,
  NavBar,
} from './components';
import { UserProvider } from './context/userContext';
import './App.css';

function App() {
  const [page, setPage] = React.useState(1);
  const { posts, loading, error } = useRequest(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}`,
  );

  return (
    <div className="App">
      <UserProvider value={{ posts, error }}>
        <>
          <Head />
          <NavBar />
          <div className="app-body">
            <div className="app-container">
              <Cat name="Perry" />
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
            {loading ? <h3>Loading ... </h3> : <Posts />}
            {error && <div>{error}</div>}
          </div>
        </>
      </UserProvider>
    </div>
  );
}

export default App;
