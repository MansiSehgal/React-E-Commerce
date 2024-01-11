import React from "react";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";
import FormatPrice from "../Helpers/FormatPrice";
import CartAmountToggle from "./CartAmountToggle";
import { Box } from "@mui/material";

const CartItem = ({ id, name, image, color, price, quantity }) => {
  const { removeItem, setIncrease, setDecrease } = useCartContext();

  return (
    <Box className="cart_heading grid grid-five-column">
      <Box className="cart-image--name">
        <Box>
          <figure>
            <img src={image} alt={id} />
          </figure>
        </Box>
        <Box>
          <p>{name}</p>
          <Box className="color-Box">
            <p>color:</p>
            <Box
              className="color-style"
              style={{ backgroundColor: color, color: color }}
            ></Box>
          </Box>
        </Box>
      </Box>
      {/* price   */}
      <Box className="cart-hide">
        <p>
          <FormatPrice price={price} />
        </p>
      </Box>

      {/* Quantity  */}
      <CartAmountToggle
        quantity={quantity}
        setDecrease={() => setDecrease(id)}
        setIncrease={() => setIncrease(id)}
      />

      {/* //Subtotal */}
      <Box className="cart-hide">
        <p>
          <FormatPrice price={price * quantity} />
        </p>
      </Box>

      <Box>
        <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
      </Box>
    </Box>
  );
};

export default CartItem;
