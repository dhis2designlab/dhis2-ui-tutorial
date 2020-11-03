
import React from 'react';

import Grid from '@material-ui/core/Grid';
import { Button, Checkbox} from '@dhis2/ui';


function Checkboxes() {
  
return (

    <Grid container xs={12} sm={12} md={6}>
            <Grid item xs={12} sm={12} md={12}>
                <h4>Checkboxes</h4>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
                <Checkbox
                    dataTest="dhis2-uicore-button"
                    type="button"
                    >
                    Click me
                </Checkbox>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
                <Checkbox
                    dataTest="dhis2-uicore-button"
                    type="button"
                    >
                    Click me
                </Checkbox>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
                <Checkbox
                    dataTest="dhis2-uicore-button"
                    type="button"
                    >
                    Click me
                </Checkbox>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
                <Checkbox
                    checked
                    dataTest="dhis2-uicore-checkbox"
                    initialFocus
                    label="Checkbox"
                    name="Ex"
                    value="default"
                />
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
                <Checkbox
                    checked
                    dataTest="dhis2-uicore-checkbox"
                    label="Checkbox"
                    name="Ex2"
                    value="default2"
                />
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
                <Checkbox
                    checked
                    dataTest="dhis2-uicore-checkbox"
                    dense
                    label="Checkbox"
                    name="Ex"
                    onBlur={function onBlur(){var _window3;return(_window3=window).onBlur.apply(_window3,arguments)}}
                    onChange={function onChange(){var _window;return(_window=window).onChange.apply(_window,arguments)}}
                    onFocus={function onFocus(){var _window2;return(_window2=window).onFocus.apply(_window2,arguments)}}
                    value="warning"
                    warning
                />
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
                <Checkbox
                    checked
                    dataTest="dhis2-uicore-checkbox"
                    dense
                    error
                    label="Checkbox"
                    name="Ex"
                    onBlur={function onBlur(){var _window3;return(_window3=window).onBlur.apply(_window3,arguments)}}
                    onChange={function onChange(){var _window;return(_window=window).onChange.apply(_window,arguments)}}
                    onFocus={function onFocus(){var _window2;return(_window2=window).onFocus.apply(_window2,arguments)}}
                    value="error"
                />
            </Grid>
        </Grid>
)}

export default Checkboxes