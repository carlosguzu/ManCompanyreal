const rows = [
    {
      id: "1",
      type: "Whiskey",
      quantity: 600, 
      status: "Producing",
    },
    {
      id: "2",
      type: "Vodka",
      quantity: 200, 
      status: "On queue",
    },
    {
      id: "3",
      type: "Rum",
      quantity: 300, 
      status: "Finished",
    },
    {
      id: "4",
      type: "Gin",
      quantity: 450, 
      status: "Producing",
    },
  ];
  
  
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


  

  export {rows, columns, finishedOrders, producingOrders, onQueueOrders, totalOrders, rowlen};