import React from 'react';
import UsersList from './components/UsersList';
import { users } from './mock';

function App() {
  return (
    <div className="App">
      <UsersList users={users.results} />
    </div>
  );
}

export default App;
