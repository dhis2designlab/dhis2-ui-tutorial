
import React from 'react';

import Grid from '@material-ui/core/Grid';
import { Button, TextArea} from '@dhis2/ui';
import styles from "./styles.module.css"

function TextAreaComponent() {
  
return (
    <Grid xs={12} sm={6} md={6}>
        <div className={styles.box}>
        <Grid item xs={12} sm={12} md={12}>
            <h4>TextArea</h4>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
            <p>Default</p>
            <TextArea
                dataTest="dhis2-uicore-textarea"
                name="textarea"
                onChange={function onChange(){console.log("onChange")}}
                resize="vertical"
                rows={4}
                width="100%"
            />
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
            <p>With placeholder</p>
            <TextArea
                dataTest="dhis2-uicore-textarea"
                name="textarea"
                onChange={function onChange(){console.log("onChange")}}
                placeholder="Hold the place"
                resize="vertical"
                rows={4}
                width="100%"
            />
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
            <p>Valid</p>
            <TextArea
                dataTest="dhis2-uicore-textarea"
                name="textarea"
                onChange={function onChange(){console.log("onChange")}}
                resize="vertical"
                rows={4}
                valid
                value="This value is valid"
                width="100%"
            />
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
            <p>Warning</p>
            <TextArea
                dataTest="dhis2-uicore-textarea"
                name="textarea"
                onChange={function onChange(){console.log("onChange")}}
                resize="vertical"
                rows={4}
                warning
                value="This value produces a warning"
                width="100%"
            />
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
            <p>Error</p>
            <TextArea
                dataTest="dhis2-uicore-textarea"
                name="textarea"
                onChange={function onChange(){console.log("onChange")}}
                resize="vertical"
                rows={4}
                error
                value="This value produces an error"
                width="100%"
            />
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
            <p>Loading</p>
            <TextArea
                dataTest="dhis2-uicore-textarea"
                name="textarea"
                onChange={function onChange(){console.log("onChange")}}
                resize="vertical"
                rows={4}
                loading
                value="This value produces a loading state"
                width="100%"
            />
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
            <p>Disabled</p>
            <TextArea
                dataTest="dhis2-uicore-textarea"
                name="textarea"
                onChange={function onChange(){console.log("onChange")}}
                resize="vertical"
                rows={4}
                disabled
                value="This value produces a loading state"
                width="100%"
            />
        </Grid>
        </div>
    </Grid>
)}

export default TextAreaComponent