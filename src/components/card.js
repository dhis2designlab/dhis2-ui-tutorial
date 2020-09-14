
import React, {useState} from 'react';

import Card from '@material-ui/core/Card';

import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

import TourView from "./tour"

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

function Cards(props) {
  const classes = useStyles();

  const [isOpen, setIsOpen] = useState(false);

  const {title, short_info } = props.section

  const {steps} = props

  function handleChange(newValue){
    setIsOpen(newValue);
  }

  return (
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image="https://source.unsplash.com/random"
          title="Image title"
        />
        <CardContent className={classes.cardContent}>
          <h2>{title}</h2>
          <p>{short_info}</p>
        </CardContent>
        <CardActions>
        <Button
            dataTest="dhis2-uicore-button"
            name="Basic button"
            //onClick={() => setIsOpen(!isOpen)}
            type="button"
            onClick={handleChange}
            value={isOpen}>
            Start the tour
        </Button>
        <TourView isOpen={isOpen} setIsOpen={setIsOpen} onRequestClose={handleChange} steps={steps}/>
        </CardActions>
      </Card>
)}

export default Cards;
