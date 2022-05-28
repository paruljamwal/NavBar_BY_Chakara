import React from "react";
import {Logo,Left,Mid, Header, LeftBox } from "./Navbar.style";
import { Button, Stack } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
const Navbar = () => {
  return (
    <Header>
      <div>
        <Logo>Logo</Logo>
      </div>
      <Left>
        <Menu>
          <MenuButton  as={Button}>Inspiration</MenuButton>
          <MenuList>
            <MenuItem>Explore Design Work</MenuItem>
            <MenuItem>New & NoteWorthy</MenuItem>
          </MenuList>
        </Menu>
      </Left>
      <Left>
        <Menu>
          <MenuButton as={Button}>Find Work</MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
          </MenuList>
        </Menu>
      </Left>
      <Mid>
        <Button _hover="none" variant="ghost">
          Learn Design
        </Button>
        <Button _hover="none" variant="ghost">
          Hire Designers
        </Button>
      </Mid>
      <LeftBox>
        <div>
          <Stack direction="row" spacing={4} align="center">
            <Button colorScheme="grey" variant="link">
              Sign In
            </Button>
            <Button
              colorScheme="pink"
              backgroundColor="rgb(237,100,166)"
              variant="solid"
            >
              Sign Up
            </Button>
          </Stack>
        </div>
      </LeftBox>
    </Header>
  );
};

export default Navbar;
