import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Header from "../Header";
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

const Home = (props: any) => {
  const classes = useStyles();
  console.log(props);
  return (
    <div className={classes.root}>
      <Header handleLogout={props.handleLogout} />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Consulta
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="CEP"
                name="email"
                autoComplete="email"
                onChange={event => {
                  props.handleTextChange(event.target.value);
                }}
              />
            </Grid>
          </Grid>
          <Button
            disabled={props.disabled}
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={props.handleSearch}
          >
            Consultar CEP
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Home;
