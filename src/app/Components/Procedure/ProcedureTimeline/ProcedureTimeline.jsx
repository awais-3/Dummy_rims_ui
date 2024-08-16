import React, { useEffect, useState } from "react";
import {
  Box,
  chakra,
  Container,
  Text,
  HStack,
  VStack,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

// const milestones = [
//   {
//     year: "",
//     title: "Dossier Sent",
//     description: "Description for Dossier Sent",
//     isActive: false,
//   },
//   {
//     year: "",
//     title: "Dossier Submitted",
//     description: "Description for Dossier Submitted",
//     isActive: false,
//   },
//   {
//     year: "",
//     title: "Samples Sent",
//     description: "Description for Samples Sent",
//     isActive: false,
//   },
//   {
//     year: "",
//     title: "Payment",
//     description: "Description for Payment",
//     isActive: false,
//   },
// ];

const Milestones = ({ procedure }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isDesktop = useBreakpointValue({ base: false, md: true });
  const [milestones, setMilestones] = useState([]);
  const allMilestones = useSelector((state) => state.milestone.milestones);

  useEffect(() => {
    if (procedure?.milestonesOverview) {
      const selectedMilestoneInProcedure = allMilestones.find(
        (mile) => String(mile?.milestoneName) === procedure?.milestonesOverview
      );

      if (selectedMilestoneInProcedure) {
        // Destructure to remove unnecessary keys
        const {
          createdBy,
          id,
          milestoneCount,
          milestoneName,
          usedInCount,
          ...filteredMilestone
        } = selectedMilestoneInProcedure;

        // Initialize all fields to null
        const initializedMilestone = Object.keys(filteredMilestone).reduce(
          (acc, key) => {
            acc[key] = null;
            return acc;
          },
          {}
        );

        // Update fields with values from the procedure, if they exist
        const updatedMilestone = Object.entries(initializedMilestone).reduce(
          (acc, [key, value]) => {
            acc[key] = procedure[key] !== undefined ? procedure[key] : "";
            return acc;
          },
          {}
        );

        const updatedMilestonesArray = Object.entries(updatedMilestone).map(
          ([key, value]) => {
            let isActive = false;

            // Handle FileList specifically
            if (value instanceof FileList) {
              isActive = value.length > 0;
            } else {
              // Handle other cases: check if the value is not an empty string or undefined
              isActive = value !== "" && value !== undefined;
            }

            return {
              title: key,
              year: value,
              isActive: isActive,
            };
          }
        );

        setMilestones(updatedMilestonesArray);
      } else {
        setMilestones([]);
      }
    } else {
      setMilestones([]);
    }
  }, [procedure, allMilestones]);

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
  const formatTitle = (key) => {
    return key
      .replace(/([a-z])([A-Z])/g, "$1 $2") // Add space before capital letters
      .replace(/([A-Z])/g, (match) => match.charAt(0).toUpperCase()) // Capitalize the first letter of each word
      .replace(/^\w/, (match) => match.toUpperCase()); // Capitalize the first letter of the title
  };
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
          <Box
            fontSize={["12px", "14px", "14px", "16px"]}
            whiteSpace={"wrap"}
            lineHeight={1.2}
            fontWeight="bold"
            w="100%"
          >
            {formatTitle(title)}
          </Box>
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
