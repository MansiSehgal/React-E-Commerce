import { Box } from "@mui/material";
import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartAmountToggle = ({ quantity, setDecrease, setIncrease }) => {
  return (
    <Box className="cart-button">
      <Box className="amount-toggle">
        <button onClick={() => setDecrease()}>
          <FaMinus />
        </button>
        <Box className="amount-style">{quantity}</Box>
        <button onClick={() => setIncrease()}>
          <FaPlus />
        </button>
      </Box>
    </Box>
  );
};

export default CartAmountToggle;
