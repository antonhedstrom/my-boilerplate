import React from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';

import ErrorContainer, { parseAxiosError } from '../Containers/Layout/ErrorContainer';
import { getBook } from '../api-services';

const Data = styled.div`
`;

function BookDetails({ id, ...rest }) {
  const { isLoading, error, data: { data: book } = {} } = useQuery(['book', id], () => getBook(id));

  if (isLoading) {
    return null;
  }

  if (error) {
    return <ErrorContainer {...parseAxiosError(error)} />;
  }

  return (
    <div {...rest}>
      <h3>{book.title}</h3>
      <Data>{book.createdAt}</Data>
    </div>
  );
}

export default BookDetails;
