import React  from 'react';

import Fallback from './images/default-image.jpg';
import Color from "./images/color.png"
import ContentCommunication from "./images/com_big.png"
import Forms from "./images/forms.png"
import Typography from "./images/typography.png"

import { makeStyles } from '@material-ui/core/styles';



const classes = makeStyles((theme) => ({
  reactour__hel: {
    width: "800px",
  },
}));

const data = [
    {
      title: "Content and communication",
      quizId: ContentCommunication,
      short_info: "Communicating consistently helps DHIS2 users understand, use and extend DHIS2. In this tutorial you will learn how to communicate effectively in DHIS2 applications",
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
      quizId: ContentCommunication,
      short_info: "The visual architecture of an application is made up of layout, spacing and stacking. The visual architecture of DHIS2 applications should follow some basic rules to provide a consistent user experience across different types of apps",
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
      quizId: Forms,
      short_info: "Forms are one of the most common ways an application collects user input. DHIS2 applications should follow some common form guidelines to make sure users are not unnecessarily challenged when working with forms.",
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
      quizId: Color,
      short_info: "Color is used in DHIS2 to support effective communication. DHIS2 applications use color to help the user understand information, feedback and more. In this tutorial you will learn about how to use color in DHIS2",
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
      quizId: Typography,
      short_info: "Typography, the selection and use of fonts, colors and sizes, is an effective way to communicate information to users.",
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
      quizId: Color,
      short_info: "Icons are simple images used in context to communicate something. They are easily recognizable and easy to remember. In DHIS2 there are some icons that are recommended to use, which you will learn more about in this tutorial",
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
    },
    {
      title: "Components",
      quizId: Color,
      short_info: "A collection of UI elements that should be reused across all DHIS2 applications. Using these components means more time spent focusing on building a positive user experience and less time redesigning and rebuilding common components. Each component has its guidelines for use and in this tutorial you will learn about how and when to use the different components",
      id: 6,
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
