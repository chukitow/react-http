import React, { useState } from 'react';

const UsersList = ({
  users
}) => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="row">
      <div className="col-3">
        <ul className="list-group users-list">
          {
            users.map(user => (
              <div className="list-group-item user-item" key={user.login.uuid} onClick={() => setSelectedUser(user)}>
                <div className="row">
                  <div className="col-2">
                    <img className="rounded-circle" src={user.picture.medium} alt="profile"/>
                  </div>
                  <div className="col-10 align-self-center">
                    <h6 className="ml-2">{user.name.title} {user.name.first} {user.name.last}</h6>
                  </div>
                </div>
              </div>
            ))
          }
        </ul>
      </div>
      <div className="col-9">
        {
          selectedUser &&
          <div className="d-flex h-100 align-items-center justify-content-center">
            <img className="rounded-circle" src={selectedUser.picture.medium} alt="Card image cap"/>
            <h2 className="card-title ml-2">{selectedUser.name.title} {selectedUser.name.first} {selectedUser.name.last}</h2>
          </div>
        }
      </div>
    </div>
  );
}



export default UsersList;
