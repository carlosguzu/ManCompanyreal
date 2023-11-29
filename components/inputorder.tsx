import React, { useState } from "react";
import { Input, Popover, PopoverTrigger, PopoverContent, Button } from "@nextui-org/react";

const InputOrder = () => {
  const [type, setType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [status, setStatus] = useState("");
  const [popoverMessage, setPopoverMessage] = useState("");

  const handleCreateOrder = async () => {
    // Validar que todos los campos estén llenos
    if (!type || !quantity || !status) {
      setPopoverMessage("Por favor, completa todos los campos.");
      return;
    }

    // Validar que el campo status tenga un valor permitido
    const allowedStatusValues = ["Producing", "On Queue", "Finished"];
    if (!allowedStatusValues.includes(status)) {
      setPopoverMessage("El valor del campo 'status' no es válido. Debe ser 'Producing', 'On Queue' o 'Finished'.");
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
        setPopoverMessage("Orden creada exitosamente");
      } else {
        setPopoverMessage(`Error al crear la orden: ${response.status} ${response.statusText}`);
        const errorData = await response.json();
        console.error("Detalles del error:", errorData);
      }
    } catch (error) {
      setPopoverMessage("Error al enviar la solicitud");
      console.error("Error al enviar la solicitud", error);
    }
  };

  return (
    <div>
      {/* Campos de entrada fuera del Popover para que siempre estén visibles */}
      <Input placeholder="Type" value={type} onChange={(e) => setType(e.target.value)} />
      <br />
      <Input placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      <br />
      <Input placeholder="Status" value={status} onChange={(e) => setStatus(e.target.value)} />
      <br />
      <Popover placement="bottom">
        <PopoverTrigger>
          <Button color="success" onClick={handleCreateOrder} >Crear Orden</Button>
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
