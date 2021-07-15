import React, { useState } from "react";
import data from "../../data.json";
import Cart from "../cart/cart";
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

  const [product, setProduct] = useState(data.products);
  const [price, setPrice] = useState("");
  // Two way to set get item..
  // First way
  const [addToCart, setAddToCart] = useState(
    JSON.parse(localStorage.getItem("cartItems"))
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );
  // second way
  // const [addToCart, setAddToCart] = useState([]);

  // useEffect(() => {
  //   const localRepoItems = localStorage.getItem("cartItems");
  //   if (localRepoItems) {
  //     setAddToCart(JSON.parse(localRepoItems));
  //   }
  // }, []);

  console.log("state", addToCart);

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
  };
  const priceData = (state, e, values) => {
    setPrice(e);
    if (price == "HIGH") {
      // comimg from slow..so create prize state
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

  const addTocardForStateFn = productItems => {
    const cartItems = addToCart.slice();
    let alreadyCartItems = false;

    cartItems.forEach(item => {
      if (item.id === productItems.id) {
        item.count++;
        alreadyCartItems = true;
      }
    });
    if (!alreadyCartItems) {
      cartItems.push({ ...productItems, count: 1 });
    }
    setAddToCart(cartItems);
    // localStorage.setItem(JSON.stringify("cartItems"), addToCart);
    // localStorage.setItem("cartItems", JSON.stringify(addToCart)); // comimg from slow..
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  const removeButton = item => {
    const cartItemRemove = addToCart.slice();
    const cartItems = cartItemRemove.filter(product => product.id !== item.id);
    setAddToCart(cartItems);
    // localStorage.setItem("cartItems", JSON.stringify(addToCart));
    localStorage.setItem(
      "cartItems",
      JSON.stringify(cartItemRemove.filter(product => product.id !== item.id))
    );
  };
  const checkoutFormToMain = formItems => {
    console.log(formItems, "in main");
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
              <Products
                product={product}
                cartLabel={cartLabel}
                addTocardForStateFn={addTocardForStateFn}
              />
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Cart
              cartElements={addToCart}
              removeButton={removeButton}
              checkoutFormToMain={checkoutFormToMain}
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
export default Main;
