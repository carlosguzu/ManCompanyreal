"use client";
import React from 'react';
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue, Spinner} from "@nextui-org/react";
import {useOrdersData} from "./data";
import { EditIcon } from "../app/EditIcon";
import { DeleteIcon } from "../app/DeleteIcon";
import {EyeIcon} from "../app/EyeIcon";

export default function OrderTable() {
  const [isLoading, setIsLoading] = React.useState(true);
  const { rows, columns } = useOrdersData();

  React.useEffect(() => {
    if (rows.length > 0) {
      setIsLoading(false);
    }
  }, [rows]);

  return (
    <Table aria-label="Example table with dynamic content">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody
        items={rows}
        isLoading={isLoading}
        loadingContent={<Spinner label="Loading..." />}
      >
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
