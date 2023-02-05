import { Box, Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const coreCourses = [
  {
    courseName: 'Quarter 1 (Core)',
    intro: 'CS-101 Object Oriented Programming',
  },
  {
    courseName: 'Quarter 2 (Core)',
    intro: 'W2-201 Developing Planet Scale web',
  },
  {
    courseName: 'Quarter 3 (Core)',
    intro: '$-101 Dollar making Bootcamp',
  },
];

const specialTracks = [
  {
    track: 'Web 3.0 (Blockchain) and Metaverse Specialization',
  },
  {
    track: 'Artificial Intelligence (AI) and Deep Learning Specialization',
  },
  {
    track: 'Cloud-Native Computing Specialization',
  },
  {
    track: 'Ambient Computing and IoT Specialization',
  },
  {
    track: 'Genomics and Bioinformatics Specialization',
  },
  {
    track: 'Network Programmability and Automation Specialization',
  },
];

export default function Syllabus() {
  return (
    <Box as="section" pt="64px" mb="500px">
      <Box maxWidth="1440px" mx="auto" px="64px">
        <Box textAlign="center">
          <Heading as="h6" fontSize="30px">
            The Panaverse Community and Syllabus
          </Heading>
          <Text maxW="100ch" mx="auto" fontSize="15px" mt="10px">
            The internet is without a doubt the most important technological development in human
            history. Web3, 3D Metaverse, AI, IoT, Cloud, and Edge technologies expand the internet
            as we know it by introducing novel features and advancements. Metaverse will make use of
            all aspects of modern technology, including 3D, VR, AR, AI, blockchain, cloud and edge
            computing, voice computing, ambient computing, and more.
          </Text>
        </Box>
        <Box textAlign="center" mt="48px">
          <Heading as="h6" fontSize="30px">
            The Program in a nutshell{' '}
            <Text as="span" display="block">
              Earn while you learn
            </Text>
          </Heading>
          <Text maxW="100ch" mx="auto" fontSize="15px" mt="10px">
            In this brand-new type of curriculum, students will learn how to make money and boost
            exports in the classroom and will begin doing so within six months of the program's
            beginning. It resembles a cross between a corporate venture and an educational project.
          </Text>
        </Box>
        <Box textAlign="center" mt="48px">
          <Heading as="h6" fontSize="30px">
            Core Courses
          </Heading>
          <Grid
            templateColumns={{
              base: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            }}
            gap={6}
            mt="32px"
            maxW="1100px"
            mx="auto"
          >
            {coreCourses.map((course) => (
              <GridItem
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
                textAlign="center"
                minH="180px"
                borderRadius="5px"
              >
                <Box minW="100%" minH="40px" bgColor="#192a56" />
                <Box
                  display="flex"
                  flexDir="column"
                  alignItems="center"
                  justifyContent="center"
                  minH="calc(100% - 40px)"
                >
                  <Heading as="h4" fontWeight="bold" color="#192a56" fontSize="18px">
                    {course.courseName}
                  </Heading>
                  <Text color="#192a56">{course.intro}</Text>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </Box>

        <Box textAlign="center" mt="48px">
          <Heading as="h6" fontSize="30px">
            Specialized Tracks
          </Heading>
          <Grid
            templateColumns={{
              base: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            }}
            gap={6}
            mt="32px"
            maxW="1100px"
            mx="auto"
          >
            {specialTracks.map((track) => (
              <GridItem
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
                textAlign="center"
                minH="180px"
                borderRadius="5px"
              >
                <Box minW="100%" minH="40px" bgColor="#e1006a" />
                <Box
                  display="flex"
                  flexDir="column"
                  alignItems="center"
                  justifyContent="center"
                  minH="calc(100% - 40px)"
                >
                  <Heading as="h4" fontWeight="bold" color="#e1006a" fontSize="18px">
                    {track.track}
                  </Heading>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
