import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  color: white;
  text-align: center;
`

const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding-bottom: 20px;
`
const NavItem = styled.li`
  list-style: none;
  display: inline-block;
  padding: 1em;
  border: 1px white solid;

  a {
    color: white;
  }
`

function Navigation() {
  return (
    <Container>
      <NavList>
        <NavItem>
          <NavLink to="/view1">View A</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/view2">View B</NavLink>
        </NavItem>
      </NavList>
    </Container>
  );
}

export default Navigation;
