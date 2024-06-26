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
} from "@chakra-ui/react";
import { ProcedureListData } from "../../assets/Data/ProcedureListData";
import { MdDeleteOutline } from "react-icons/md";
import TablePagination from "../Common/TablePagination";
import Link from "next/link";

export default function ProcedureTable() {
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProcedure, setTotalProcedure] = useState(
    ProcedureListData?.length
  );
  const [Procedures, setProcedures] = useState();
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const getPageData = () => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return Procedures?.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setTimeout(() => {
      setProcedures(ProcedureListData);
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
      setSelectedRows([...Procedures]);
    } else {
      setSelectedRows([]);
    }
  };

  const handleDeleteSelectedRows = () => {
    const updatedData = Procedures.filter(
      (row) => !selectedRows.some((selectedRow) => selectedRow.id === row.id)
    );
    setProcedures(updatedData);
    setTotalProcedure(updatedData.length);
    setSelectedRows([]);
    setSelectAll(false);
  };

  return (
    <>
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
                <span>Procedure Type</span>
              </Th>
              <Th color="white">Product Code</Th>
              <Th color="white">Product Name</Th>
              <Th color="white">Generic Name</Th>
              <Th color="white">Strength</Th>
              <Th color="white">Pharmaceutical Form</Th>
              <Th color="white">Pack Size</Th>
              <Th color="white">Product Type</Th>
              <Th color="white">Country</Th>
            </Tr>
          </Thead>
          <Tbody>
            {isLoading ? (
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
            ) : Procedures?.length === 0 ? (
              // Show message if Procedures is empty
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
                    <Link href={`/procedures/${item.id}`}>
                      <Box
                        as="span"
                        _hover={{
                          textDecoration: "underline",
                          color: "blue.500",
                        }}
                      >
                        {item.procedureType}
                      </Box>
                    </Link>
                  </Td>
                  <Td>{item.productCode}</Td>
                  <Td>{item.productName}</Td>
                  <Td>{item.genericName}</Td>
                  <Td>{item.strength}</Td>
                  <Td>{item.pharmaceuticalForm}</Td>
                  <Td>{item.packSize}</Td>
                  <Td>{item.productType}</Td>
                  <Td>{item.country}</Td>
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
