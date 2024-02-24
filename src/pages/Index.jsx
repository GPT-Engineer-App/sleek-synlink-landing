import { Box, Button, Container, Flex, Heading, Input, Stack, Text, useColorModeValue, VStack, Image } from "@chakra-ui/react";
import { FaArrowRight, FaLink } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0} bgGradient="linear(to-r, primary.50, primary.100)">
      <Flex align="center" justify="center" minHeight="100vh" padding={4} flexDirection="column">
        {/* Hero Section */}
        <VStack spacing={6} align="flex-start">
          <Heading as="h1" size="4xl" noOfLines={2} fontWeight="bold">
            Shorten, Share & Track Your Links with{" "}
            <Text as="span" color={useColorModeValue("primary.500", "primary.300")}>
              Synlink
            </Text>
          </Heading>
          <Text fontSize="xl" color={useColorModeValue("gray.600", "gray.400")}>
            A fast and reliable way to shorten your URLs and manage your links with detailed analytics.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} width="100%">
            <Input placeholder="Paste your long URL here" size="lg" />
            <Button leftIcon={<FaLink />} colorScheme="primary" size="lg" _hover={{ bg: "primary.600", boxShadow: "md" }}>
              Shorten
            </Button>
          </Stack>
        </VStack>

        {/* Feature Section */}
        <Box my={20}>
          <Heading as="h2" size="xl" textAlign="center" mb={10}>
            Why Choose Synlink?
          </Heading>
          <Flex direction={{ base: "column", md: "row" }} justifyContent="center" alignItems="center" gap={10}>
            <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md" bg="primary.50">
              <Heading as="h3" size="md">
                Fast & Secure
              </Heading>
              <Text mt={4}>Our service is built for speed and security at its core. Enjoy quick link shortening without compromising your data.</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md" bg="primary.50">
              <Heading as="h3" size="md">
                Detailed Analytics
              </Heading>
              <Text mt={4}>Track your links and gather insights with our comprehensive analytics dashboard.</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md" bg="primary.50">
              <Heading as="h3" size="md">
                Easy Sharing
              </Heading>
              <Text mt={4}>Share your links across all platforms with just one click and manage them effortlessly.</Text>
            </Box>
          </Flex>
        </Box>

        {/* Call to Action Section */}
        <Flex width="full" align="center" justifyContent="center" my={10}>
          <VStack spacing={5}>
            <Heading as="h2" size="lg">
              Get Started with Synlink Today
            </Heading>
            <Button rightIcon={<FaArrowRight />} colorScheme="primary" size="lg" boxShadow="lg" _hover={{ bg: "primary.600", boxShadow: "md" }}>
              Create Account
            </Button>
          </VStack>
        </Flex>

        {/* Footer Image */}
        <Box mt={10} width="full">
          <Image src="https://images.unsplash.com/photo-1601758123927-2f7b0c2f2eb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwYmFja2dyb3VuZHxlbnwwfHx8fDE1OTE2MDA1NjM&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;
