import React, { useState } from 'react';

import { ModalTitle, ModalContent, Radio} from '@dhis2/ui';

import Grid from '@material-ui/core/Grid';

import colors from '../images/colours.png';
import { makeStyles } from '@material-ui/core/styles';

const iframe = '<iframe src="https://codesandbox.io/embed/bold-sun-l4upt?fontsize=14&hidenavigation=1&theme=dark" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" title="bold-sun-l4upt" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>';

const useStyles = makeStyles((theme) => ({
  border: {
    borderStyle: 'solid',
    borderColor: "green",
  }
}));

//TODO: rewrite messy code
function Questions({sections, images, question, alternatives, image, information, handleSingleCheck, isChecked, frame}) {
 
  const classes = useStyles();

  const [chosenImg, setChosenImg] = useState();

  return (
    <>
        <div>
              {question ? <h1>{question}</h1> : <></>}
            <div>        
                <>{information ? <p>{information}</p> : <p></p>}
                <div>{sections ? sections.map((value) => {
                  return <><p>{value.text}</p>{value.list ? <ul>{value.list.map((value) => {
                    return <li>{value}</li>
                  })}</ul>:null}
                    </>
                }): null}</div>
                <Grid container>
                {images ? images.map((value) => {
                  return <Grid item xs={12} sm={6} md={6}><div className={classes.border}><img src={value} width="100%" /></div></Grid>
                }): null}
                </Grid>
                {alternatives ? alternatives.map((value, index) => {
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

                    }): <p></p>}
            {image ? <img src={colors} width="100%" alt="" /> : <></>}
            {frame ? <div dangerouslySetInnerHTML={{__html: iframe}} />: <></>}
            </></div>
    </div>
    </>
  );
}

export default Questions;


/**<Checkbox
dataTest="dhis2-uicore-checkbox"
label={value_choice}
name={choice}
onChange={handleSingleCheck}
checked={isChecked.includes(String(choice))}
/>**/
