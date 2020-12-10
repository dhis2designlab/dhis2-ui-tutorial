import React from "react";

import color1 from "./images/colour_img.png";
import color2 from "./images/color_img2.png";
import api from "./images/api.png";
import buttonTable from "./images/buttonTable.png";
import buttonIcon from "./images/buttonIcon.png";
import buttonSize from "./images/buttonSize.png";
import toggle from "./images/toggle.png";
import importComponents from "./images/importComponents.png";
import checkBoxApi from "./images/checkBoxApi.png";
import colorScale from "./images/colorScale.png";

import chip from "./images/chip.png";
import chipSelected from "./images/chipSelected.jpg";
import chipIcon from "./images/chipIcon.png";
import chipExample from "./images/chipExample.png";
import chipApi from "./images/chipApi.png";

import menuLevels from "./images/menuLevels.png";
import menuDensity from "./images/menuDensity.png";
import menuSections from "./images/menuSections.png";
import menuDivider from "./images/menuDivider.png";
import menuItem from "./images/menuItem.png";
import menuSectionHeader from "./images/menuSectionHeader.png";

import flyoutMenuImage from "./images/flyoutMenuImage.png";
import FlyoutMenuExampleInUse from "./images/FlyoutMenuExampleInUse.png";
import flyoutMenuApi from "./images/flyoutMenuApi.png";

//Table
import tableActions from "./images/tableActions.png";
import tableFiltering from "./images/tableFiltering.png";
import tableInline from "./images/tableInline.png";
import tableSearch from "./images/tableSearch.png";

//Table API
import tableApi from "./images/tableApi.png";
import tableBodyApi from "./images/tableBodyApi.png";
import tableCellApi from "./images/tableCellApi.png";
import tableCellHeadApi from "./images/tableApiCellHead.png";
import tableFootApi from "./images/tableFootApi.png";
import tableHeadApi from "./images/tableHeadApi.png";
import tableRowApi from "./images/tableRowApi.png";
import tableRowHeadApi from "./images/tableRowHeadApi.png";

import Color from "./images/color.png";
import ContentCommunication from "./images/contentandcommunication.png";
import Forms from "./images/forms.png";
import Typography from "./images/typography.png";
import Layout from "./images/layout.png";
import Components from "./images/components.png";
import Icon from "./images/icon.png";
import dataTable from "./images/dataTable.png";
import composition from "./images/composition.png";
import tag from "./images/tag.png";
import tagTable from "./images/tagTable.png";
import tagIcons from "./images/tagIcons.png";
import tagExample from "./images/tagExample.png";

import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import BuildIcon from "@material-ui/icons/Build";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import CodeIcon from "@material-ui/icons/Code";

import colorCorrect1 from "./images/colorCorrect1.png";
import colorIncorrect1 from "./images/colorIncorrect1.png";
import colorCorrect2 from "./images/colorCorrect2.png";
import colorIncorrect2 from "./images/colorIncorrect2.png";
import colorCorrect3 from "./images/colorCorrect3.png";
import colorIncorrect3 from "./images/colorIncorrect3.png";

import tagImgIncorrect from "./images/tagImgIncorrect.png";
import tagImgCorrect from "./images/tagImgCorrect.png";

import highContrast from "./images/highContrast.png";
import lowContrast from "./images/lowContrast.png";

import tagApi from "./images/tagApi.png";

const chipSingleSelectSol = `import React, { useState } from "react";
import "./styles.css";
import { Chip } from "@dhis2/ui";

export default function App() {
  const [chip, setChip] = useState(1);

  const handleClick = (value) => {
    if (value === "chipOne") {
      setChip(1);
    }
    if (value === "chipTwo") {
      setChip(2);
    }
    if (value === "chipThree") {
      setChip(3);
    }
  };

  return (
    <div className="App">
      <Chip
        dataTest="dhis2-uicore-chip"
        onClick={() => handleClick("chipOne")}
        selected={chip === 1}
      >
        Chip one
      </Chip>
      <Chip
        dataTest="dhis2-uicore-chip"
        onClick={() => handleClick("chipTwo")}
        selected={chip === 2}
      >
        Chip two
      </Chip>
      <Chip
        dataTest="dhis2-uicore-chip"
        onClick={() => handleClick("chipThree")}
        selected={chip === 3}
      >
        Chip three
      </Chip>
    </div>
  );
}`;

const flyoutMenuSolution = `
import React, { useState } from "react";
import "./styles.css";
import {
  MenuItem,
  MenuSectionHeader,
  FlyoutMenu,
  Button,
  MenuDivider
} from "@dhis2/ui";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import AssessmentIcon from "@material-ui/icons/Assessment";
import TableChartIcon from "@material-ui/icons/TableChart";
import RoomIcon from "@material-ui/icons/Room";
import DeleteIcon from "@material-ui/icons/Delete";

export default function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <Button
        dataTest="dhis2-uicore-button"
        name="Toggled button"
        icon={<MoreHorizIcon />}
        onClick={() => setShowMenu(!showMenu)}
        toggled={showMenu}
        type="button"
        value="default"
      />
      <div>
        {showMenu && (
          <FlyoutMenu>
            <MenuItem label="Send message" />
            <MenuItem label="Open as">
              <MenuItem icon={<AssessmentIcon />} label="Chart" />
              <MenuItem icon={<TableChartIcon />} label="Table" />
              <MenuItem icon={<RoomIcon />} label="Map" />
            </MenuItem>
            <MenuSectionHeader label="Export" />
            <MenuItem label="Download chart" />
            <MenuItem label="Download data" />
            <MenuDivider />
            <MenuItem destructive icon={<DeleteIcon />} label="Delete" />
          </FlyoutMenu>
        )}
      </div>
    </>
  );
}
`;

const flyoutExampleIcons = `
  // Chart icon
  import AssessmentIcon from "@material-ui/icons/Assessment";
  // Table icon
  import TableChartIcon from "@material-ui/icons/TableChart";
  // Map icon
  import RoomIcon from "@material-ui/icons/Room";
  // Delete icon
  import DeleteIcon from "@material-ui/icons/Delete";
`;

const importColors = ` 
import { colors } from "@dhis2/ui"
`;

const findTheMistakeButton = ` 
import React, { useState } from "react";
import "./styles.css";

import { InputField } from "@dhis2/ui";
import { Button } from "@dhis2/ui";
import { spacers } from "@dhis2/ui";

const input = {
  marginBottom: spacers.dp16
};

const button = {
  marginRight: spacers.dp8
};

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
  <>
<div style={input}>
  <InputField
    dataTest="dhis2-uiwidgets-inputfield"
    label="First name"
    name="Default"
    onChange={(e) => setFirstName(e.value)}
    placeholder="Enter the firstname"
    value={firstName}
  />
</div>
<div style={input}>
  <InputField
    dataTest="dhis2-uiwidgets-inputfield"
    label="Last name"
    name="Default"
    onChange={(e) => setLastName(e.value)}
    value={lastName}
    placeholder="Enter the lastname"
  />
</div>

<span style={button}>
  <Button primary>Save User</Button>
</span>
<span style={button}>
  <Button secondary>Cancel</Button>
</span>
</>
)}`;

const colorIframe =
  '<iframe src="https://codesandbox.io/embed/still-sunset-oucqv?fontsize=14&hidenavigation=1&theme=dark" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" title="still-sunset-oucqv" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>';

const buttonExample =
  '<iframe src="https://codesandbox.io/embed/compassionate-grass-8wq3t?fontsize=14&hidenavigation=1&theme=dark" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" title="compassionate-grass-8wq3t" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>';

const buttonFormExample =
  '<iframe src="https://codesandbox.io/embed/busy-sammet-u9mgn?fontsize=14&hidenavigation=1&theme=dark" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" title="busy-sammet-u9mgn" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>';
const chipIframeExample =
  '<iframe src="https://codesandbox.io/embed/gifted-mayer-risv4?fontsize=14&hidenavigation=1&theme=dark" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" title="gifted-mayer-risv4" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>';
const chipTableExample =
  '<iframe src="https://codesandbox.io/embed/keen-noether-xutgg?fontsize=14&hidenavigation=1&theme=dark" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" title="keen-noether-xutgg" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>';

const flyoutMenuExample =
  '<iframe src="https://codesandbox.io/embed/serene-snow-qi0wx?fontsize=14&hidenavigation=1&theme=dark" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" title="serene-snow-qi0wx" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>';

const simpleTableExample =
  '<iframe src="https://codesandbox.io/embed/festive-bhabha-nsi75?fontsize=14&hidenavigation=1&theme=dark" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" title="festive-bhabha-nsi75" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>';

const tagsExample = '<iframe src="https://codesandbox.io/embed/kind-cache-mn3ji?fontsize=14&hidenavigation=1&theme=dark" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" title="kind-cache-mn3ji" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>'

export const quiz_data = [
  {
    title: "Content and communication",
    quizId: "ContentCommunication",
    courseImg: ContentCommunication,
    totalPoints: 10,
    status: "under development",
    about:
      "Communicating consistently helps DHIS2 users understand, use and extend DHIS2. In this tutorial you will learn how to communicate effectively in DHIS2. This tutorial is not ready to be tested and the start button is therefore disabled",
    steps: [
      {
        header: "header1",
        question: "What is blabla1?",
        correct: 0,
        breadcrumb: "breadcrumb",
      },
    ],
  },
  {
    title: "Layout, Spacing and Stacking",
    quizId: "LayoutSpacingStacking",
    courseImg: Layout,
    totalPoints: 8,
    status: "under development",
    about:
      "The visual architecture of an application is made up of layout, spacing and stacking. The visual architecture of DHIS2 application should follow some basic rules to provide a consistent user experience across different types of apps. This tutorial is not ready to be tested and the start button is therefore disabled",
   
    steps: [
      {
        header: "header",
        question: "Layout",
        information:
          "Consistent layouts of applications means users only need to learn a few different patterns to understand many different applications. It is important that DHIS2 applications approach layout consistently. Let´s take an example: say we have a layout for how ",
        image: "../images/colours.png",
        breadcrumb: "breadcrumb",
      },
      {
        header: "header",
        question: "Layout",
        image: "../images/colours.png",
        information:
          "Consistent layouts of applications means users only need to learn a few different patterns to understand many different applications. It is important that DHIS2 applications approach layout consistently",
        breadcrumb: "breadcrumb",
      },
      {
        header: "header",
        question: "Layout",
        image: "../images/colours.png",
        information:
          "Consistent layouts of applications means users only need to learn a few different patterns to understand many different applications. It is important that DHIS2 applications approach layout consistently",
        breadcrumb: "breadcrumb",
      },
      {
        header: "header",
        question: "Layout",
        information:
          "Consistent layouts of applications means users only need to learn a few different patterns to understand many different applications. It is important that DHIS2 applications approach layout consistently. Not all applications need to look the same, but there should be common elements when dealing with similar tasks. If an application has separate sections it should have a sidebar to move between them. An single-task application should not use a sidebar unnecessarily. The header bar is always placed at the top of the screen. These consistent layout principles help users understand DHIS2 applications",
        breadcrumb: "breadcrumb",
      },
      {
        header: "header1",
        question: "What is blabla?",
        alternatives: [
          { a: "To alert about danger" },
          { b: "General interface elements" },
          { c: "Selected or active element" },
        ],
        correct: 1,
        breadcrumb: "breadcrumb",
      },
      {
        header: "header2",
        question: "What is blabla?",
        alternatives: [
          { a: "To alert about danger" },
          { b: "General interface elements" },
          { c: "Selected or active element" },
        ],
        correct: 0,
        breadcrumb: "breadcrumb",
      },
      {
        header: "header2",
        question: "What is blabla?",
        alternatives: [
          { a: "To alert about danger" },
          { b: "General interface elements" },
          { c: "Selected or active element" },
        ],
        correct: 0,
        breadcrumb: "breadcrumb",
      },
    ],
  },
  {
    title: "Forms",
    quizId: "Forms",
    courseImg: Forms,
    status: "under development",
    about:
      "Forms are one of the most common ways an application collects user input. DHIS2 applications should follow some common form of guidelines to make sure users are not unnecessarily challenged when working with forms. This tutorial is not ready to be tested and the start button is therefore disabled",
    steps: [
      {
        header: "header1",
        question: "What is blabla?",
        alternatives: [
          { a: "To alert about danger" },
          { b: "General interface elements" },
          { c: "Selected or active element" },
        ],
        correct: 0,
        breadcrumb: "breadcrumb",
      },
    ],
  },
  {
    title: "Icons",
    quizId: "Icons",
    courseImg: Icon,
    totalPoints: 12,
    status: "under development",
    about:
      "Icons are simple images used in context to communicate something. They are easily recognizable and easy to remember. In DHIS2 there are some icons that are recommended to use, which you will learn more about in this tutorial. This tutorial is not ready to be tested and the start button is therefore disabled",
    steps: [
      {
        header: "header1",
        question: "What is blabla?",
        alternatives: [
          { a: "To alert about danger" },
          { b: "General interface elements" },
          { c: "Selected or active element" },
        ],
        correct: 2,
        breadcrumb: "breadcrumb",
      },
    ],
  },
  {
    title: "Typography",
    quizId: "Typography",
    courseImg: Typography,
    totalPoints: 12,
    status: "under development",
    about:
      "Typography, the selection and use of fonts, colors and sizes, is an effective way to communicate information to users. In this tutorial, you will learn the right way to use typography in DHIS2. This tutorial is not ready to be tested and the start button is therefore disabled",
    steps: [
      {
        header: "header1",
        question: "What is blabla?",
        alternatives: [
          { a: "To alert about danger" },
          { b: "General interface elements" },
          { c: "Selected or active element" },
        ],
        correct: 0,
        breadcrumb: "breadcrumb",
      },
      {
        header: "header2",
        question: "What is blabla?",
        alternatives: [
          { a: "To alert about danger" },
          { b: "General interface elements" },
          { c: "Selected or active element" },
        ],
        correct: 1,
        breadcrumb: "breadcrumb",
      },
      {
        header: "header2",
        question: "What is blabla?",
        alternatives: [
          { a: "To alert about danger" },
          { b: "General interface elements" },
          { c: "Selected or active element" },
        ],
        correct: 3,
        breadcrumb: "breadcrumb",
      },
    ],
  },
  {
    title: "Color",
    quizId: "Color",
    totalPoints: 5,
    courseImg: Color,
    about:
      "In section we will take you through how to use colors when developing applications for DHIS2. Some examples and explanations will be given as well as some coding tasks for you to try out, and some quizzes to check that you have understood the topics correctly",
    topics: [
      {
        title: "DHIS2 Color scale",
        content: (
          <div>
            <p>
              <LibraryBooksIcon />{" "}
              <span style={{ marginLeft: "15px" }}>Lesson: Color</span>
            </p>
            <p>
              <LibraryBooksIcon />{" "}
              <span style={{ marginLeft: "15px" }}>
                Lesson: DHIS2 color scale
              </span>
            </p>
          </div>
        ),
      },
      {
        title: "Quiz about colors",
        content: (
          <div>
            <p>
              <LibraryBooksIcon />
              <span style={{ marginLeft: "15px" }}>
                Quiz: Which of the images uses color correctly
              </span>
            </p>
            <p>
              <EmojiObjectsIcon />
              <span style={{ marginLeft: "15px" }}>
                Quiz: Which of the images uses color correctly
              </span>
            </p>
            <p>
              <BuildIcon />
              <span style={{ marginLeft: "15px" }}>
                Quiz: Which of the images uses color correctly
              </span>
            </p>
            <p>
              <ContactSupportIcon />
              <span style={{ marginLeft: "15px" }}>
                Lesson: Different button options
              </span>
            </p>
          </div>
        ),
      },
      {
        title: "How to use the colors",
        content: (
          <div>
            <p>
              <LibraryBooksIcon />
              <span style={{ marginLeft: "15px" }}>
                Lesson: How to import the colors
              </span>
            </p>
            <p>
              <EmojiObjectsIcon />
              <span style={{ marginLeft: "15px" }}>
                Code examples: the colors in use
              </span>
            </p>
          </div>
        ),
      },
      {
        title: "Accessibility",
        content: (
          <div>
            <p>
              <LibraryBooksIcon />
              <span style={{ marginLeft: "15px" }}>
                Lesson: About accessibility
              </span>
            </p>
            <p>
              <EmojiObjectsIcon />
              <span style={{ marginLeft: "15px" }}>
                Quiz: about acessibility
              </span>
            </p>
            <p>
              <EmojiObjectsIcon />
              <span style={{ marginLeft: "15px" }}>
                Quiz: Click on the image that uses contrast correctly
              </span>
            </p>
          </div>
        ),
      },
    ],
    steps: [
      {
        header: "",
        question: "Question",
      },
      {
        header: "",
        question: "Color",

        information:
          "Color is used in DHIS2 to support effective communication. DHIS2 applications use color to help the user understand information, feedback and more. The colors used in an application should not be chosen based primarily on how they look, but how they convey information and aid understanding",
        sections: [
          {
            text:
              "It is important to maintain consistent usage of colors throughout the DHIS2 platform. Globally, color meanings are relative. It is not possible to say 'red = danger'. However, using a consistent color palette we can establish that 'red in DHIS2 = danger'.",
          },
          {
            text:
              "Color alone should not be relied upon to communicate effectively. ",
          },
        ],
        breadcrumb: "Color",
      },
      {
        header: "DHIS2 color scale",
        question: "DHIS2 color scale",
        image: colorScale,
        information:
          "The DHIS2 color scale contains 7 colors. Each color has 10 shades. This color system provides enough colors for most situations. Each color in the DHIS2 color scale has a purpose.",
        sections: [
          {
            text:
              "Color usage in DHIS2 applications should be subtle. Reserve colors for when they need to communicate effectively",
          },
          {
            text: "Put simply:",
            list: [
              "Grey: general interface elements, neutral information",
              "Blue: important neutral information, primary actions",
              "Teal: selected or active element",
              "Red: danger, error, destructive action",
              "Yellow: warning, non-blocking error",
              "Green: positive feedback, valid, success",
            ],
          },
          {
            text:
              "Generally speaking, for all colors, the values also have a purpose",
            list: [
              "900-700: text, information, active or highlighted content",
              "600-300: icons, states (inactive, disabled etc.)",
              "200-050: backgrounds, tints, accents",
            ],
          },
        ],
        breadcrumb: "DHIS2 color scale",
      },
      {
        question: "Quiz: Which of the images uses colors correctly?",
        images: [colorCorrect1, colorIncorrect1],
        solutionImg:
          "Use neutral colors to make the information easy to understand and parse. Using unnecessary colors makes the user question: what does this color mean?",
        correct: 0,
      },
      {
        question: "Quiz: Which of the images uses colors correctly?",
        images: [colorIncorrect2, colorCorrect2],
        correct: 1,
        solutionImg:
          "Consistent use of red for errors or danger help the user to always understand what red means across all DHIS2 applications. If error and danger are represented with other colors it becomes much less obvious what information means or what actions do",
      },
      {
        question: "Quiz: Which of the images uses colors correctly?",
        images: [colorIncorrect3, colorCorrect3],
        correct: 1,
        solutionImg:
          "A single use of blue for the primary action makes it clear. Consistency aids user understanding. Using blue for non-primary actions breaks consistency and makes it harder to understand",
      },
      {
        question: "Lesson: How to import and use the colors",
        information:
          "The use the colors in DHIS2, you can either use the colors hex value or you can import colors from @dhis2/ui",
        sections: [
          {
            codeSnippet: importColors,
          },
        ],
      },
      {
        header: "",
        question: "Code example: the colors in use",
        information: "Here you can see the DHIS2 colors in use",
        iframe: colorIframe,
        sections: [
          {
            text: "Try to see if you can change some of the color values",
          },
        ],
        breadcrumb: "Code example: the colors in use",
      },
      {
        header: "",
        question: "Accessibility",
        sections: [
          {
            text:
              "Do not rely on color alone to communicate. Not everyone sees color the same. Relying on color to communicate will restrict access for partially sighted, color blind and users with low-quality display hardware.",
          },
          {
            text:
              "In addition to using color to communicate as described in the previous sections, you always need to use color with another communication method. That can for example be text formatting or icon usage",
          },
          {
            text:
              "Relying on color alone to signal an error to a user is problematic. For example:",
          },
          {
            text:
              "Pay attention to contrast too. Information dense text needs to satisfy a minimum contrast ratio of 7:1 to be accessible to all users and headers and secondary text should pass a 4.5:1 ratio:",
          },
          {
            text:
              "Remember, when dealing with accessibility issues that designs may work or be understandable on your screen, but not necessarily on others. Make sure to think of all kinds of users with all kinds of hardware when designing with accessibility in mind. Use an WCAG2.0 standard accessibility checker to check contrast. Aim for AAA rating for all essential interface elements.",
          },
        ],
      },
      {
        header: "",
        question: "Quiz: accessibility",
        information: "Which image uses correct usage of color?",
        images: [color1, color2],
        correct: 0,
        breadcrumb: "Quiz: accessibility",
        solutionImg:
          "You need to make sure that you do not rely on color alone. You could for example also use icons which is the correct answer in this case",
      },
      {
        question: "Quiz: Click on the image that uses contrast correctly",
        images: [lowContrast, highContrast],
        correct: 1,
        solutionImg:
          "In this example, you see will see that the image to the right has a much higher contrast ratio, which ensure that the content is accessible to all users. On the other hand, the image on the left has a much lower contrast ration which makes information unnecessarily difficult to understand",
      },
    ],
  },
  {
    title: "DHIS2 Components",
    quizId: "Components",
    courseImg: Components,
    totalPoints: 17,
    about:
      "DHIS2 has a collection of UI elements that should be reused across all DHIS2 applications. The components have been designed with DHIS2 use cases in mind. Using these components means more time spent focusing on building a positive user experience and less time redesigning and rebuilding common components. Each component has its guidelines for use. In this tutorial, you will learn how and when to use the different components.",
    topics: [
      {
        title: "Section 1: Introduction",
        content: (
          <div>
            <p>
              <LibraryBooksIcon />{" "}
              <span style={{ marginLeft: "15px" }}>
                Lesson: How to import components
              </span>
            </p>
            <p>
              <LibraryBooksIcon />{" "}
              <span style={{ marginLeft: "15px" }}>
                Lesson: Showcase of the DHIS2 components
              </span>
            </p>
            <p>
              <LibraryBooksIcon />{" "}
              <span style={{ marginLeft: "15px" }}>
                Lesson: Using the API for components
              </span>
            </p>
          </div>
        ),
      },
      {
        title: "Section 2: Action components",
        content: (
          <div>
            <p>Buttons</p>
            <p>
              <LibraryBooksIcon />
              <span style={{ marginLeft: "15px" }}>
                Lesson: The different types of buttons and their usage
              </span>
            </p>
            <p>
              <LibraryBooksIcon />
              <span style={{ marginLeft: "15px" }}>Lesson: The Button API</span>
            </p>
            <p>
              <EmojiObjectsIcon />
              <span style={{ marginLeft: "15px" }}>
                Example: The different types of buttons in action
              </span>
            </p>
            <p>
              <LibraryBooksIcon />
              <span style={{ marginLeft: "15px" }}>
                Lesson: Different button options
              </span>
            </p>
            <p>
              <CodeIcon />
              <span style={{ marginLeft: "15px" }}>
                Coding exercise: Find the button mistakes and fix them
              </span>
            </p>
            <p>Chip</p>
            <p>
              <LibraryBooksIcon />
              <span style={{ marginLeft: "15px" }}>Lesson: Chip</span>
            </p>
            <p>
              <LibraryBooksIcon />
              <span style={{ marginLeft: "15px" }}>Lesson: Chip API</span>
            </p>
            <p>
              <CodeIcon />
              <span style={{ marginLeft: "15px" }}>
                Coding exercise: Change the Chips from multiple select to single
                select
              </span>
            </p>
            <p>FlyoutMenu</p>
            <p>
              <LibraryBooksIcon />
              <span style={{ marginLeft: "15px" }}>Lesson: FlyoutMenu</span>
            </p>
            <p>
              <LibraryBooksIcon />
              <span style={{ marginLeft: "15px" }}>Lesson: FlyoutMenu API</span>
            </p>
            <p>
              <CodeIcon />
              <span style={{ marginLeft: "15px" }}>
                Coding exercise: Add more functionality to the flyout menu
              </span>
            </p>
            <p>Quiz</p>
            <p>
              <ContactSupportIcon />
              <span style={{ marginLeft: "15px" }}>
                End of section quiz: Action components
              </span>
            </p>
          </div>
        ),
      },
      {
        title: "Section 3: Data display components",
        content: (
          <div>
            <p>Data table</p>
            <p>
              <LibraryBooksIcon />
              <span style={{ marginLeft: "15px" }}>
                Lesson: usage of the Data table
              </span>
            </p>
            <p>
              <LibraryBooksIcon />
              <span style={{ marginLeft: "15px" }}>
                Lesson: composition of the Data table
              </span>
            </p>
            <p>
              <LibraryBooksIcon />
              <span style={{ marginLeft: "15px" }}>
                Coding exercise: Here you will see a simple DHIS2 table without
                a header or footer. Try if you can add the header and footer
              </span>
            </p>
            <p>
              <LibraryBooksIcon />
              <span style={{ marginLeft: "15px" }}>
                Lesson: Data table search
              </span>
            </p>
            <p>
              <LibraryBooksIcon />
              <span style={{ marginLeft: "15px" }}>
                Lesson: Data table filtering
              </span>
            </p>
            <p>
              <LibraryBooksIcon />
              <span style={{ marginLeft: "15px" }}>
                Lesson: Data table actions
              </span>
            </p>
            <p>Tag</p>
            <p>
              <LibraryBooksIcon />
              <span style={{ marginLeft: "15px" }}>Lesson: Tag</span>
            </p>
            <p>
              <LibraryBooksIcon />
              <span style={{ marginLeft: "15px" }}>Quiz: Tag</span>
            </p>
            <p>
              <LibraryBooksIcon />
              <span style={{ marginLeft: "15px" }}>Lesson: Tag options</span>
            </p>
            <p>Tooltip</p>
            <p>
              <LibraryBooksIcon />
              <span style={{ marginLeft: "15px" }}>Lesson: Tooltip</span>
            </p>
            <p>
              <LibraryBooksIcon />
              <span style={{ marginLeft: "15px" }}>Lesson: Tag Api</span>
            </p>
            <p>
              <CodeIcon />
              <span style={{ marginLeft: "15px" }}>Code example: Tag</span>
            </p>
            <p>Quiz</p>
            <p>
              <LibraryBooksIcon />
              <span style={{ marginLeft: "15px" }}>
                End of section quiz: Data display components
              </span>
            </p>
          </div>
        ),
      },
      {
        title: "Section 4: Data entry components (coming soon)",
        content: (
          <div>
            <p>No information. Coming soon</p>
          </div>
        ),
      },
      {
        title: "Section 5: Feedback components (coming soon)",
        content: (
          <div>
            <p>No information. Coming soon</p>
          </div>
        ),
      },
      {
        title: "Section 6: Layout components (coming soon)",
        content: (
          <div>
            <p>No information. Coming soon</p>
          </div>
        ),
      },
      {
        title: "Section 7: Navigation components (coming soon)",
        content: (
          <div>
            <p>No information. Coming soon</p>
          </div>
        ),
      },
      {
        title: "Section 8: Utilities (coming soon)",
        content: (
          <div>
            <p>No information. Coming soon</p>
          </div>
        ),
      },
    ],
    steps: [
      {
        question: "Using the API",
        information: "In this section you will get infor",
        breadcrumb: "breadcrumb",
      },
      {
        question: "Section 1: Introduction",
        information:
          "In this section you will get an overview of how you can use all the components in DHIS2.",
        breadcrumb: "Introduction",
        sections: [
          {
            text:
              "Some of the topics that will be covered in this module includes:",
            list: [
              "Lesson: How to import components",
              "Lesson: Showcase of the DHIS2 components",
              "Lesson: Using the API for components",
            ],
          },
        ],
      },
      {
        question: "Lesson: How to import components",
        sections: [
          {
            heading: "@dhis2/ui",
            text:
              "To be able to use the components, you need to import them. There have been different ways to import the components until recently, depending on the type of component you want to import. @dhis2/ui unifies all of the dhis2 ui libraries, and you can now import everything that you imported previously from ui-core, ui-widgets and ui-forms directly from @dhis2/ui",
            image: importComponents,
          },
        ],
        section: "Introduction",
      },
      {
        question: "Lesson: Showcase of the DHIS2 components",
        sections: [
          {
            text:
              "All the components have its own properties you can use to define how you want the component to look and behave. In the showcase below, you will see some examples of what is possible. If you want to get the most updated overview of all the components go to:",
            link: "https://ui.dhis2.nu/demo/?path=/story/alertbar--default",
          },
        ],
        components: "show",
        section: "Introduction",
      },
      {
        question: "Lesson: Using the API for components",
        image: checkBoxApi,
        sections: [
          {
            text:
              "All the components have their own properties to define how you want the component to look and behave. In the next steps in this tutorial, I will go through some examples of using the API. If you want to use other DHIS2 components, you can find their documentation here",
            link: "https://ui.dhis2.nu/#/api",
          },
          {
            text:
              "Below you can see the API for the dhis2 Checkbox component. In the first column named 'Name,' you can see what type of properties the Checkbox component can take. Each of the properties has a type, as specified in the 'Type' column. ",
          },
        ],
        section: "Introduction",
      },
      {
        question: "Section 2: Action components",
        information:
          "Action components consist of components that the user will be able to interact with. When a user clicks on the component, an action will be performed.",
        section: "Action components",
        sections: [
          {
            text:
              "Some of the topics that will be covered in this module includes:",
          },
          {
            subheading: "Buttons:",
            list: [
              "Lesson: The different types buttons and their usage",
              "Lesson: Button Api",
              "Example: The different types of buttons in action",
              "Lesson: Different button options",
              "Coding Exercise: Find the button mistakes and fix them",
            ],
          },
          {
            subheading: "Chip:",
            list: [
              "Lesson: Chip",
              "Lesson: Chip Api",
              "Coding Exercise: Chip in use",
            ],
          },
          {
            subheading: "FlyoutMenu:",
            list: [
              "Lesson: FlyoutMenu",
              "Lesson: FlyoutMenu Api",
              "Coding Exercise: Add more functionality to the flyoutMenu",
            ],
          },
          {
            subheading: "End of section quiz",
          },
        ],
      },
      {
        question: "Lesson: The different types of buttons and their usage",
        information:
          "Buttons are used for triggering actions. There are different types of buttons in the design system which are intended for different types of actions.",
        image: buttonTable,
        sections: [
          {
            text: "Each type of button has a specific usage:",
          },
        ],
        breadcrumb: "Buttons",
        section: "Action components",
      },
      {
        question: "Lesson: The Button Api",
        information:
          "Here you can see the Api for the button component. Have a look at what is possible. You will use this in later exercises.",
        image: api,
        breadcrumb: "Buttons",
        section: "Action components",
      },
      {
        question: "Example: The different types of buttons in action",
        information:
          "Here you can see some of the possible button types in DHIS2. Familiarize yourself with the code and try to change some of the props the button uses (f.ex make all the buttons be primary buttons)",
        iframe: buttonExample,
        breadcrumb: "Buttons",
        section: "Action components",
      },
      {
        question: "Lesson: Different button options",
        sections: [
          {
            heading: "Toggle",
            text:
              "A button can represent an on/off state using the toggle option. Use a toggle button when the user can enable or disable an option and a checkbox or switch is not suitable. This will most often be in the case of a toolbar, such as bold or italic options in a text editing toolbar. A toggle button in this example uses an icon and does not need text. A text label should be provided in a tooltip on hover. The toggle option is available for basic and secondary type buttons.",
            image: toggle,
            imageWidth: "40%",
          },
          {
            heading: "Icons",
            text:
              "Icons can be included in Basic, Primary, Secondary and Destructive buttons. Use an icon to supplement the text label. Remember that the user may not be fluent in the working language, so an accompanying icon on an important action can be a welcome addition. Buttons with icons only should be used for supplementary actions and should include a text tooltip on hover.",
            image: buttonIcon,
            imageWidth: "40%",
          },
          {
            heading: "Size",
            text:
              "Buttons are available in three sizes: small, medium, large. Medium is usually the correct choice. Use small button in an information dense ui. Large buttons can be use on very simple, single action pages.",
            image: buttonSize,
            imageWidth: "40%",
          },
        ],
        breadcrumb: "Buttons",
        section: "Action component",
      },
      {
        question: "Coding Exercise: Find the button mistakes and fix them",
        information:
          "Use the information from the page about the different types of buttons and their usage to improve the code example below.",
        sections: [
          {
            text:
              "Tip: You will find some hints to the solution below the coding exercise and a possible solution",
          },
        ],
        hints: [
          "Remember when you should use primary buttons. Does the interface follow the guidelines?",
          "Could you create better labels for the buttons?",
          "Do some of the button represent the same?",
        ],
        iframe: buttonFormExample,
        breadcrumb: "Buttons",
        section: "Action components",
        showCode: findTheMistakeButton,
      },
      {
        question: "Lesson: Chip",
        information:
          "Chips are useful for displaying a selection of defined choices and filters to the user.",
        sections: [
          {
            heading: "Usage",
            text:
              "Chips are used to display a list of defined options, filters or views for a related view. Chips are always secondary content to the main element, for example a data table or a dashboard. A common usage of this that can help to understand the pattern is a table with a set of filters:",
            image: chip,
          },
          {
            text:
              "In this example, the chips act as filters for the table. By selecting the 'Overdue Patients' chip will display only that data in the table below. To deselect the chip the user can click again, or a 'Clear filters' control could be provided.",
            image: chipSelected,
          },
          {
            heading: "Chip VS Button",
            list: [
              "Chips should only be used for filtering or selecting an option. Do not use filters to trigger actions such as 'Save', 'Exit' or 'Open'. Use a button to trigger actions.",
            ],
          },
          {
            heading: "Displaying chips",
            list: [
              "Chips should be displayed in a horizontal list, where space permits.",
              "Do not stack single chips on top of one another if there is space to display them inline.",
              "Do not use horizontal scrolling to display a large number of chips. Always wrap chips onto a new line below.",
            ],
          },
          {
            heading: "Options",
          },
          {
            heading: "Icon",
            image: chipIcon,
            text:
              "A chip can display an optional icon. Use icons in chips to highlight special/unique chip items. Do not use the same icon on all chips, otherwise it will be meaningless. To clarify what a group of chips are, use a title or header instead.",
          },
          {
            heading: "Single vs Multiple Selections",
            text:
              "A group of chips can be set up for single or multiple selection, it depends on the usage. When using chips for selecting the active dashboard it makes sense to only allow a single selection at a time. You may choose to allow the user to select multiple chips, or filters, for a table displaying data.",
          },
          {
            heading: "Examples in use",
            image: chipExample,
          },
        ],
        breadcrumb: "Chip",
        section: "Action component",
      },
      {
        question: "Lesson: Chip Api",
        information:
          "Here you can see the Api for the Chip component. Have a look at what is possible, you will use this in later exercises",
        image: chipApi,
        imageWidth: "50%",
        breadcrumb: "Chip",
        section: "Action component",
      },
      {
        question:
          "Coding Exercise: Change the Chips from multiple select to single select",
        information:
          "Here is an example of chips using the multiple selection options. If we remember the introduction lesson about Chips, Chips can either be used as single or multiple select depending on their usage. How would you make the Chips single select? Try to change the code",
        sections: [
          {
            text:
              "There are many possible ways to accomplish this, but you will see one possible solution by clicking the 'show solution' button below. If you are not familiar with React's useState, you can read about it here: ",
            link: "https://reactjs.org/docs/hooks-state.html",
          },
        ],
        iframe: chipIframeExample,
        breadcrumb: "Chip",
        section: "Action component",
        showCode: chipSingleSelectSol,
      },
      {
        question: "Lesson: FlyoutMenu",
        information:
          "A menu provides user access to options that are available when clicking the menu toggle. A menu toggle can be almost anything: button, table row, avatar etc.",
        sections: [
          {
            heading: "Usage",
            text:
              "Use menus to provide access to options and actions where space is limited and displaying all the options would be impractical. For example, providing access to a range of actions for every dashboard item displayed. Containing all those actions in menus keeps the page manageable.",
          },
          {
            text:
              "The menu component is flexible in where it can be used and its contents can be flexible too. However, the most common use case is a menu containing menu items.",
          },
          {
            text:
              "Make sure the menu item labels are short and easy to understand. One word is often enough to describe an action or option. Do not use sentences as labels. Some examples of good menu item labels:",
            list: ["'Save'", "'Open as map'", "'Export PDF'", "'Duplicate'"],
          },
          {
            heading: "Menu levels",
            image: menuLevels,
            text:
              "Splitting menus into several levels with child menus makes sense when there are a lot of options that can be grouped together. An example may be an option in level 1 menu of 'Download' that has several different download formats as child menu items. Make sure that child menu items relate to their parent item, otherwise a user will struggle to discover them. A menu item with children is not selectable/actionable itself, it serves only as a container for the child elements. Try to keep menus to a maximum of three levels. More than three levels can easily confuse the user.",
          },
          {
            heading: "Ordering og menuitems",
            text:
              "There is no enforced ordering of menu items, but present them in order of relevance. Put the most commonly used items at the top of the menu for easy discovery and access.",
          },
          {
            heading: "Options",
          },
          {
            heading: "Size",
            image: menuDensity,
            text:
              "Menus are available in regular or dense sizes. Use dense menus in data-heavy applications used by users comfortable with technology. Use regular menus in apps that are less complex or have few controls.",
          },
          {
            heading: "Dividers & Section Headers",
            image: menuSections,
            text:
              "Items in a menu can be split into separate sections by using dividers. Group relevant menu items together to help the user understand the options quickly. A divider can be used alone. If using a section header, a divider will be automatically included. Try not to group single menu items together. An exception to this is a critical destructive menu item, like 'Delete,' which can be separated from other menu items.",
          },
          {
            heading: "Examples in use",
            image: FlyoutMenuExampleInUse,
          },
        ],
        breadcrumb: "FlyoutMenu",
        section: "Action component",
      },
      {
        question: "Lesson: FlyoutMenu Api",
        sections: [
          {
            heading: "FlyoutMenu",
            image: flyoutMenuApi,
          },
          {
            heading: "MenuDivider",
            image: menuDivider,
          },
          {
            heading: "MenuItem",
            image: menuItem,
          },
          {
            heading: "MenuSectionHeader",
            image: menuSectionHeader,
          },
        ],
        breadcrumb: "FlyoutMenu",
        section: "Action component",
      },
      {
        question: "Coding exercise: Add more functionality to the flyout menu",
        information:
          "In this exercise, you are supposed to add more functionality to the flyoutMenu. Try to transform the code snippet to represent the image. You need to use the FlyoutMenu, MenuItem, MenuSectionHeader and MenuDivider as described on the previous page to reflect the image",
        sections: [
          {
            text:
              "For the the Chart, Table and Map icons I have used material-ui/icons",
          },
          {
            text:
              "Tip: Below the code sandbox, you will find a possible solution if you are stuck",
          },
          {
            text:
              "To import the icons I have used, you can use these import statements:",
          },
          {
            codeSnippet: flyoutExampleIcons,
          },
        ],
        image: flyoutMenuImage,
        imageWidth: "50%",
        iframe: flyoutMenuExample,
        breadcrumb: "FlyoutMenu",
        section: "Action component",
        showCode: flyoutMenuSolution,
      },

      {
        question: "End of section quiz: Action components",
        questions: [
          {
            question: "When should you use the primary button?",
            answers: [
              {
                a:
                  "Primary buttons should be the default choice for the majority of actions. Several primary buttons can be used in the same area",
                b:
                  "Primary buttons should be used to highlight the most important/main action on the page. Should rarerly be more than one primary button",
                c:
                  "Primary buttons should be used when you want to highlight to the user the seriousness of the action",
                d:
                  "Primary buttons should be used for passive actions, often as an alternative to the secondary action. If 'Save' is secondary, 'Cancel could be primary. Do not use as the only action on a page",
              },
            ],
            correct: 1,
            solutionQuiz: "Primary buttons should be used to highlight the most important/main action on the page, and there should rarely be more than one primary button. One example of when you would use a primary button would be a 'save' button on a form page.",
          },
          {
            question: "When should you use the destructive button?",
            answers: [
              {
                a:
                  "Destructive buttons should be the default choice for the majority of actions. Several destructive buttons can be used in the same area",
                b:
                  "Destructive buttons should be used to highlight the most important/main action on the page. Should rarerly be more than one destructive button",
                c:
                  "Destructive buttons should be used when you want to highlight to the user the seriousness of the action",
                d:
                  "Destructive buttons should be used for passive actions, often as an alternative to the primary action. If 'Save' is primary, 'Cancel could be destructive. Do not use as the only action on a page",
              },
            ],
            correct: 2,
            solutionQuiz: "Destructive buttons are used to highlight the seriousness of the action. Destructive buttons must only be used for destructive actions. One example for when you could use the destructive button could be a 'delete' action, like 'delete account'.",
          },
          {
            question: "When should you use the secondary button?",
            answers: [
              {
                a:
                  "Secondary buttons should be the default choice for the majority of actions. Several secondary buttons can be used in the same area",
                b:
                  "Secondary buttons should be used to highlight the most important/main action on the page. Should rarerly be more than one secondary button",
                c:
                  "Secondary buttons should be used when you want to highlight to the user the seriousness of the action",
                d:
                  "Secondary buttons should be used for passive actions, often as an alternative to the primary action.",
              },
            ],
            correct: 3,
            solutionQuiz: "Secondary buttons should be used for passive actions, often as an alternative to the primary action. If 'Save' is primary, 'Cancel could be secondary. Do not use as the only action on a page",
          },
          {
            question: "When should you use the toggle button?",
            answers: [
              {
                a:
                  "The toggle button should be used for auxiliary actions, for example clearing the content of an input.",
                b:
                  "When you want the user to be able to enable or disable an option in a toolbar",
                c: "When you want to add filtering in a table",
              },
            ],
            correct: 1,
            solutionQuiz: "A toggle button can represent an on/off state. Use a toggle button when the user can enable or disable an option, and a checkbox or switch is not suitable. This will f.ex often be the case in a text editing toolbar when you want to disable or enable bold and italic options",
          },
          {
            question: "How should you display Chips?",
            answers: [
              {
                a:
                  "Chips should be displayed in a horizontal list, where space permits",
                b: "Chips should always be stacked on top of each other",
                c:
                  "Chips should have horizontal scrolling when a large number of chips are used",
              },
            ],
            correct: 0,
            solutionQuiz: "Chips should be displayed in a horizontal list, where space permits. If there are not enough space to display the chips horizontally, they should be stacked on top of each other.",
          },
          {
            question: "How should you use Chips?",
            answers: [
              {
                a: "When you want to trigger an action, like  'Save' or 'Open'",
                b: "When you want to be able to filter or select an option",
                c:
                  "Chips should only be used as a way of describing an element, and should not be interactive",
                d:
                  "A group of chips should all have the same icon to show that they belong together",
              },
            ],
            correct: 1,
            solutionQuiz: "Chips should be used when you want to be able to filter or select an option. Chips should not be used to trigger an action, use buttons for that.",
          },
          {
            question:
              "When should you use single-selection chips over multiple-selection chips?",
            answers: [
              {
                a: "When you want to use chips for filtering",
                b: "When you want to use the chip as a button",
                c:
                  "When you want to use chips for selecting the active dashboard",
              },
            ],
            correct: 2,
            solutionQuiz: "Single-selection chips should be used for selecting the active dashboard. You may choose to allow a user to select multiple chips, or filters, for a table displaying data",
          },
        ],
        breadcrumb: "End of section quiz",
        section: "Action components",
      },
      {
        question: "Section 3: Data display components",
        information:
          "Data display components consist of components that have the purpose of displaying some kind of data",
        section: "Data display components",
        sections: [
          {
            text:
              "Some of the topics that will be covered in this module includes:",
          },
          {
            subheading: "Data table:",
            list: [
              "Lesson: usage of the Data table",
              "Lesson: composition of the Data table",
              "Lesson: the Data table Api",
              "Example: the DHIS2 table component",
              "Lesson: Data table search",
              "Lesson: Data table filtering",
              "Lesson: Data table actions",
            ],
          },
          {
            subheading: "Tag:",
            list: [
              "Lesson: Tag",
              "Lesson: Tag Api",
              "Lesson: Tag options",
              "Quiz: Tag",
              "Coding exercise: Tag",

            ],
          },
          {
            subheading: "End of section quiz",
          },
        ],
      },
      {
        question: "Lesson: usage of the Data table",
        information:
          "A data table is used to display data in a structured way. Data tables have functionality for viewing and manipulating data.",
        section: "Data display components",
        breadcrumb: "Data table",
        image: dataTable,
        sections: [
          {
            text:
              "Displaying data in a structured way aids understanding and highlights relationships in data sets. Data tables allow the user to see detailed information about data sets. Each record in a data table can be viewed, interacted with and manipulated.",
            image: chip,
          },
          {
            text:
              "Data tables should only be presented to the user when needed. A data table full of complex data can be overwhelming. Before using a data table, consider whether an application could parse and display the information in a more user-friendly, understandable way. In cases where the user wants to see all of the data available, a data table is perfect.",
          },
          {
            text:
              "There are several different types of functionality and options available in the data table component. The correct data table to use will depend on the use case and type of data being displayed.",
          },
        ],
      },
      {
        question: "Lesson: composition of the Data table",
        section: "Data display components",
        breadcrumb: "Data table",
        sections: [
          {
            heading: "Composition",
            image: composition,
            text:
              "A data table is made up of multiple elements, some of which are optional",
          },
          {
            text: "1. Toolbar, optional",
          },
          {
            text: "2. Data rows and header, required",
          },
          {
            text: "3. Footer, optional",
          },
        ],
      },
      {
        question: "Lesson: the Data table Api",
        section: "Data display components",
        breadcrumb: "Data table",
        sections: [
          {
            heading: "Table",
            image: tableApi,
          },
          {
            heading: "TableBody",
            image: tableBodyApi,
          },
          {
            heading: "TableCell",
            image: tableCellApi,
          },
          {
            heading: "TableCellHead",
            image: tableCellHeadApi,
          },
          {
            heading: "TableFoot",
            image: tableFootApi,
          },
          {
            heading: "TableHead",
            image: tableHeadApi,
          },
          {
            heading: "TableRow",
            image: tableRowApi,
          },
          {
            heading: "TableRowHead",
            image: tableRowHeadApi,
          },
        ],
      },
      {
        question:
          "Code example: the DHIS2 table component",
        iframe: simpleTableExample,
        section: "Data display components",
        breadcrumb: "Data table",
      },
      {
        question: "Lesson: Data table search",
        section: "Data display components",
        breadcrumb: "Data table",
        sections: [
          {
            image: tableSearch,
          },
          {
            subheading: "What is search?",
            text:
              "Search allows a user to search for a specific term across the entire data table.",
          },
          {
            subheading: "How is search used?",
            text:
              "A search input can be included inside the table toolbar area or made available outside of the table. The location of the search input depends on the importance of search and how it relates to the task. If searching is a logical step performed before looking at the table the input should be shown outside, above the table. If searching is a secondary action it can be included inside the table.",
          },
          {
            text:
              "Be sure to inform the user with an empty state if there are no results for a search term.",
          },
          {
            subheading: "When to use search?",
            text:
              "Include search whenever a user might need to find a specific data record in the table. Search can be quicker than filtering if the user knows the exact data item they are looking for. Often search and filtering work well in combination.",
          },
        ],
      },
      {
        question: "Lesson: Data table filtering",
        section: "Data display components",
        breadcrumb: "Data table",
        sections: [
          {
            heading: "Filtering",
            text:
              "Filters allow a user to view a precise, focused set of data. Filtering is a very effective way of finding the right data. Enabling filtering on a data table means that a single data table can fulfill several different functions for varying users and use cases.",
          },
          {
            text:
              "Filtering works best when a user wants to return multiple results that fit some criteria. If a user is looking for a single result, especially where they know a name/title/attribute, then provide search functionality outside of the table.",
          },
          {
            text:
              "Never filter data in a table without informing the user, the user must know they are viewing a filtered set of data.",
          },
          {
            text:
              "There are two ways to filter data in a data table: standalone or inline.",
          },
          {
            heading: "Filtering: Standalone",
            image: tableFiltering,
          },
          {
            subheading: "What are standalone filters?",
            text:
              "Standalone filters are buttons that can be used to filter on a column in a data table.",
          },
          {
            subheading: "How are standalone filters used?",
            text:
              "Standalone filter buttons should be displayed inside the table toolbar area. The available filters must be defined, none will be provided by default. Clicking a filter button opens a popover with input controls. An actively filtered column is highlighted with an active button and text indicating the applied filter.",
          },
          {
            subheading: "When to use standalone filters?",
            text:
              "Standalone filters are useful when filtering is one of the main actions available on the page. Standalone filters will draw the user's attention and are easier to use for users with lower tech literacy. Only provide standalone filters that are useful to the user, as filter buttons add visual noise and potential confusion to a data table.",
          },
          {
            heading: "Filtering: Inline",
            image: tableInline,
          },
          {
            subheading: "What are inline filters?",
            text:
              "Inline filter controls are a compact way to filter data in the data table.",
          },
          {
            subheading: "How are inline filters used?",
            text:
              "The filter input for a column is displayed by clicking the filter icon in the column header. Multiple columns can be filtered at the same time.",
          },
          {
            subheading: "When to use inline filters?",
            text:
              "Use inline filters in data-heavy, compact tables where standalone filters would take too much space. Inline filters are useful when filtering is not one of the main actions on a page, but is a tool that will be used occasionally.",
          },
        ],
      },
      {
        question: "Lesson: Data table actions",
        section: "Data display components",
        breadcrumb: "Data table",
        sections: [
          {
            image: tableActions,
          },
          {
            subheading: "What are table actions?",
            text:
              "Actions that can be applied to the entire data table or the currently selected data rows.",
          },
          {
            subheading: "How are table actions used?",
            text:
              "Table actions are presented as buttons in the toolbar area. Important, often used table actions can be displayed as individual buttons: 'Export' and 'Print' in the example above. Other secondary options contained within a dropdown button. Use a button label like 'Actions', 'More' or the three-dot icon.",
          },
          {
            subheading: "When to use table actions?",
            text:
              "Only include actions in the toolbar that apply directly to the data in the data table, not to the rest of the interface.",
          },
          {
            text:
              "Table action buttons will be very visible to the user, so only include actions here that will apply to most use cases. Edge case or rarely used options should be accessed through the overflow menu to avoid overwhelming users with options.",
          },
        ],
      },
      {
        question: "Lesson: Tag",
        information:
          "A tag is used to display categorizing labels or information for other elements in a collection.",
        section: "Data display components",
        breadcrumb: "Tag",
        sections: [
          {
            image: tag,
          },
          {
            heading: "Usage",
            text:
              "Tags are used whenever an element in a collection needs to display its category or status. Tags should not be used for one-off, unique information. Tags can be displayed in any kind of component.",
          },
          {
            text:
              "Tags are useful when displaying multiple elements in a collection that have the same basic attributes but belong to different categories or have different statuses. Do not use tags for elements that will always be the same, instead use a heading or other grouping method.",
          },
          {
            text:
              "Tags are never used for primary interaction and should not be used as buttons. Clicking a tag could sort a collection by that tag, or open a page to display all elements that have that tag type. Tags should not be used as navigation elements.",
          },
         
        ],
      },
      {
        question: "Lesson: Tag options",
        section: "Data display components",
        breadcrumb: "Tag",
        sections: [
          {
            heading: "Color",
            text:
              "Tags are available in four different colors. The color of a tag depends on its content and the meaning of that tag. The following system is used for tag coloring:",
            image: tagTable,
          },
          {
            heading: "Icons",
            text:
              "Tags can contain icons. Use icons where they will help users easily identify the content of the tag. Tags must have a text label and cannot display only an icon.",
            image: tagIcons,
          },
          {
            heading: "Bold",
            text:
              "Tags have an optional bold property. Use bold tags where it is important that the tag is seen by the user in an information dense interface. Bold tags should be reserved for edge cases and not overused.",
          },
          {
            heading: "Example in use",
            image: tagExample,
          },
        ],
        
      },
      {
        question:
          "Quiz: Which of the images uses tags correctly? Click on the correct image",
        section: "Data display components",
        breadcrumb: "Tag",
        images: [tagImgIncorrect, tagImgCorrect],
        correct: 1,
        solutionImg:
          "Tags should not be used to display unique information like names",
      },
  
      {
        question: "Lesson: Tag API",
        information: "Here is the API for the tag component. You will find an example of the tag in use on the next page",
        image: tagApi,
        section: "Data display components",
        breadcrumb: "Tag",
      },
      {
        question: "Code example: Tags",
        iframe: tagsExample,
        section: "Data display components",
        breadcrumb: "Tag",
      },
      {
        question: "Coding exercise: add more functionality to the table",
        information:
          "In the code sandbox below, you will see an example for how you can use the Data table and the chips together to create a filterable table. Your task is to use the tag component to display status.",
        iframe: chipTableExample,
        section: "Data display components",
        breadcrumb: "Tag",
      },
      {
        question: "End of section quiz: Data display components",
        questions: [
          {
            question: "When should you use the data table?",
            answers: [
              {
                a:
                  "When you want to control the page layout instead of using Cascading Style Sheets (CSS)",
                b: "When you want to get an overview of your numerical data and show a pattern",
                c:
                  "When the user needs to see all the available data",
              },
            ],
            correct: 2,
            solutionQuiz: "You want to use the data table when the user needs to see all the available data. Data tables should only be presented to the user when needed. Consider using a chart when you want to get an overview of numerical data. Tables are read in a sequential way, and if the table is long, readers might give up before they get the to the most important information. Charts will give a better overall picture. Tables should not be used for layout purposes, instead use CSS",
          },
          {
            question: "When should you use standalone over inline filters in a table?",
            answers: [
              {
                a: "When filtering is not one of the main actions on a page",
                b: "When filtering is one of the main actions available on the page.",
                c:
                  "When filtering in data-heavy and compact tables",
              }
            ],
            correct: 1,
            solutionQuiz: "Standalone filters should be used over inline filters when filtering is one of the main actions available on the page. Inline filters should be used in data-heavy, compact tables where standalone filters would take too much space and it is not one of the main actions on a page",
          },
          {
            question:
              "When should you use the Tag component?",
            answers: [
              {
                a: "When you know that the element will always be the same",
                b: "When you want a button with more subtle colors than the button component provides",
                c:
                  "When you need a component for navigation",
                d:
                "Whenever an element in a collection needs to display its category or status",
                e: "When you want to display one-off, unique information"
              },
            ],
            correct: 3,
            solutionQuiz: "Whenever an element in a collection needs to display its category or status. Tags should not be used for unique information or as a button",
          },
          {
            question: "When should you use the color blue for the tag component?",
            answers: [
              {
                a:
                  "The color blue tags should be used for content that displays an error",
                b:
                  "The color blue for tags should be used for neutral information",
                c:
                  "The color blue for tags should be used to indicate validity or success",
                d:
                  "The color blue for tags should be used as the default color that should not imply meaning",
              },
            ],
            correct: 1,
            solutionQuiz: "The color blue for tags should be used for neutral information. Red should be used for error, green for validity and grey should be the default choice that does not have a special meaning",
          },
        ],
        breadcrumb: "End of section quiz",
        section: "Data display components",
      },
      {
        question: "Section 4, 5, 6, 7, 8 are coming soon",
        information: "The sections regarding Data entry components, Feedback components, Layout components, Navigation components and utilities are coming soon",
      },
   
    ],
  },
];
