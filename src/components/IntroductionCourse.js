import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@dhis2/ui";
import BreadCrumb from "../components/BreadCrumb";

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    maxWidth: "50em",
    marginLeft: "auto",
    marginRight: "auto",
  },

  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },

  title: {
    textAlign: "center",
  },

  buttons: {
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
    width: "15%",
  },

  button: {
    margin: "5px",
  },

  list: {
    listStyleType: "none",
  },

  listElement: {
    paddingBottom: "16px",
  },
}));

function IntroductionCourse({ handleNextClick, title, topics, about, status, subtopics }) {
  const classes = useStyles();

  return (
    <Grid container className={classes.cardGrid}>
      <BreadCrumb title={title} />
      <Grid item xs={12} sm={12} md={12}>
        <h2 className={classes.title}>{title}</h2>
      </Grid>
      <Grid item xs={12} sm={8} md={8}>
        <p>{about}</p>
      </Grid>
      <Grid item xs={12} sm={4} md={4}>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <ul className={classes.list}>
              <li className={classes.listElement}>
                <b>Expected duration:</b> 20 minutes
              </li>
              <li className={classes.listElement}>
                <b>Key:</b> Blabla
              </li>
              <li className={classes.listElement}>
                <b>Key:</b> Blabla
              </li>
              <li className={classes.listElement}>
                <b>Key:</b> Blabla
              </li>
            </ul>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        {topics ? (
          <>
            <p>The topics that will be covered in this module:</p>
            <ul>
              {topics.map((index) => (
                <>
                 <Accordion>
                 <AccordionSummary
                   expandIcon={<ExpandMoreIcon />}
                   aria-controls="panel1a-content"
                   id="panel1a-header"
                 >
                   <p><b>{index.title}</b></p>
                 </AccordionSummary>
                 <AccordionDetails>
                   {index.content}
                 </AccordionDetails>
               </Accordion>  
               </>
                
              ))}
            </ul>
          </>
        ) : null}
      </Grid>
      {status == "under development" ? (
        <Button
          dataTest="dhis2-uicore-buttorn"
          onClick={handleNextClick}
          disabled
          type="button"
        >
          Start Course
        </Button>
      ) : (
        <Button
          dataTest="dhis2-uicore-buttorn"
          onClick={handleNextClick}
          primary
          type="button"
        >
          Start Course
        </Button>
      )}
    </Grid>
  );
}

export default IntroductionCourse;
