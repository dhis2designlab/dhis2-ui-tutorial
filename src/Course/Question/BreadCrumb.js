import React from "react";

import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Link } from "react-router-dom";


function BreadCrumb({ title, breadcrumb, section }) {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link to={{pathname: `/home`}}>
        Home
      </Link>
      <Typography color="textPrimary">
        {title}
      </Typography>
      {section && <Typography color="textPrimary">{section}</Typography>}
      {breadcrumb && <Typography color="textPrimary">{breadcrumb}</Typography>}
    </Breadcrumbs>
  );
}

export default BreadCrumb;
