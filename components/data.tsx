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
    fetch('http://127.0.0.1:8000/orders/?skip=0&limit=10s')
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
  const onQueueOrders = rows.filter((order) => order.status === "On queue").length;
  const totalOrders = rows.length;

  const rowlen = [
    { key: finishedOrders, label: "Finished" },
    { key: producingOrders, label: "Producing" },
    { key: onQueueOrders, label: "On queue" },
  ];

  return { rows, columns, finishedOrders, producingOrders, onQueueOrders, totalOrders, rowlen };
}
