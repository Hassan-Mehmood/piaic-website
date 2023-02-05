import { Box, Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import React from 'react';

export default function Courses() {
  return (
    <Box pt="64px" px="64px">
      <Box maxWidth="1440px" mx="auto">
        <Box textAlign="center" letterSpacing="5px">
          <Heading as="h3" fontSize="30px">
            Available Programs
          </Heading>
        </Box>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(4, 1fr)',
          }}
          gap={6}
          mt="32px"
        >
          <GridItem
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
            textAlign="center"
            minH="180px"
            borderRadius="5px"
            role="group"
          >
            <Box minW="100%" minH="40px" bgColor="#192a56" />
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              minH="calc(100% - 40px)"
              position="relative"
            >
              <Heading
                as="h4"
                fontWeight="bold"
                color="#192a56"
                fontSize="18px"
                transition="opacity"
                transitionDuration=".4s"
                _groupHover={{
                  opacity: '0',
                }}
              >
                Artifical Intelligence
              </Heading>
              <Box
                position="absolute"
                transform="translate(0%,-50%)"
                top="50%"
                fontSize="12px"
                p="5px"
                opacity="0"
                transition="opacity"
                transitionDuration=".4s"
                _groupHover={{
                  opacity: '1',
                }}
              >
                <Text>
                  A ONE YEAR BLOCKCHAIN PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS GETTING PAKISTAN
                  READY FOR THE NEW ERA OF BLOCKCHAIN, FINTECH AND SMART CONTRACTS
                </Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
            textAlign="center"
            minH="180px"
            borderRadius="5px"
            role="group"
          >
            <Box minW="100%" minH="40px" bgColor="#e1006a" />
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              minH="calc(100% - 40px)"
              position="relative"
            >
              <Heading
                as="h4"
                color="#e1006a"
                fontWeight="bold"
                fontSize="18px"
                transition="opacity"
                transitionDuration=".4s"
                _groupHover={{
                  opacity: '0',
                }}
              >
                Cloud Native and Mobile Web
              </Heading>
              <Box
                position="absolute"
                transform="translate(0%,-50%)"
                top="50%"
                fontSize="12px"
                p="5px"
                opacity="0"
                transition="opacity"
                transitionDuration=".4s"
                _groupHover={{
                  opacity: '1',
                }}
              >
                <Text>
                  A ONE YEAR BLOCKCHAIN PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS GETTING PAKISTAN
                  READY FOR THE NEW ERA OF BLOCKCHAIN, FINTECH AND SMART CONTRACTS
                </Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
            textAlign="center"
            minH="180px"
            borderRadius="5px"
            role="group"
          >
            <Box minW="100%" minH="40px" bgColor="#fbc314" />
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              minH="calc(100% - 40px)"
              position="relative"
            >
              <Heading
                as="h4"
                color="#fbc314"
                fontWeight="bold"
                fontSize="18px"
                transition="opacity"
                transitionDuration=".4s"
                _groupHover={{
                  opacity: '0',
                }}
              >
                Blockchain
              </Heading>
              <Box
                position="absolute"
                transform="translate(0%,-50%)"
                top="50%"
                fontSize="12px"
                p="5px"
                opacity="0"
                transition="opacity"
                transitionDuration=".4s"
                _groupHover={{
                  opacity: '1',
                }}
              >
                <Text>
                  A ONE YEAR BLOCKCHAIN PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS GETTING PAKISTAN
                  READY FOR THE NEW ERA OF BLOCKCHAIN, FINTECH AND SMART CONTRACTS
                </Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
            textAlign="center"
            minH="180px"
            borderRadius="5px"
            role="group"
          >
            <Box minW="100%" minH="40px" bgColor="#1b8f8b" />
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              minH="calc(100% - 40px)"
              position="relative"
            >
              <Heading
                as="h4"
                color="#1b8f8b"
                fontWeight="bold"
                fontSize="18px"
                transition="opacity"
                transitionDuration=".4s"
                _groupHover={{
                  opacity: '0',
                }}
              >
                Internet of Things
              </Heading>
              <Box
                position="absolute"
                transform="translate(0%,-50%)"
                top="50%"
                fontSize="12px"
                p="5px"
                opacity="0"
                transition="opacity"
                transitionDuration=".4s"
                _groupHover={{
                  opacity: '1',
                }}
              >
                <Text>
                  A ONE YEAR BLOCKCHAIN PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS GETTING PAKISTAN
                  READY FOR THE NEW ERA OF BLOCKCHAIN, FINTECH AND SMART CONTRACTS
                </Text>
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}
