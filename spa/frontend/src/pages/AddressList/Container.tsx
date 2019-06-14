import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link as RouterLink } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Card from "../../components/Card";
import { Address } from "../../store/ducks/address/types";
import Header from "../../components/Header";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    },
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(3)
    },
    submit: {
      margin: theme.spacing(3, 0, 2)
    }
  })
);

const AddressList = (props: any) => {
  const classes = useStyles();
  const { addresses } = props;
  return (
    <div className={classes.root}>
      <Header handleLogout={props.handleLogout} />

      <Container
        fixed
        style={{
          padding: 30,
          flexWrap: "wrap",
          justifyContent: "space-around",
          justifyItems: "space-around"
        }}
      >
        {addresses.map((address: Address) => (
          <Card address={address} />
        ))}
      </Container>
    </div>
  );
};

export default AddressList;
