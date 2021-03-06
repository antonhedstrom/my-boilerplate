
import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { useMutation, useQueryClient } from 'react-query';

import { Button, Input } from '../UIComponents';
import { createBook } from '../api-services';

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

function BookAdd({ ...rest }) {
  const [title, setTitle] = useState('');
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation(createBook, {
    onSuccess: ({ data: createdItem }) => {
      queryClient.setQueryData('books', (cachedQuery) => {
        return {
          ...cachedQuery,
          data: [createdItem, ...cachedQuery.data],
        };
      });
      setTitle('');
    },
  });
  const doSave = useCallback(() => {
    if (isLoading) {
      return;
    }
    mutate({
      title,
      password: 'secret',
    });
  }, [mutate, isLoading, title]);

  const handleOnChange = useCallback((event) => {
    setTitle(event.target.value);
  }, [setTitle]);

  const handleKeyPress = useCallback((event) => {
    if (event.charCode === 13) {
      doSave();
    }
  }, [doSave]);

  return (
    <div {...rest}>
      <InputContainer>
        <Input
          className="input large"
          value={title}
          onChange={handleOnChange}
          onKeyPress={handleKeyPress}
        />
        <Button
          className="brand"
          size="large"
          onClick={doSave}
          disabled={isLoading}
        >
          Add
        </Button>
      </InputContainer>
    </div>
  );
}

export default BookAdd;
