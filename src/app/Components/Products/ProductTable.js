"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Checkbox,
  Box,
  IconButton,
  Skeleton,
  Flex,
  Input,
  Button,
  Select,
  Text,
} from "@chakra-ui/react";
import { MdDeleteOutline } from "react-icons/md";
import TablePagination from "../Common/TablePagination";
import { productData } from "../../assets/Data";
import Link from "next/link";

export default function ProductTable() {
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProcedure, setTotalProcedure] = useState(productData?.length);
  const [Products, setProducts] = useState();
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const getPageData = () => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return Products?.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setTimeout(() => {
      setProducts(productData);
      setIsLoading(false);
    }, 1000);
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setSelectedRows([]);
    setSelectAll(false);
  };

  const handlePageSizeChange = (size) => {
    setPageSize(size);
  };

  const handleCheckboxChange = (e, item) => {
    const { checked } = e.target;
    if (checked) {
      setSelectedRows([...selectedRows, item]);
    } else {
      setSelectedRows(
        selectedRows.filter(
          (row) => row.parentProductCode !== item.parentProductCode
        )
      );
    }
  };

  const handleSelectAll = (e) => {
    const { checked } = e.target;
    setSelectAll(checked);
    if (checked) {
      setSelectedRows([...productData]);
    } else {
      setSelectedRows([]);
    }
  };

  const handleDeleteSelectedRows = () => {
    const updatedData = productData.filter(
      (row) =>
        !selectedRows.some(
          (selectedRow) => selectedRow.productData === row.productData
        )
    );
    console.log("Updated Data after deletion:", updatedData);
  };

  return (
    <>
      <Flex py="4" flexDir={"column"} gap="4">
        <Flex gap="4">
          <Input placeholder="Search by name" />
          <Button colorScheme="blue" variant={"outline"}>
            Search
          </Button>
        </Flex>

        <Flex justify={"space-between"}>
          <Box></Box>
          <Box as="form" display="flex" gap="2" alignItems={"center"}>
            <Text whiteSpace={"nowrap"}>Action</Text>
            <Select isDisabled={selectedRows.length === 0}>
              <option>Delete</option>
            </Select>
          </Box>
        </Flex>
      </Flex>
      <TableContainer flex="1" display="flex" flexDirection={"column"}>
        <Table variant="striped">
          <Thead bg="blue.600" zIndex="10">
            <Tr>
              <Th color="white">
                <Checkbox
                  isChecked={selectAll}
                  onChange={handleSelectAll}
                  mr="3"
                />
                <span>Product code</span>
              </Th>
              <Th color="white">Product name </Th>
              <Th color="white">Parent Product</Th>
              <Th color="white">Manufacturer</Th>
              <Th color="white">Strength</Th>
              <Th color="white">Country of Origin</Th>
            </Tr>
          </Thead>
          <Tbody>
            {isLoading ? (
              // Skeleton when loading (unchanged)
              Array.from({ length: pageSize }).map((_, index) => (
                <Tr key={index} w="full">
                  <Td>
                    <Box display="flex" gap="15px">
                      <Skeleton height="15px" width="15px" />
                      <Skeleton height="15px" width="full" />
                    </Box>
                  </Td>
                  <Td>
                    <Skeleton height="15px" width="full" />
                  </Td>
                  <Td>
                    <Skeleton height="15px" width="full" />
                  </Td>
                  <Td>
                    <Skeleton height="15px" width="full" />
                  </Td>
                  <Td>
                    <Skeleton height="15px" width="full" />
                  </Td>
                  <Td>
                    <Skeleton height="15px" width="full" />
                  </Td>
                </Tr>
              ))
            ) : Products?.length === 0 ? (
              // Show message if Products is empty
              <Tr>
                <Td colSpan={3} textAlign="center">
                  No records found.
                </Td>
              </Tr>
            ) : (
              // Actual table data (unchanged)
              getPageData()?.map((item, index) => (
                <Tr key={index}>
                  <Td>
                    <Checkbox
                      isChecked={selectedRows.some(
                        (row) =>
                          row.parentProductCode === item.parentProductCode
                      )}
                      onChange={(e) => handleCheckboxChange(e, item)}
                      mt="1"
                      mr="3"
                    />
                    <Link href={`/products/${1}`}>
                      <Box
                        as="spam"
                        _hover={{
                          textDecoration: "underline",
                          color: "blue.500",
                        }}
                      >
                        {item.productCode}
                      </Box>
                    </Link>
                  </Td>
                  <Td>{item.productName}</Td>
                  <Td>{item.parentProduct}</Td>
                  <Td>{item.manufacturer}</Td>
                  <Td>{item.strength}</Td>
                  <Td>{item.countryOfOrigin}</Td>
                </Tr>
              ))
            )}
          </Tbody>
        </Table>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            zIndex: 1,
          }}
          bg="blue.600"
          color={"white"}
          p="2"
        >
          {!selectedRows?.length ? (
            <div></div>
          ) : (
            <IconButton
              isRound={true}
              variant="solid"
              aria-label="Delete"
              fontSize="18px"
              colorScheme="red"
              onClick={handleDeleteSelectedRows}
              size="sm"
              icon={<MdDeleteOutline />}
            />
          )}
          <TablePagination
            totalCount={totalProcedure}
            pageSize={pageSize}
            onPageChange={handlePageChange}
            handlePageSizeChange={handlePageSizeChange}
          />
        </Box>
      </TableContainer>
    </>
  );
}
