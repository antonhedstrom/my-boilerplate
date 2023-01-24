import React from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';

import ErrorContainer, { parseAxiosError } from '../Containers/Layout/ErrorContainer';
import { getBook } from '../api-services';
import { useParams } from 'react-router-dom';

const Data = styled.div`
`;

function BookDetails() {
  const params = useParams()
  const { isLoading, error, data: { data: book } = {} } = useQuery(['book', params.id], () => getBook(params.id));

  if (isLoading) {
    return null;
  }

  if (error) {
    return <ErrorContainer {...parseAxiosError(error)} />;
  }

  return (
    <div>
      <h3>{book.title}</h3>
      <Data>{book.createdAt}</Data>
    </div>
  );
}

export default BookDetails;
