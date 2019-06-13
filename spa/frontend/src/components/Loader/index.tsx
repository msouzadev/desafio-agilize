import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2)
  }
}));

class PageLoader extends Component {
  render() {
    return (
      <div>
        <CircularProgress />
        <CircularProgress color="secondary" />
      </div>
    );
  }
}
export default PageLoader;
