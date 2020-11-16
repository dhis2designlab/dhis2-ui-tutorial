import React from "react";

import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

function BreadCrumb({ title, breadcrumb }) {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/home">
        Home
      </Link>
      <Link color="inherit" href="/course/6">
        {title}
      </Link>
      {breadcrumb && <Typography color="textPrimary">{breadcrumb}</Typography>}
    </Breadcrumbs>
  );
}

export default BreadCrumb;
