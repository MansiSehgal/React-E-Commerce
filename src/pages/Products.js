import styled from "styled-components";
import FilterSection from "../components/FilterSection";
import ProductList from "../components/ProductList";
import Sort from "../components/Sort";
import { useFilterContext } from "../context/filter_context";
import ReactLoading from "react-loading";
import { Box } from "@mui/material";

const Products = () => {
  const { filter_products } = useFilterContext();
  // if(filter_products){
  //   return(
  //     <>
  //       <Wrapper>
  //         <Box className="main-product">
  //           <Box className="loading">
  //           <ReactLoading type="bubbles" color="#000" />
  //           </Box>
  //         </Box>
  //       </Wrapper>
  //     </>
  //   )
  // }

  return (
    <Wrapper>
      <Box className="container grid grid-filter-column">
        <Box>
          <FilterSection />
        </Box>

        <section className="product-view--sort">
          <Box className="sort-filter">
            <Sort />
          </Box>
          <Box className="main-product">
            {filter_products.length > 0 ? (
              <>
                <ProductList filter_products={filter_products} />
              </>
            ) : (
              <Box className="loading">
                <ReactLoading type="bubbles" color="#000" />
              </Box>
            )}
          </Box>
        </section>
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;
