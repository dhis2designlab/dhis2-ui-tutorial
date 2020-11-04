
import React from 'react';

import Grid from '@material-ui/core/Grid';
import { ButtonStrip, Button, SplitButton} from '@dhis2/ui';

import styles from "./styles.module.css"

function Buttonstrip() {
  
return (
    <Grid xs={12} sm={6} md={6}>
    <div className={styles.box} >
            <Grid item xs={12} sm={12} md={12}>
                <h4>ButtonStrip</h4>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
            <ButtonStrip dataTest="dhis2-uicore-buttonstrip">
                <Button
                onClick={console.log("click")}
                dataTest="dhis2-uicore-button"
                type="button"
                >
                Save
                </Button>
                <Button
                onClick={console.log("click")}
                dataTest="dhis2-uicore-button"
                type="button"
                >
                Save
                </Button>
                <Button
                 onClick={console.log("click")}
                dataTest="dhis2-uicore-button"
                type="button"
                >
                Save
                </Button>
                <Button
                onClick={console.log("click")}
                dataTest="dhis2-uicore-button"
                type="button"
                >
                Save
                </Button>
                <SplitButton dataTest="dhis2-uicore-splitbutton">
                Label?
                </SplitButton>
            </ButtonStrip>
            </Grid>
            </div>
        </Grid>
)}

export default Buttonstrip