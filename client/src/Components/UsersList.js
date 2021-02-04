import React, { useCallback } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';

import { getUsers, removeUser } from '../api-services';
import { Button } from '../UIComponents';

function UserItem({ value: item }) {
  const { mutate: deleteUser, isLoading } = useMutation(removeUser, {
    onSuccess: ({ data: removedItem }) => {
      const removedId = Number.parseInt(removedItem.id, 10);
      queryClient.setQueryData('users', (cachedQuery) => {
        return {
          ...cachedQuery,
          data: cachedQuery.data.filter((item) => item.id !== removedId),
        };
      });
    },
  });
  const queryClient = useQueryClient();
  const deleteItem = useCallback(() => {
    if (isLoading) {
      return;
    }
    deleteUser(item.id);
  }, [deleteUser, isLoading, item.id]);

  return (
    <tr>
      <td>{item.username}</td>
      <td>{item.createdAt}</td>
      <td><Button className="danger u-pull-right" onClick={deleteItem}>Ta&nbsp;bort</Button></td>
    </tr>
  );
}

function UsersList({ ...rest }) {
  const { isLoading, data: { data: users = [] } = {} } = useQuery(
    'users',
    () => getUsers({ sort_by: 'createdAt.desc', limit: 10 }),
  );

  if (isLoading) {
    return null;
  }
  return (
    <div {...rest}>
      <table className="u-full-width">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Created</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserItem key={`user-${user.id}`} value={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersList;
