import React, { useState } from "react";
import data from "../../data.json";
import Products from "../products/product";
import Selects from "../ui/select/select";
import { useStyles } from "./mainStyle";
import { Paper } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
const Main = ({
  title,
  sidebar,
  data,
  cartLabel,
  //size
  values,
  formHelperText,
  //price
  prize,
  formHelperTextPrize,
  //footer/product
  mediaTypes,
  formHelperTextMedia,
  //display size
  rowTypes,
  formHelperTextRowTypes,
  csv,
}) => {
  const classes = useStyles();
  // const { changeValues } = props;
  const [product, setProduct] = useState(data.products);
  console.log(product, "product");
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");
  console.log(price);

  const reciveData = (val, e) => {
    if (e == "None") {
      setProduct(data.products);
    }
    if (e) {
      var newArray = data.products.slice().filter(el => {
        return el.availableSizes.indexOf(e) >= 0;
      });
      setProduct(newArray);
    }
  };

  const clickItem = values => {
    // logic for click items
    // console.log(values, "valuess");
  };
  const priceData = (state, e, values) => {
    setPrice(e);
    if (price == "HIGH") {
      const prize = product.sort(
        (a, b) => (a.price > b.price ? 1 : b.price > a.price ? -1 : 0)
      );
      setProduct(prize);
    } else if (price == "MEDIUM") {
      console.log("Medium");
    } else {
      const prize = product.sort(
        (a, b) => (a.price < b.price ? 1 : b.price < a.price ? -1 : 0)
      );
      setProduct(prize);
    }
  };

  const mediaData = (state, e, values) => {
    console.log("media", state, e, values);
  };

  const rowTypesData = (state, e, values) => {
    console.log("rowTypes", state, e, values);
  };

  return (
    <div>
      <Grid container>
        <Grid item xs={8}>
          <Paper>
            <div className={classes.toRow}>
              <div>{title}</div>
              {/* <div> */}
              {/* <Carousal title={titleShow} body={body}></Carousal>; */}
              {/* </div> */}
              <div>
                <Selects
                  change={reciveData}
                  sizes={values}
                  clickOneItem={clickItem}
                />
              </div>
              <div>
                <Selects
                  change={priceData}
                  sizes={prize}
                  clickOneItem={clickItem}
                />
              </div>
              <div>
                <Selects
                  change={mediaData}
                  sizes={mediaTypes}
                  clickOneItem={clickItem}
                />
              </div>
              <div>
                <Selects
                  change={rowTypesData}
                  sizes={rowTypes}
                  clickOneItem={clickItem}
                />
              </div>
              <div>
                <Button
                  className={classes.topSpacing}
                  variant="contained"
                  color="primary"
                >
                  {csv}
                </Button>
              </div>
            </div>
            <Grid item>
              <Products product={product} cartLabel={cartLabel} />
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>ADD TO CART</Paper>
        </Grid>
      </Grid>
    </div>
  );
};
export default Main;
