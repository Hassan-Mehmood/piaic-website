import { Box, Button, Flex, ListItem, UnorderedList } from '@chakra-ui/react';
import Link from 'next/link';
import { useState } from 'react';
import { MdOutlineMenu } from 'react-icons/md';

export default function Navbar() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <Box as="header" bgColor={'#035554'} position="relative">
      <Box as="nav" maxW="1440px" mx="auto" py="16px" px="32px">
        <Flex alignItems="center" justifyContent="space-between">
          <Box maxW="48px" cursor="pointer">
            <img src="/panaverse80_80.png" alt="Panaverse Logo" />
          </Box>

          <Box>
            {/* Desktop Nav */}
            <UnorderedList display={{ base: 'none', lg: 'flex' }} alignItems="center" m="0px">
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

            {/* Mobile Nav */}
            {showMobileNav === true ? (
              <UnorderedList
                display={{ base: 'unset', lg: 'none' }}
                m="0px"
                position="absolute"
                left="0"
                width="100%"
                top="80px"
                bgColor="#035554"
              >
                <ListItem
                  listStyleType="none"
                  m="5px 0 10px 0px"
                  p="5px 25px 15px"
                  borderBottom="1px solid rgba(0,0,0,0.3)"
                  color="#fff"
                >
                  <Link href="">How It Works</Link>
                </ListItem>
                <ListItem
                  listStyleType="none"
                  m="5px 0 10px 0px"
                  p="5px 25px 15px"
                  borderBottom="1px solid rgba(0,0,0,0.3)"
                  color="#fff"
                >
                  <Link href="">Apply</Link>
                </ListItem>
                <ListItem
                  listStyleType="none"
                  m="5px 0 10px 0px"
                  p="5px 25px 15px"
                  borderBottom="1px solid rgba(0,0,0,0.3)"
                  color="#fff"
                >
                  <Link href="">Available Programs</Link>
                </ListItem>
                <ListItem
                  listStyleType="none"
                  m="5px 0 10px 0px"
                  p="5px 25px 15px"
                  borderBottom="1px solid rgba(0,0,0,0.3)"
                  color="#fff"
                >
                  <Link href="">About</Link>
                </ListItem>
                <ListItem
                  listStyleType="none"
                  m="5px 0 0px 0px"
                  p="5px 25px 15px"
                  borderBottom="1px solid rgba(0,0,0,0.3)"
                  color="#fff"
                >
                  <Link href="">WIT</Link>
                </ListItem>
              </UnorderedList>
            ) : null}
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
