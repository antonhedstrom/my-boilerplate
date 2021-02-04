import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from 'react-query';

import { getBooks, removeBook } from '../api-services';
import { Button } from '../UIComponents';


function BookItem({ value: item }) {
  const { mutate: deleteBook, isLoading } = useMutation(removeBook, {
    onSuccess: ({ data: removedItem }) => {
      const removedId = Number.parseInt(removedItem.id, 10);
      queryClient.setQueryData('books', (cachedQuery) => {
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
    deleteBook(item.id);
  }, [deleteBook, isLoading, item.id]);

  return (
    <tr>
      <td>
        <Link to={`/books/${item.id}`}>{item.id}</Link>
      </td>
      <td>{item.title}</td>
      <td>{item.createdAt}</td>
      <td><Button className="danger u-pull-right" onClick={deleteItem}>Ta&nbsp;bort</Button></td>
    </tr>
  );
}

function BooksList({ ...rest }) {
  const { isLoading, data: { data: books = [] } = {} } = useQuery(
    'books',
    () => getBooks({ sort_by: 'createdAt.desc', limit: 10 }),
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
          {books.map((book) => (
            <BookItem key={`book-${book.id}`} value={book} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BooksList;
