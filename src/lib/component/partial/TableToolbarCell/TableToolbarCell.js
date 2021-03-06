import React from "/vendor/react";
import PropTypes from "prop-types";
import classnames from "/vendor/classnames";
import { withStyles, TableCell } from "/vendor/@material-ui/core";

const styles = theme => {
  const bgColor = theme.palette.background.paper;

  return {
    root: {
      position: "relative",
    },
    container: {
      display: "flex",
      paddingLeft: theme.spacing(1.5),
      paddingRight: theme.spacing(1.5),
    },
    floating: {
      top: 0,
      right: 0,
      position: "absolute",
      backgroundColor: bgColor,
      boxShadow: `
        ${theme.spacing(-4)}px
        0px
        ${theme.spacing(2)}px
        ${theme.spacing(-1)}px
        ${bgColor}
      `,
      overflow: "hidden",
    },
  };
};

class TableToolbarCell extends React.Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    floating: PropTypes.bool,
  };

  static defaultProps = {
    className: undefined,
    disabled: false,
    floating: false,
  };

  renderCell = () => {
    const { children: childrenProp, classes, floating } = this.props;
    const className = classnames(classes.container, {
      [classes.floating]: floating,
    });

    return <div className={className}>{childrenProp()}</div>;
  };

  render() {
    const {
      classes,
      className: classNameProp,
      disabled,
      floating,
      ...props
    } = this.props;

    return (
      <TableCell
        padding="none"
        className={classnames(classes.root, classNameProp)}
        {...props}
      >
        {!disabled && this.renderCell()}
      </TableCell>
    );
  }
}

export default withStyles(styles)(TableToolbarCell);
