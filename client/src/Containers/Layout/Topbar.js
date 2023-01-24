import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 1em 0 0;
  background-color: #003049;
  background-size: cover;
  background-position: center;
  color: white;
`;

const Title = styled.h1`
  font-family: Courier;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    font-size: 2rem;
  }
`;


function Topbar({ children, ...rest }) {
  return (
    <Container {...rest}>
      <Title>Boilerplate of 🎩</Title>
      {children}
    </Container>
  );
}

export default Topbar;
