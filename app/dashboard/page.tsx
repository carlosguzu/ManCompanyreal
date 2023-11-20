"use client";
import { useUser  } from "@clerk/nextjs";
import { title } from "@/components/primitives";
import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";
import {EditIcon} from "../EditIcon";
import {DeleteIcon} from "../DeleteIcon";
import EyeIcon from "../EyeIcon";
function DashboardPage() {
	const { isLoaded, isSignedIn, user } = useUser();

	
	  
	const rows = [
		{
		  key: "1",
		  name: "Tony Reichert",
		  role: "CEO",
		  status: "Active",
		},
		{
		  key: "2",
		  name: "Zoey Lang",
		  role: "Technical Lead",
		  status: "Paused",
		},
		{
		  key: "3",
		  name: "Jane Fisher",
		  role: "Senior Developer",
		  status: "Active",
		},
		{
		  key: "4",
		  name: "William Howard",
		  role: "Community Manager",
		  status: "Vacation",
		},
	  ];
	  
	  const columns = [
		{
		  key: "name",
		  label: "NAME",
		},
		{
		  key: "role",
		  label: "ROLE",
		},
		{
		  key: "status",
		  label: "STATUS",
		},
	  ];
  
	
	  if (!isLoaded || !isSignedIn) {
		return null; /*no entra pq esta página está escondida si no tienes acceso y te redirige a /.*/
	  }
	  
	return (

		<section>
		<div>
			<h1 className={title()}>Dashboard</h1>
			<p>Welcome, {user.firstName}</p>
    </div>
	<div>
    <Table aria-label="Example table with dynamic content ">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
	</div>
	</section>
  );
}











export default DashboardPage;





