import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";
import { Box } from "@mui/material";

const Product = (curElem) => {
  const { id, name, image, price, category } = curElem;

  return (
    <NavLink to={`/singleproduct/${id}`}>
      <Box className="card">
        <figure>
          <img src={image} alt={name} />
          <figcaption className="caption">{category}</figcaption>
        </figure>

        <Box className="card-data">
          <Box className="card-data-flex">
            <h3>{name}</h3>
            <p>
              <FormatPrice price={price} />
            </p>
          </Box>
        </Box>
      </Box>
    </NavLink>
  );
};

export default Product;
