import React from "react";
import { useStyles } from "./cardStyle";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
const Cards = props => {
  const { item, index, cartLabel, onClick } = props;
  const classes = useStyles();
  const cardClick = () => {
    onClick(item, index);
  };
  return (
    <div>
      <Card className={classes.root} onClick={cardClick}>
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
            <Typography variant="body2" color="textSecondary" component="p">
              {item.description}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {item.availableSizes.join(" ,")}
            </Typography>
          </CardContent>
          <div className={classes.buttonStyle}>
            <Button variant="contained" className={classes.prizeStyles}>
              {`${item.price} $`}
            </Button>
            <Button variant="contained" color="primary">
              {cartLabel}
            </Button>
          </div>
        </CardActionArea>
      </Card>
    </div>
  );
};
export default Cards;
