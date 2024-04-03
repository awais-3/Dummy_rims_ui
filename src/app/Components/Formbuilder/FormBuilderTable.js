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
import { MilestoneListData } from "../../assets/Data/index";
import { MdDeleteOutline } from "react-icons/md";
import TablePagination from "../Common/TablePagination";

export default function FormBuilderTable() {
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProcedure, setTotalProcedure] = useState(
    MilestoneListData?.length
  );
  const [Milestones, setMilestones] = useState();
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const getPageData = () => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return Milestones?.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setTimeout(() => {
      setMilestones(MilestoneListData);
      setIsLoading(false);
    }, 2000);
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
      setSelectedRows(selectedRows.filter((row) => row.id !== item.id));
    }
  };

  const handleSelectAll = (e) => {
    const { checked } = e.target;
    setSelectAll(checked);
    if (checked) {
      setSelectedRows([...Milestones]);
    } else {
      setSelectedRows([]);
    }
  };

  const handleDeleteSelectedRows = () => {
    const updatedData = Milestones.filter(
      (row) => !selectedRows.some((selectedRow) => selectedRow.id === row.id)
    );
    setMilestones(updatedData);
    setTotalProcedure(updatedData.length);
    setSelectedRows([]);
    setSelectAll(false);
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
            <Text whiteSpace={"nowrap"}>Sort by:</Text>
            <Select>
              <option value={5}>Created</option>
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

                <span>Builder Name</span>
              </Th>
              <Th color="white">Feilds Count</Th>
              <Th color="white">Created By</Th>
              <Th color="white">Used in (Count)</Th>
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
                </Tr>
              ))
            ) : Milestones?.length === 0 ? (
              // Show message if Milestones is empty
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
                      isChecked={selectedRows.some((row) => row.id === item.id)}
                      onChange={(e) => handleCheckboxChange(e, item)}
                      mt="1"
                      mr="3"
                    />
                    {/* <Link href={`/milestones/${1}`}>
                      <Box
                        as="spam"
                        _hover={{
                          textDecoration: "underline",
                          color: "blue.500",
                        }}
                      > */}
                    {item.templateName}
                    {/* </Box>
                    </Link> */}
                  </Td>
                  <Td>{item.milestoneCount}</Td>
                  <Td>{item.createdBy}</Td>
                  <Td>{item.usedInCount}</Td>
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
