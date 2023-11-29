import { useEffect, useState } from 'react';

interface ApiOrder {
  id: number;
  type: string;
  quantity: number;
  status: string;
}

export function useOrdersData() {
  const [rows, setRows] = useState<ApiOrder[]>([]);

  useEffect(() => {
    fetch('https://backkk-6ooc.onrender.com/orders/?skip=0&')
      .then(response => response.json())
      .then(data => setRows(data));
  }, []);

  const columns = [
    {
      key: "id",
      label: "ID",
    },
    {
      key: "type",
      label: "TYPE",
    },
    {
      key: "quantity",
      label: "QUANTITY",
    },
    {
      key: "status",
      label: "STATUS",
    },
  ];

  const finishedOrders = rows.filter((order) => order.status === "Finished").length;
  const producingOrders = rows.filter((order) => order.status === "Producing").length;
  const onQueueOrders = rows.filter((order) => order.status === "On Queue").length;
  const totalOrders = rows.length;

  const rowlen = [
    { key: finishedOrders, label: "Finished" },
    { key: producingOrders, label: "Producing" },
    { key: onQueueOrders, label: "On Queue" },
  ];

  return { rows, columns, finishedOrders, producingOrders, onQueueOrders, totalOrders, rowlen };
}
