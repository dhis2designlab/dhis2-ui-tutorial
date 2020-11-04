
import React from 'react';

import Grid from '@material-ui/core/Grid';
import { InputField } from '@dhis2/ui';

import styles from "./styles.module.css"

function Input() {
  
return (

    <Grid className={styles.container} xs={12} sm={12} md={12}>
         <div className={styles.box} >
            <Grid item xs={12} sm={12} md={12}>
                <h4>InputField</h4>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>                 
            <InputField
                dataTest="dhis2-uiwidgets-inputfield"
                label="Default label"
                name="Default"
                onChange={function logger(_ref){var name=_ref.name,value=_ref.value;return console.info("".concat(name,": ").concat(value))}}
                />
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
            <InputField
                dataTest="dhis2-uiwidgets-inputfield"
                helpText="With some helping text to guide the user along"
                label="Default label"
                name="Default"
                onChange={function logger(_ref){var name=_ref.name,value=_ref.value;return console.info("".concat(name,": ").concat(value))}}
                placeholder="Hold the place"
            />
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
            <InputField
                dataTest="dhis2-uiwidgets-inputfield"
                label="Default label"
                name="Default"
                onChange={function logger(_ref){var name=_ref.name,value=_ref.value;return console.info("".concat(name,": ").concat(value))}}
                valid
                value="This value is valid"
                />
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
                <InputField
                    dataTest="dhis2-uiwidgets-inputfield"
                    error
                    helpText="This is some help text to advice what this input actually is."
                    label="Default label"
                    name="Default"
                    onChange={function logger(_ref){var name=_ref.name,value=_ref.value;return console.info("".concat(name,": ").concat(value))}}
                    validationText="This describes the error, if a message is supplied."
                    value="This value produces an error"
                />
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
                <InputField
                    dataTest="dhis2-uiwidgets-inputfield"
                    disabled
                    label="Default label"
                    name="Default"
                    onChange={function logger(_ref){var name=_ref.name,value=_ref.value;return console.info("".concat(name,": ").concat(value))}}
                    value="This field is disabled"
                />
            </Grid>
        </div>
    </Grid>
)}

export default Input