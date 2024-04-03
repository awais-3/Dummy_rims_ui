"use client";
import { Button, Flex, IconButton, Text, Select } from "@chakra-ui/react";
import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const TablePagination = ({
  totalCount,
  pageSize,
  onPageChange,
  handlePageSizeChange,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPageSize, setSelectedPageSize] = useState(pageSize);

  const totalPages = Math.ceil(totalCount / selectedPageSize);
  const startRow = (currentPage - 1) * selectedPageSize + 1;
  const endRow = Math.min(startRow + selectedPageSize - 1, totalCount);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      onPageChange(currentPage + 1, selectedPageSize);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      onPageChange(currentPage - 1, selectedPageSize);
    }
  };

  const handleSelectPageSizeChange = (e) => {
    const newSize = parseInt(e.target.value);
    setSelectedPageSize(newSize);
    handlePageSizeChange(newSize);
  };

  return (
    <Flex align="center" gap="6">
      <Flex align="center">
        <Text mr={2}>Rows per page:</Text>
        <Select value={selectedPageSize} onChange={handleSelectPageSizeChange}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
        </Select>
      </Flex>
      <Text ml={2}>
        {startRow}-{endRow} of {totalCount}
      </Text>
      <Flex gap={4}>
        <IconButton
          onClick={handlePrevPage}
          isDisabled={currentPage === 1}
          icon={<IoIosArrowBack />}
          rounded={"full"}
          variant={"ghost"}
          color="white"
          _hover={{
            color: "black",
            bg: "white",
          }}
        />
        <IconButton
          onClick={handleNextPage}
          isDisabled={currentPage === totalPages}
          icon={<IoIosArrowForward />}
          rounded={"full"}
          variant={"ghost"}
          color="white"
          _hover={{
            color: "black",
            bg: "white",
          }}
        />
      </Flex>
    </Flex>
  );
};

export default TablePagination;
