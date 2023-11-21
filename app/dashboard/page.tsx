"use client";
import { useUser } from "@clerk/nextjs";
import { title } from "@/components/primitives";
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";
import { EditIcon } from "../EditIcon";
import { DeleteIcon } from "../DeleteIcon";
import OrderTable from "@/components/ordertable";
import Pie from "@/components/pie";
import {rows, columns, finishedOrders, producingOrders, onQueueOrders, totalOrders} from "@/components/data";

/*import EyeIcon from "../EyeIcon";*/

export default function DashboardPage() {
	const { isLoaded, isSignedIn, user } = useUser();


	if (!isLoaded || !isSignedIn) {
		return null; /*no entra pq esta página está escondida si no tienes acceso y te redirige a /.*/
	  }
	  
  return (
	
    <section className="py-24 ">
		<div>
			<h1 className={title()}>Dashboard</h1>
			<p>Welcome, {user.firstName}</p>
    </div>
      <div className="container">
		<OrderTable/>
      </div>
      <div className="container">
      <Pie/>
      </div>
      <div>
          <h2>Orders Summary:</h2>
          <p>Finished Orders: {finishedOrders}</p>
          <p>Producing Orders: {producingOrders}</p>
          <p>On queue Orders: {onQueueOrders}</p>
          <p>Total Orders: {totalOrders}</p>
        </div>
    </section>
	
  );
}
