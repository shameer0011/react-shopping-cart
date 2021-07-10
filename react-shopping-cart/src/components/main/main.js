import React, { useState } from "react";
import data from "../../data.json";
import Products from "../products/product";
import SelectComponent from "../select/select";
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
  const [size, setSize] = useState("");
  const [sort, setSort] = useState("");

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
                <SelectComponent values={values} sizes={formHelperText} />
              </div>
              <div>
                <selectComponent values={prize} sizes={formHelperTextPrize} />
              </div>
              <div>
                <SelectComponent
                  values={mediaTypes}
                  sizes={formHelperTextMedia}
                />
              </div>
              <div>
                <SelectComponent
                  values={rowTypes}
                  sizes={formHelperTextRowTypes}
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
