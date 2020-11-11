import React from "react";

import Grid from "@material-ui/core/Grid";
import Png2 from "../../images/header_img.png";

import { Button } from "@dhis2/ui";

import styles from "./styles.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <Grid container spacing={4}>
          <Grid item className={styles.textField} item xs={12} sm={12} md={6}>
            <h1 className={styles.title}>DHIS2 UI tutorial</h1>
            <p classname={styles.paragraph}>
              In these tutorials you will get design knowledge about how to
              develop applications in align with the UI guidelines. In addition
              to some theoretical material, you will also be given real life
              code examples that you can try out directly in the browser
            </p>
            <Button dataTest="dhis2-uicore-button" primary type="button">
              Go to courses
            </Button>
          </Grid>
          <Grid item className={styles.img} item xs={12} sm={12} md={6}>
            <img src={Png2} style={{ maxWidth: "100%" }} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Header;
