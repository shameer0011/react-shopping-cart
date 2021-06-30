import React from "react";
import { useStyles } from "./mainStyle";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import SelectComponent from "../select/select";
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
  csv
}) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.content}>
      <Grid item xs={9}>
        <div className={classes.toRow}>
          <div>{title}</div>
          <div>
            <SelectComponent values={values} sizes={formHelperText} />
          </div>
          <div>
            <SelectComponent values={prize} sizes={formHelperTextPrize} />
          </div>
          <div>
            <SelectComponent values={mediaTypes} sizes={formHelperTextMedia} />
          </div>
          <div>
            <SelectComponent values={rowTypes} sizes={formHelperTextRowTypes} />
          </div>
          <div>
          <Button className={classes.topSpacing} variant="contained" color="primary">
         {csv}
         </Button>
          </div>
        </div>
        <Grid container className={classes.rowItem}>
          {data.products.map((item, index) => {
            return (
              <>
                <Grid
                  item
                  xs={4}
                  key={index}
                  spacing={2}
                  style={{ padding: 7 }}
                >
                  <Paper elevation={3}>
                    <Card className={classes.root}>
                      <CardActionArea>
                        <CardMedia
                          className={classes.media}
                          image={item.image}
                          title="Contemplative Reptile"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            {item.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            {item.description}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            {item.availableSizes.join(" ,")}
                          </Typography>
                        </CardContent>
                        <div className={classes.buttonStyle}>
                          <Button
                            variant="contained"
                            className={classes.prizeStyles}
                          >
                            {`${item.price} $`}
                          </Button>
                          <Button variant="contained" color="primary">
                            {cartLabel}
                          </Button>
                        </div>
                      </CardActionArea>
                    </Card>
                  </Paper>
                </Grid>
              </>
            );
          })}
        </Grid>
      </Grid>
      <Grid item xs={3}>
        {sidebar}
      </Grid>
    </Grid>
  );
};
export default Main;
