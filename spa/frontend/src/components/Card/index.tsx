import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Address } from "../../store/ducks/address/types";
const useStyles = makeStyles(
  createStyles({
    card: {
      minWidth: 275
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)"
    },
    title: {
      fontSize: 14
    },
    pos: {
      marginBottom: 12
    }
  })
);

const SimpleCard = (props: any) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const { address } = props;
  return (
    <Card className={classes.card} style={{ marginTop: 20 }}>
      <CardContent>
        <Typography variant="h5" component="h2">
          CEP
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {address.postalcode}
        </Typography>
        <Typography variant="h5" component="h2">
          Rua
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {address.street}
        </Typography>
        <Typography variant="h5" component="h2">
          Bairro
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {address.district}
        </Typography>
        <Typography variant="h5" component="h2">
          GIA
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {address.gia}
        </Typography>{" "}
        <Typography variant="h5" component="h2">
          IBGE
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {address.ibge}
        </Typography>
        <Typography variant="h5" component="h2">
          UF
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {address.uf}
        </Typography>
        <Typography variant="h5" component="h2">
          Unidade
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {address.unity}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SimpleCard;
