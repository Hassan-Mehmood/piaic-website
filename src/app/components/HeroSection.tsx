import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';

export default function HeroSection() {
  return (
    <Box as="main" px="32px" py="48px" bgImage={' linear-gradient(90deg,#e6dada,#dfedf0);'}>
      <Flex
        flexDir={{ base: 'column', md: 'row' }}
        align={{ base: '', md: 'center' }}
        maxW="1440px"
        mx="auto"
      >
        <Box as="section" order={{ base: 2, md: 1 }} flex="1">
          <Heading fontSize={{ base: '40px', lg: '50px' }}>
            Presidential Initiative{' '}
            <Box as="span" display="block" fontSize={{ base: '16px', lg: '32px' }}>
              for Artificial Intelligence & Computing (PIAIC)
            </Box>
          </Heading>
          <Text fontSize={{ base: '12px', lg: '16px' }} mt="40px">
            The mission of PIAIC is to reshape Pakistan by revolutionizing education, research, and
            business by adopting latest, cutting-edge technologies. Experts are calling this the 4th
            industrial revolution. We want Pakistan to become a global hub for AI, data science,
            cloud native computing, edge computing, blockchain, augmented reality, and internet of
            things.
          </Text>
          <Button
            color="#000"
            px="25px"
            py="5px"
            mt="20px"
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
        <Box as="section" order={{ base: 1, md: 2 }} flex="1" mb="5px">
          <Box maxW={{ base: '150px', md: '50%' }} mx={{ base: '0', md: 'auto' }}>
            <Image src="/president.webp" minW="150px" />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
