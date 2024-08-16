import React from "react";
import {
  Box,
  chakra,
  Container,
  Text,
  HStack,
  VStack,
  Flex,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";

const milestones = [
  {
    year: "27-02-2021",
    title: "Dossier Sent",
    description: "Description for Dossier Sent",
    isActive: true,
  },
  {
    year: "13-11-2013",
    title: "Dossier Submitted",
    description: "Description for Dossier Submitted",
    isActive: true,
  },
  {
    year: "03-07-2023",
    title: "Samples Sent",
    description: "Description for Samples Sent",
    isActive: true,
  },
  {
    year: "",
    title: "Payment",
    description: "Description for Payment",
    isActive: false,
  },
];

const Milestones = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <Container maxWidth="7xl" p={{ base: 2, sm: 10 }}>
      <chakra.h3 fontSize="4xl" fontWeight="bold" mb={18} textAlign="center">
        Milestones
      </chakra.h3>
      {milestones.map((milestone, index) => (
        <Flex key={index} mb="10px">
          {isDesktop && index % 2 === 0 && (
            <>
              <EmptyCard />
              <LineWithDot isActive={milestone.isActive} />
              <Card {...milestone} />
            </>
          )}

          {isMobile && (
            <>
              <LineWithDot isActive={milestone.isActive} />
              <Card {...milestone} />
            </>
          )}

          {isDesktop && index % 2 !== 0 && (
            <>
              <Card {...milestone} />
              <LineWithDot isActive={milestone.isActive} />
              <EmptyCard />
            </>
          )}
        </Flex>
      ))}
    </Container>
  );
};

const Card = ({ year, title, description, isActive }) => {
  return (
    <HStack
      flex={1}
      p={{ base: 3, sm: 6 }}
      bg={isActive ? "blue.100" : "gray.100"}
      spacing={5}
      rounded="lg"
      alignItems="center"
      pos="relative"
    >
      <Box>
        <Text fontSize="lg" color={"blue.500"}>
          {year}
        </Text>

        <VStack spacing={2} mb={3} textAlign="left">
          <chakra.h1 fontSize="2xl" lineHeight={1.2} fontWeight="bold" w="100%">
            {title}
          </chakra.h1>
          <Text fontSize="md">{description}</Text>
        </VStack>
      </Box>
    </HStack>
  );
};

const LineWithDot = ({ isActive }) => {
  const activeColor = "blue.500";
  const inactiveColor = "gray.300";

  return (
    <Flex
      pos="relative"
      alignItems="center"
      mr={{ base: "40px", md: "40px" }}
      ml={{ base: "0", md: "40px" }}
    >
      <chakra.span
        position="absolute"
        left="50%"
        height="calc(100% + 10px)"
        border="1px solid"
        borderColor={isActive ? activeColor : inactiveColor}
        top="0px"
      ></chakra.span>
      <Box pos="relative" p="10px">
        <Box
          pos="absolute"
          top="0"
          left="0"
          bottom="0"
          right="0"
          width="100%"
          height="100%"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundPosition="center center"
          bg={isActive ? activeColor : inactiveColor}
          borderRadius="100px"
          opacity={1}
        ></Box>
      </Box>
    </Flex>
  );
};

const EmptyCard = () => (
  <Box flex={{ base: 0, md: 1 }} p={{ base: 0, md: 6 }} bg="transparent" />
);

export default Milestones;
