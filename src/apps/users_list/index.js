import React, { useState, useEffect } from 'react';
import UsersList from './components/UsersList';
import Users from '../../resources/Users';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function fetchUsers() {
      const response = await Users.all();
      const data = await response.data;
      setUsers(data.results);
    }

    fetchUsers();
  }, []);

  return (
    <div className="App">
      <UsersList users={users} />
    </div>
  );
}

export default App;
