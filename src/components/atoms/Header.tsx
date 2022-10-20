import React from 'react';
import styled from 'styled-components';
import { space, layout, color, SpaceProps } from 'styled-system';
import { H2 } from './Headings';
import clock from '../../resources/icons/clock.svg'
import Box from './Box';

function Header() {
  return (
    <Box
      borderBottomWidth="sm" 
      borderBottomColor="border" 
      borderBottomStyle="solid"
      width="100%"
      display="flex"
      align-items="center"
      data-testid="header"
    >
      <Icon 
        src={clock} 
        alt="header-icon" 
        width={20} 
        paddingRight="xs"
        color="grey_1"
      />
      <H2 marginBottom="sm" marginTop="sm">Opening hours</H2>
    </Box>
  );
}

export default Header;

const Icon = styled.img<SpaceProps>`
  ${layout};
  ${space};
  ${color};
  filter: ${p => p.theme.colors.svg_grey_3};
`