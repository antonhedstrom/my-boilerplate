import React from 'react';

import UsersList from '../Components/UsersList';
import UserAdd from '../Components/UserAdd';

function SecondView({ ...rest }) {
  return (
    <div {...rest}>
      <h1>Users</h1>
      <br />
      <UserAdd />
      <br />
      <UsersList />
    </div>
  );
}

export default SecondView;
