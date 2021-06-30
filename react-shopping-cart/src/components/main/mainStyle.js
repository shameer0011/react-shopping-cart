import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  media: {
    height: 340,
  },
  buttonStyle: {
    display: "flex",
    justifyContent: "space-between",
  },
  prizeStyles: {
    color: "black",
    fontWeight: "bold",
  },
  toRow: {
    display: "flex",
    justifyContent: "space-between",
  },
  topSpacing: {
    marginTop: theme.spacing(1),
  },
}));
