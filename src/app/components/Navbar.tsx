import { Box, Button, Flex, ListItem, UnorderedList } from '@chakra-ui/react';
import Link from 'next/link';
import { useState } from 'react';
import { MdOutlineMenu } from 'react-icons/md';

export default function Navbar() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <Box as="header" bgColor={'#035554'}>
      <Box as="nav" maxW="1440px" mx="auto" py="16px" px="16px">
        <Flex alignItems="center" justifyContent="space-between">
          <Box maxW="48px" cursor="pointer">
            <img src="/panaverse80_80.png" alt="Panaverse Logo" />
          </Box>

          <Box display={{ base: 'none', lg: 'unset' }}>
            <UnorderedList display="flex" alignItems="center" m="0px">
              <ListItem listStyleType="none" mx="25px" color="#fff">
                <Link href="">How It Works</Link>
              </ListItem>
              <ListItem listStyleType="none" mx="25px" color="#fff">
                <Link href="">Apply</Link>
              </ListItem>
              <ListItem listStyleType="none" mx="25px" color="#fff">
                <Link href="">Available Programs</Link>
              </ListItem>
              <ListItem listStyleType="none" mx="25px" color="#fff">
                <Link href="">About</Link>
              </ListItem>
              <ListItem listStyleType="none" mx="25px" color="#fff">
                <Link href="">WIT</Link>
              </ListItem>
            </UnorderedList>
          </Box>
          <Box display={{ base: 'none', lg: 'unset' }}>
            <Button
              color="#000"
              px="25px"
              py="5px"
              bgImage="linear-gradient(270deg,#08d88d,#0eb5a3);"
              _hover={{
                backgroundImage: 'linear-gradient(270deg,#0eb5a3,#08d88d);',
              }}
              _focus={{
                backgroundImage: 'linear-gradient(270deg,#0eb5a3,#08d88d);',
              }}
            >
              Apply
            </Button>
          </Box>
          <Box display={{ base: 'unset', lg: 'none' }} color="#fff" cursor="pointer">
            <MdOutlineMenu size={24} onClick={() => setShowMobileNav(!showMobileNav)} />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
