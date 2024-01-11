import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
import { Button } from "../styles/Button";
import { Box } from "@mui/material";

const FilterSection = () => {
  const {
    filters: { text, category },
    updateFilterValue,
    all_products,
    clearFilters,
  } = useFilterContext();

  const getUniqueValue = (data, property) => {
    let newVal = data.map((curElm, index) => {
      return curElm[property];
    });

    return (newVal = ["all", ...new Set(newVal)]);
  };

  const categoryData = getUniqueValue(all_products, "category");
  const companyData = getUniqueValue(all_products, "company");

  return (
    <Wrapper>
      <Box className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            value={text}
            onChange={updateFilterValue}
            placeholder="Search"
          />
        </form>
      </Box>
      <Box className="filter-category">
        <h3>Category</h3>
        <Box>
          {categoryData.map((val, index) => {
            return (
              <button
                key={index}
                type="buttton"
                name="category"
                value={val}
                onClick={updateFilterValue}
                className={val === category ? "active" : ""}
              >
                {val}
              </button>
            );
          })}
        </Box>
      </Box>
      <Box className="filter-company">
        <h3>Company</h3>
        <form>
          <select
            name="company"
            id="company"
            className="filter-company--select"
            onClick={updateFilterValue}
          >
            {companyData.map((elm, index) => {
              return (
                <option value={elm} name="company" key={index}>
                  {elm}
                </option>
              );
            })}
          </select>
        </form>
      </Box>
      <Box className="filter-clear">
        <Button className="btn" onClick={clearFilters}>
          Clear Filters
        </Button>
      </Box>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  h3 {
    padding: 2rem 0;
    font-size: bold;
  }
  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }
  .filter-category {
    Box {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;
      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;
        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }
      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }
  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }
  .filter-color-style {
    display: flex;
    justify-content: center;
  }
  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }
  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }
  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }
`;

export default FilterSection;