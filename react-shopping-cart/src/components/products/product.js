import React from "react";
import Cards from "../card/card";
import { useStyles } from "./productStyle";
import { Grid } from "@material-ui/core";

const Products = ({ product, cartLabel ,addTocardForStateFn}) => {

  const handleClick = (item, index) => {
    console.log(item, index);
  };
  const classes = useStyles();

  const addToCard =(item)=>{
    console.log("add to cart buitton in product",item)
    addTocardForStateFn(item)

  }
  return (
    <>
      <Grid container>
        {product.map((item, index) => (
          <Grid item key={index} xs={4} style={{ marginBottom: 12 }}>
            <Cards
              item={item}
              index={index}
              cartLabel={cartLabel}
              onClick={handleClick}
              addToCardButton ={addToCard}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
export default Products;
