import Head from 'next/head';
import useSWR from 'swr';
import fetcher from '../utils/fetcher';
import { base_url } from '../utils/url'
import {
  Flex,
  Heading,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Box,
  Text
} from "@chakra-ui/core";
import { justifyContent } from 'styled-system';

const Home = (props) => {
  return (
    <>
      <Box mt={5}>
        <Heading as="h1" textAlign="center" size="2xl" mb={5}>Jason's Github Stats</Heading>
        <Flex justify="center">
          <Box display={{ md: "flex", sm: "block" }}>
            <Box w="300px" p={5} ml={8} mb={3} borderWidth="1px" rounded="lg" overflow="hidden">
              <Stat>
                <StatLabel>
                  <Text fontSize="xl">Github Stars</Text>
                </StatLabel>
                <StatNumber>{props.data.stars}</StatNumber>
              </Stat>
            </Box>
            <Box w="300px" p={5} ml={8} mb={3} borderWidth="1px" rounded="lg" overflow="hidden">
              <Stat>
                <StatLabel>
                  <Text fontSize="xl">Github Followers</Text>
                </StatLabel>
                <StatNumber>{props.data.followers}</StatNumber>
              </Stat>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${base_url}/api/github`)
  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}

export default Home
