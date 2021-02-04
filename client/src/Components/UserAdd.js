
import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { useMutation, useQueryClient } from 'react-query';

import { Button, Input } from '../UIComponents';
import { createUser } from '../api-services';

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

function UserAdd({ ...rest }) {
  const [username, setUsername] = useState('');
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation(createUser, {
    onSuccess: ({ data: createdItem }) => {
      queryClient.setQueryData('users', (cachedQuery) => {
        return {
          ...cachedQuery,
          data: [createdItem, ...cachedQuery.data],
        };
      });
      setUsername('');
    },
  });
  const doSave = useCallback(() => {
    if (isLoading) {
      return;
    }
    mutate({
      username,
      password: 'secret',
    });
  }, [mutate, isLoading, username]);

  const handleOnChange = useCallback((event) => {
    setUsername(event.target.value);
  }, [setUsername]);

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
          value={username}
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

export default UserAdd;
