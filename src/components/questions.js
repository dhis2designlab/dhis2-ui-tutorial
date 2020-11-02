import React, { useState } from 'react';

import { ModalTitle, ModalContent, Radio} from '@dhis2/ui';

import Grid from '@material-ui/core/Grid';

import colors from '../images/colours.png';
import { makeStyles } from '@material-ui/core/styles';

import Components from './components.js'

import CodeSandbox from 'simple-codesandbox';




const useStyles = makeStyles((theme) => ({
  border: {
    borderStyle: 'solid',
    borderColor: "green",
  }
}));

//TODO: rewrite messy code
function Questions({sections, images, question, alternatives, image, information, handleSingleCheck, isChecked, frame, components}) {
 
  const classes = useStyles();

  const [chosenImg, setChosenImg] = useState();
  const [radio, setRadio] = useState(false);

  return (
    <>
        <div>
              {question && <h1>{question}</h1>}
            <div>        
                <>{information && <p>{information}</p>}
                <div>{sections && sections.map((value) => {
                  return <><p>{value.text}</p>{value.list && <ul>{value.list.map((value) => {
                    return <li>{value}</li>
                  })}</ul>}
                    </>
                })}</div>
                <Grid container>
                {images ? images.map((value) => {
                  return <Grid item xs={12} sm={6} md={6}><div className={classes.border}><img src={value} width="100%" /></div></Grid>
                }): null}
                </Grid>
                {alternatives && alternatives.map((value, index) => {
                    const choice = Object.keys(value)
                    const value_choice = Object.values(value)
                    return <><Radio
                    dataTest="dhis2-uicore-radio"
                    label={value_choice}
                    name={choice}
                    id={index}
                    onChange={handleSingleCheck}
                    checked={isChecked.includes(String(choice))}
                        />
                </>

                    })}
            {image && <img src={colors} width="100%" alt="" />}
        
            {frame && <div dangerouslySetInnerHTML={{__html: frame}} />}
            {components && <Components />}
            </></div>
    </div>
    </>
  );
}

export default Questions;

