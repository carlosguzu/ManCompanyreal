"use client";
import React from 'react';
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";
import {useOrdersData} from "./data";
import { EditIcon } from "../app/EditIcon";
import { DeleteIcon } from "../app/DeleteIcon";
import {EyeIcon} from "../app/EyeIcon";




export default function OrderTable() {
 // Desestructura los valores que necesitas de useOrdersData
 const { rows, columns} = useOrdersData();  

  return (
    
    <Table aria-label="Example table with dynamic content">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
