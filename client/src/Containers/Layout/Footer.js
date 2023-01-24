import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
  color: ${({ theme }) => theme.colors.N60};
  padding-top: ${({ theme }) => theme.spacing.medium};
  text-align: center;
`;

function Footer() {
  return (
    <StyledFooter>
      Developed by Anton, 2021 (updated 2023)
    </StyledFooter>
  );
}

export default Footer;
