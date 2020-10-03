import React  from 'react';

import Fallback from './images/default-image.jpg';


import { makeStyles } from '@material-ui/core/styles';



const classes = makeStyles((theme) => ({
  reactour__hel: {
    width: "800px",
  },
}));

const data = [
    {
      title: "Content and communication",
      short_info: "Learn about content and communication in DHIS2",
      id: 0,
      steps: [
        {
          selector: '.first-step',
          content: 'hhjThis is my the first step in content and communication',
        },
        {
          selector: '.first-step',
          content: 'This is my the second step in content and communication',
        },
        {
          selector: '.first-step',
          content: 'This is my the third step in content and communication',
        }
      ]
    },
    {
      title: "Layout, Spacing and Stacking",
      short_info: "Learn about the visual architecture of DHIS2 applications",
      id: 1,
      steps: [
        {
          selector: '.first-step',
          content: <div><h3>Layout, Spacing, Stacking</h3> <p>The visual architecture of an application is made up of layout, spacing and stacking. The visual architecture of DHIS2 applications should follow some basic rules to provide a consistent user experience across different types of apps. Click next to learn how to make layouts in DHIS2! </p></div>,
        },

        {
          selector: '.first-step',
          content: <div className={classes.reactourOpen}><h5>Topic 1: spacing</h5><p>Which of these choices for layout do you think is best? Think about why when you answer. To answer click on your chosen image</p><img src={Fallback} alt="img" width="250px" /><br></br><br></br><img src={Fallback} alt="img" width="250px" /></div>,

        },
        {
          selector: '.first-step',
          content: 'This is my the third step in Layout',
        }
      ]
    },
    {
      title: "Forms",
      short_info: "Learn about the form guidelines for DHIS2",
      id: 2,
      steps: [
        {
          selector: '.first-step',
          content: "fsfse",
      },
        {
          selector: '.first-step',
          content: 'This is my the second step in Forms',
        },
        {
          selector: '.first-step',
          content: 'This is my the third step in Forms',
        }
      ]
    },
    {
      title: "Color",
      short_info: "How to use colours",
      id: 3,
      steps: [
        {
          selector: '.first-step',
          content: 'This is my first Step',
        },
        {
          selector: '.first-step',
          content: 'This is my second Step',
        },
        {
          selector: '.first-step',
          content: 'This is my third Step',
        }
      ]
    },
    {
      title: "Typography",
      short_info: "The typography",
      id: 4,
      steps: [
        {
          selector: '.first-step',
          content: 'This is my first Step',
        },
        {
          selector: '.first-step',
          content: 'This is my second Step',
        },
        {
          selector: '.first-step',
          content: 'This is my third Step',
        }
      ]
    },
    {
      title: "Icons",
      short_info: "About icons",
      id: 5,
      steps: [
        {
          selector: '.first-step',
          content: 'klklThis is my first Step',
        },
        {
          selector: '.first-step',
          content: 'This is my second Step',
        },

        {
          selector: '.first-step',
          content: 'This is my third Step',
        }
      ]
    }
  ]

export default data
