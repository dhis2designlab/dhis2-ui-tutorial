import React from "react";

import Grid from "@material-ui/core/Grid";
import { TabBar, Tab } from "@dhis2/ui";

import styles from "./styles.module.css";

function TabBarComponent() {
  return (
    <Grid className={styles.container} xs={12} sm={12} md={12}>
      <div className={styles.box}>
        <Grid item xs={12} sm={12} md={12}>
          <h4>TabBar</h4>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <p>Default (fluid)</p>
          <TabBar dataTest="dhis2-uicore-tabbar">
            <Tab
              dataTest="dhis2-uicore-tab"
              onClick={function onClick() {
                console.log("click");
              }}
            >
              Tab A
            </Tab>
            <Tab
              dataTest="dhis2-uicore-tab"
              onClick={function onClick() {
                console.log("click");
              }}
            >
              Tab B
            </Tab>
            <Tab
              dataTest="dhis2-uicore-tab"
              onClick={function onClick() {
                console.log("click");
              }}
              selected
            >
              Tab C
            </Tab>
            <Tab
              dataTest="dhis2-uicore-tab"
              onClick={function onClick() {
                console.log("click");
              }}
            >
              Tab D
            </Tab>
            <Tab
              dataTest="dhis2-uicore-tab"
              onClick={function onClick() {
                console.log("click");
              }}
            >
              Tab E
            </Tab>
            <Tab
              dataTest="dhis2-uicore-tab"
              onClick={function onClick() {
                console.log("click");
              }}
            >
              Tab F
            </Tab>
            <Tab
              dataTest="dhis2-uicore-tab"
              onClick={function onClick() {
                console.log("click");
              }}
            >
              Tab G
            </Tab>
          </TabBar>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <p>Tabs with scroller</p>
          <TabBar dataTest="dhis2-uicore-tabbar" scrollable>
            <Tab
              dataTest="dhis2-uicore-tab"
              onClick={function onClick() {
                console.log("click");
              }}
            >
              Tab A
            </Tab>
            <Tab
              dataTest="dhis2-uicore-tab"
              onClick={function onClick() {
                console.log("click");
              }}
            >
              Tab B
            </Tab>
            <Tab
              dataTest="dhis2-uicore-tab"
              onClick={function onClick() {
                console.log("click");
              }}
            >
              Tab C
            </Tab>
            <Tab
              dataTest="dhis2-uicore-tab"
              onClick={function onClick() {
                console.log("click");
              }}
            >
              Tab D
            </Tab>
            <Tab
              dataTest="dhis2-uicore-tab"
              onClick={function onClick() {
                console.log("click");
              }}
            >
              Tab E
            </Tab>
            <Tab
              dataTest="dhis2-uicore-tab"
              onClick={function onClick() {
                console.log("click");
              }}
            >
              Tab F
            </Tab>
            <Tab
              dataTest="dhis2-uicore-tab"
              onClick={function onClick() {
                console.log("click");
              }}
            >
              Tab G
            </Tab>
            <Tab
              dataTest="dhis2-uicore-tab"
              onClick={function onClick() {
                console.log("click");
              }}
            >
              Tab H
            </Tab>
            <Tab
              dataTest="dhis2-uicore-tab"
              onClick={function onClick() {
                console.log("click");
              }}
            >
              Tab I
            </Tab>
            <Tab
              dataTest="dhis2-uicore-tab"
              onClick={function onClick() {
                console.log("click");
              }}
            >
              Tab J
            </Tab>
            <Tab
              dataTest="dhis2-uicore-tab"
              onClick={function onClick() {
                console.log("click");
              }}
            >
              Tab K
            </Tab>
            <Tab
              dataTest="dhis2-uicore-tab"
              onClick={function onClick() {
                console.log("click");
              }}
            >
              Tab L
            </Tab>
            <Tab
              dataTest="dhis2-uicore-tab"
              onClick={function onClick() {
                console.log("click");
              }}
              selected
            >
              Tab M
            </Tab>
            <Tab
              dataTest="dhis2-uicore-tab"
              onClick={function onClick() {
                console.log("click");
              }}
            >
              Tab N
            </Tab>
            <Tab
              dataTest="dhis2-uicore-tab"
              onClick={function onClick() {
                console.log("click");
              }}
            >
              Tab O
            </Tab>
            <Tab
              dataTest="dhis2-uicore-tab"
              onClick={function onClick() {
                console.log("click");
              }}
            >
              Tab P
            </Tab>
            <Tab
              dataTest="dhis2-uicore-tab"
              onClick={function onClick() {
                console.log("click");
              }}
            >
              Tab Q
            </Tab>
            <Tab
              dataTest="dhis2-uicore-tab"
              onClick={function onClick() {
                console.log("click");
              }}
            >
              Tab R
            </Tab>
          </TabBar>
        </Grid>
      </div>
    </Grid>
  );
}

export default TabBarComponent;
