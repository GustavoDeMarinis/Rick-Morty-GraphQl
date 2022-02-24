import React from "react";

import Link from "next/link";

import { Button, Center, Heading, Text, VStack } from "@chakra-ui/react";

/*
  DISCLAIMER:

  This is jsut a welcome message carefully crafted
  to welcome you to the challenge. You can skip this file! 

  DO NOT DELETE FILE.
*/

export default function Home() {
  return (
    <Center bg="#101010" height="100vh">
      <VStack spacing="8">
        <Heading color="white">
          Welcome to the Greener Bio code challenge!
        </Heading>
        <Text fontSize="lg" color="whiteAlpha.800">
          Go ahead and create something awesome
        </Text>
        <Link passHref href="/characters">
          <Button
            _hover={{ bg: "#009A40" }}
            _active={{ bg: "#008939" }}
            bg="#00AF49"
            color="white"
            as="a"
          >
            Go to characters page
          </Button>
        </Link>
      </VStack>
    </Center>
  );
}
