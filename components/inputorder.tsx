import React, { useState } from "react";
import { Input, Popover, PopoverTrigger, PopoverContent, Button } from "@nextui-org/react";

const InputOrder = () => {
  const [type, setType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [status, setStatus] = useState("");
  const [popoverMessage, setPopoverMessage] = useState("");

  const handleCreateOrder = async () => {
    // Validate that all fields are filled
    if (!type || !quantity || !status) {
      setPopoverMessage("Please fill in all fields.");
      return;
    }

    // Validate that the status field has an allowed value
    const allowedStatusValues = ["Producing", "On Queue", "Finished"];
    if (!allowedStatusValues.includes(status)) {
      setPopoverMessage("The value of the 'status' field is not valid. It should be 'Producing', 'On Queue', or 'Finished'.");
      return;
    }

    try {
      const response = await fetch("https://backkk-6ooc.onrender.com/orders/", {
        method: "POST",
        body: JSON.stringify({
          type,
          quantity,
          status,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        setPopoverMessage("Order created successfully");
      } else {
        setPopoverMessage(`Error creating the order: ${response.status} ${response.statusText}`);
        const errorData = await response.json();
        console.error("Error details:", errorData);
      }
    } catch (error) {
      setPopoverMessage("Error sending the request");
      console.error("Error sending the request", error);
    }
  };

  return (
    <div>
      {/* Input fields outside the Popover so they are always visible */}
      <Input placeholder="Type" value={type} onChange={(e) => setType(e.target.value)} />
      <br />
      <Input placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      <br />
      <Input placeholder="Status" value={status} onChange={(e) => setStatus(e.target.value)} />
      <br />
      <Popover placement="bottom">
        <PopoverTrigger>
          <Button color="success" onClick={handleCreateOrder}>Create Order</Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="px-1 py-2">
            <div className="text-small font-bold">{popoverMessage}</div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default InputOrder;
