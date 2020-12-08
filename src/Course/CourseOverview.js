import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";

import { Button } from "@dhis2/ui";
import BreadCrumb from "./Question/BreadCrumb.js";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import styled from "styled-components";
import { colors } from "@dhis2/ui";

const Main = styled.main`
  max-width: 60%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 128px;
`;

const List = styled.ul`
  list-style-type: none;
`;

const AccordionHeader = styled(AccordionSummary)`
  background-color: ${colors.grey100};
`;

const ListElement = styled.li`
  padding-bottom: 16px;
`;

function CourseOverview({ handleNextClick, title, topics, about, status, totalPoints }) {
  const p = 10;
  return (
    <Main>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={12} md={12}>
          <BreadCrumb title={title} />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <h2>{title}</h2>
        </Grid>
        <Grid item xs={12} sm={8} md={8}>
          <p>{about}</p>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Card>
            <CardContent>
              <List>
                <ListElement>
                  <b>Expected duration:</b> 20 minutes
                </ListElement>
                <ListElement>
                  <b>Possible points:</b> {p}
                </ListElement>
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid spacing={4} item xs={12} sm={12} md={12}>
          {topics ? (
            <>
              <p>The topics that will be covered in this module:</p>
              {topics.map((index) => (
                <>
                  <Accordion>
                    <AccordionHeader
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <p>
                        <b>{index.title}</b>
                      </p>
                    </AccordionHeader>
                    <AccordionDetails>{index.content}</AccordionDetails>
                  </Accordion>
                </>
              ))}
            </>
          ) : null}
        </Grid>
        {status === "under development" ? (
          <div>
            <Button
              dataTest="dhis2-uicore-buttorn"
              onClick={handleNextClick}
              disabled
              type="button"
            >
              Start Course
            </Button>
          </div>
        ) : (
          <div>
            <Button
              dataTest="dhis2-uicore-buttorn"
              onClick={handleNextClick}
              primary
              type="button"
            >
              Start Course
            </Button>
          </div>
        )}
      </Grid>
    </Main>
  );
}

export default CourseOverview;
