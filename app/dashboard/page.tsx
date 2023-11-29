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
import OrderTable from "@/components/ordertable";
import Pie from "@/components/pie";
import {useOrdersData} from "@/components/data";
import InputOrder from "@/components/inputorder";



export default function DashboardPage() {
	const { isLoaded, isSignedIn, user } = useUser();
// Desestructura los valores que necesitas de useOrdersData
const {finishedOrders, producingOrders, onQueueOrders, totalOrders, rowlen } = useOrdersData();  


	if (!isLoaded || !isSignedIn) {
		return null; /*no entra pq esta página está escondida si no tienes acceso y te redirige a /.*/
	  }
	  
    return (
      <section className="py-20">
        <div className="text-center mb-12">
          <h1 className={title()}>Dashboard</h1>
          <p>Welcome, {user.firstName}</p>
        </div>
    
        <div className="flex justify-center gap-16 mr-12">
          <div className="container ">
            <OrderTable />
          </div>
    
         <div className="container mr-10">
            <Pie />
          </div>
    
          <div className="container">
            <div>
              <h2 className="text-xl font-bold mb-4">Orders Summary:</h2>
              <p className="mb-2">Finished Orders: {finishedOrders}</p>
              <p className="mb-2">Producing Orders: {producingOrders}</p>
              <p className="mb-2">On Queue Orders: {onQueueOrders}</p>
              <p>Total Orders: {totalOrders}</p>
            </div>
          </div>
          <div className="container mr-10">
          <InputOrder/>
          </div>
        </div>
      </section>
    );
    
    
}
