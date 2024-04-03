import { Box, Button, Flex, Input, Select, Text } from "@chakra-ui/react";
import React from "react";

export default function UserManagementSearchBar() {
  return (
    <Flex py="4" flexDir={"column"} gap="4">
      <Flex gap="4">
        <Input placeholder="Search by name" />
        <Button colorScheme="blue" variant={"outline"}>
          Searchs
        </Button>
      </Flex>

      <Flex justify={"space-between"}>
        <Box></Box>
        <Box as="form" display="flex" gap="2" alignItems={"center"}>
          <Text whiteSpace={"nowrap"}>Sort by:</Text>
          <Select>
            <option value={5}>Created</option>
            <option value={10}>Name</option>
            <option value={25}>City</option>
          </Select>
        </Box>
      </Flex>
    </Flex>
  );
}
