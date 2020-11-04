
import React from 'react';

import Grid from '@material-ui/core/Grid';
import { Button, Radio} from '@dhis2/ui';

import styles from "./styles.module.css"

function RadioButton() {
  
return (
    <Grid className={styles.container} xs={12} sm={12} md={12}>
        <div className={styles.box} >
            <Grid item xs={12} sm={12} md={12}>
                <h4>Radio</h4>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
                <p>Default</p>    
                <Radio
                    dataTest="dhis2-uicore-radio"
                    label="Radio"
                    name="Ex"
                    value="default"
                />
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
                <p>Checked</p>
                <Radio
                    checked
                    dataTest="dhis2-uicore-radio"
                    label="Radio"
                    name="Ex"
                    value="checked"
                />
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
                <p>Disabled</p>
                <Radio
                    dataTest="dhis2-uicore-radio"
                    disabled
                    label="Radio"
                    name="Ex"
                    value="disabled"
                />
                <Radio
                    checked
                    dataTest="dhis2-uicore-radio"
                    disabled
                    label="Radio"
                    name="Ex"
                    value="disabled"
                />
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
                <p>Valid</p>
                <Radio
                    dataTest="dhis2-uicore-radio"
                    label="Radio"
                    name="Ex"
                    valid
                    value="valid"
                />
                <Radio
                    checked
                    dataTest="dhis2-uicore-radio"
                    label="Radio"
                    name="Ex"
                    valid
                    value="valid"
                />
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
                <p>Warning</p>
                <Radio
                    dataTest="dhis2-uicore-radio"
                    label="Radio"
                    name="Ex"
                    value="warning"
                    warning
                />
                <Radio
                    checked
                    dataTest="dhis2-uicore-radio"
                    label="Radio"
                    name="Ex"
                    value="warning"
                    warning
                />
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
                <p>Error</p>
                <Radio
                    dataTest="dhis2-uicore-radio"
                    error
                    label="Radio"
                    name="Ex"
                    value="error"
             />
                <Radio
                    checked
                    dataTest="dhis2-uicore-radio"
                    error
                    label="Radio"
                    name="Ex"
                    value="error"
                />
            </Grid>
        </div>
    </Grid>
)}

export default RadioButton