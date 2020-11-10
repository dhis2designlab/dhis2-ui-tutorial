
import React from 'react';

import Grid from '@material-ui/core/Grid';
import { Button, DropdownButton} from '@dhis2/ui';

import styles from "./styles.module.css"

function Dropdownbutton() {
  
return (
    <Grid className={styles.container} xs={12} sm={12} md={12}>
         <div className={styles.box} >
            <Grid item xs={12} sm={12} md={12}>
                <h4>DropdownButton</h4>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
                <p>Default</p>     
                <DropdownButton
                    component={<span>Simplest thing</span>}
                    dataTest="dhis2-uicore-dropdownbutton"
                    name="default"
                    value="nothing"
                    >
                    Label me!
                </DropdownButton>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
                <p>Primary</p>
                <DropdownButton
                    component={<span>Simplest thing</span>}
                    dataTest="dhis2-uicore-dropdownbutton"
                    name="default"
                    primary
                    value="nothing"
                >
                Label me!
                </DropdownButton>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
                <p>Secondary</p>            
                <DropdownButton
                    component={<span>Simplest thing</span>}
                    dataTest="dhis2-uicore-dropdownbutton"
                    name="default"
                    secondary
                    value="nothing"
                >
                Label me!
                </DropdownButton>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
                <p>Destructive</p>                   
                <DropdownButton
                    component={<span>Simplest thing</span>}
                    dataTest="dhis2-uicore-dropdownbutton"
                    destructive
                    name="default"
                    value="nothing"
                >
                Label me!
                </DropdownButton>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
                <p>Disabled</p>                            
                <DropdownButton
                    component={<span>Simplest thing</span>}
                    dataTest="dhis2-uicore-dropdownbutton"
                    disabled
                    name="default"
                    value="nothing"
                >
                Label me!
                </DropdownButton>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
                <p>Small</p>                                     
                <DropdownButton
                    component={<span>Simplest thing</span>}
                    dataTest="dhis2-uicore-dropdownbutton"
                    name="default"
                    small
                    value="nothing"
                >
                Label me!
                </DropdownButton>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
                <p>Large</p>                                         
                <DropdownButton
                    component={<span>Simplest thing</span>}
                    dataTest="dhis2-uicore-dropdownbutton"
                    large
                    name="default"
                    value="nothing"
                >
                Label me!
                </DropdownButton>
            </Grid>
        </div>
    </Grid>
)}

export default Dropdownbutton