import React from "/vendor/react";
import PropTypes from "prop-types";
import { withStyles, Typography } from "/vendor/@material-ui/core";

const styles = theme => ({
  root: {
    textAlign: "center",
    padding: theme.spacing(3),
    maxWidth: 480,
    margin: "0 auto",
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(14),
      paddingBottom: theme.spacing(14),
    },
  },
  icon: {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "2rem",
  },
  line: {
    margin: theme.spacing(1),
  },
});

export class TableListItem extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    primary: PropTypes.string.isRequired,
    secondary: PropTypes.string,
    loading: PropTypes.bool,
  };

  static defaultProps = {
    secondary: null,
    loading: false,
  };

  render() {
    const { classes, primary, secondary, loading } = this.props;

    return (
      <div
        className={classes.root}
        style={{ visibility: loading ? "hidden" : "visible" }}
      >
        <span
          className={`${classes.icon} ${classes.line}`}
          role="img"
          aria-label="exclaimation"
        >
          ⁉️
        </span>
        <Typography className={classes.line} variant="h6">
          {primary}
        </Typography>
        <Typography className={classes.line} variant="body2">
          {secondary}
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(TableListItem);
