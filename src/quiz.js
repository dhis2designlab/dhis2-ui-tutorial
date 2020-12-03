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
import menuApi from "./images/menuApi.png";
import menuDivider from "./images/menuDivider.png";
import menuItem from "./images/menuItem.png";
import menuSectionHeader from "./images/menuSectionHeader.png";

import flyoutMenuImage from "./images/flyoutMenuImage.png";
import FlyoutMenuExampleInUse from "./images/FlyoutMenuExampleInUse.png";
import fileInputFieldFF from "./images/fileInputFieldFF.png";
import flyoutMenuApi from "./images/flyoutMenuApi.png";

//Table

import tableActions from "./images/tableActions.png";
import tableEditingRows from "./images/tableEditingRows.png";
import tableEditingSimple from "./images/tableEditingSimple.png";
import tableEditingSingle from "./images/tableEditingSimple.png"
import tableExpandable from "./images/tableExpandable.png"
import tableFiltering from "./images/tableFiltering.png"
import tableFixedColumns from "./images/tableFixedColumns.png"
import tableFixedHeader from "./images/tableFixedHeader.png"
import tableInline from "./images/tableInline.png"
import tableInlineEditing from "./images/tableInlineEditing.png"
import tableReordering from "./images/tableReordering.png"
import tableRowActions from "./images/tableRowActions.png"
import tableSearch from "./images/tableSearch.png"
import tableSelectableRow from "./images/tableSelectableRow.png"
import tableSorting from "./images/tableSorting.png"


//Table API
import tableApi from "./images/tableApi.png";
import tableBodyApi from "./images/tableBodyApi.png";
import tableCellApi from "./images/tableCellApi.png";
import tableCellHeadApi from "./images/tableApiCellHead.png";
import tableFootApi from "./images/tableFootApi.png";
import tableHeadApi from "./images/tableHeadApi.png";
import tableRowApi from "./images/tableRowApi.png";
import tableRowHeadApi from "./images/tableRowHeadApi.png";

import Fallback from "./images/default-image.jpg";
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
import tagCorrect from "./images/tagCorrect.png";
import tagIncorrect from "./images/tagIncorrect.png";
import tagTable from "./images/tagTable.png";
import tagIcons from "./images/tagIcons.png";
import tagExample from "./images/tagExample.png";
import tooltipExample from "./images/tooltipExample.png";
import tooltipExample2 from "./images/tooltipExample2.png";
import tooltipExample3 from "./images/tooltipExample3.png";

import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import BuildIcon from '@material-ui/icons/Build';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';

import colorCorrect1 from "./images/colorCorrect1.png";
import colorIncorrect1 from "./images/colorIncorrect1.png";
import colorCorrect2 from "./images/colorCorrect2.png";
import colorIncorrect2 from "./images/colorIncorrect2.png";
import colorCorrect3 from "./images/colorCorrect3.png";
import colorIncorrect3 from "./images/colorIncorrect3.png";

import grey from "./images/grey.png";
import blue from "./images/blue.png";
import teal from "./images/teal.png";
import red from "./images/red.png";
import yellow from "./images/yellow.png";
import green from "./images/green.png";

import highContrast from "./images/highContrast.png";
import lowContrast from "./images/lowContrast.png";

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
}`

const exerciseTable = `import React from "react";
import "./styles.css";
import {
  Table,
  TableHead,
  TableRowHead,
  TableCellHead,
  TableBody,
  TableRow,
  TableCell,
  DropdownButton
} from "@dhis2/ui";

export default function App() {
  return (
    <Table>
      <TableHead>
        <TableRowHead>
          <TableCellHead>Patients on your watchlist</TableCellHead>
          <TableCellHead colSpan="9"></TableCellHead>
        </TableRowHead>
        <TableRowHead>
          <TableCellHead>
            <DropdownButton
              dataTest="dhis2-uicore-dropdownbutton"
              name="default"
              value="nothing"
            >
              First name
            </DropdownButton>
          </TableCellHead>
          <TableCellHead>
            <DropdownButton
              dataTest="dhis2-uicore-dropdownbutton"
              name="default"
              value="nothing"
            >
              Last name
            </DropdownButton>
          </TableCellHead>
          <TableCellHead>
            <DropdownButton
              dataTest="dhis2-uicore-dropdownbutton"
              name="default"
              value="nothing"
            >
              Incident date
            </DropdownButton>
          </TableCellHead>
          <TableCellHead>
            <DropdownButton
              dataTest="dhis2-uicore-dropdownbutton"
              name="default"
              value="nothing"
            >
              Last updated
            </DropdownButton>
          </TableCellHead>
          <TableCellHead>
            <DropdownButton
              dataTest="dhis2-uicore-dropdownbutton"
              name="default"
              value="nothing"
            >
              Age
            </DropdownButton>
          </TableCellHead>
          <TableCellHead colSpan="9"></TableCellHead>
        </TableRowHead>
        <TableRowHead>
          <TableCellHead>First name</TableCellHead>
          <TableCellHead>Last name</TableCellHead>
          <TableCellHead>Incident date</TableCellHead>
          <TableCellHead>Last updated</TableCellHead>
          <TableCellHead>Age</TableCellHead>
          <TableCellHead>Registering unit</TableCellHead>
          <TableCellHead>Assigned user</TableCellHead>
          <TableCellHead>Status</TableCellHead>
        </TableRowHead>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Onyekachukwu</TableCell>
          <TableCell>Kariuki</TableCell>
          <TableCell>02/06/2007</TableCell>
          <TableCell>05/25/1972</TableCell>
          <TableCell>66</TableCell>
          <TableCell>Jawi</TableCell>
          <TableCell>Sofie Hubert</TableCell>
          <TableCell>Incomplete</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Kwasi</TableCell>
          <TableCell>Okafor</TableCell>
          <TableCell>08/11/2010</TableCell>
          <TableCell>02/26/1991</TableCell>
          <TableCell>38</TableCell>
          <TableCell>Mokassie MCHP</TableCell>
          <TableCell>Dashonte Clarke</TableCell>
          <TableCell>Complete</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Siyabonga</TableCell>
          <TableCell>Abiodun</TableCell>
          <TableCell>07/21/1981</TableCell>
          <TableCell>02/06/2007</TableCell>
          <TableCell>98</TableCell>
          <TableCell>Bathurst MCHP</TableCell>
          <TableCell>Unassigned</TableCell>
          <TableCell>Incomplete</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Chiyembekezo</TableCell>
          <TableCell>Okeke</TableCell>
          <TableCell>01/23/1982</TableCell>
          <TableCell>07/15/2003</TableCell>
          <TableCell>2</TableCell>
          <TableCell>Mayolla MCHP</TableCell>
          <TableCell>Wan Gengxin</TableCell>
          <TableCell>Incomplete</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Mtendere</TableCell>
          <TableCell>Afolayan</TableCell>
          <TableCell>08/12/1994</TableCell>
          <TableCell>05/12/1972</TableCell>
          <TableCell>37</TableCell>
          <TableCell>Gbangadu MCHP</TableCell>
          <TableCell>Gvozden Boskovsky</TableCell>
          <TableCell>Complete</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Inyene</TableCell>
          <TableCell>Okonkwo</TableCell>
          <TableCell>04/01/1971</TableCell>
          <TableCell>03/16/2000</TableCell>
          <TableCell>70</TableCell>
          <TableCell>Kunike Barina</TableCell>
          <TableCell>Oscar de la Cavallería</TableCell>
          <TableCell>Complete</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Amaka</TableCell>
          <TableCell>Pretorius</TableCell>
          <TableCell>01/25/1996</TableCell>
          <TableCell>09/15/1986</TableCell>
          <TableCell>32</TableCell>
          <TableCell>Bargbo</TableCell>
          <TableCell>Alberto Raya</TableCell>
          <TableCell>Incomplete</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Meti</TableCell>
          <TableCell>Abiodun</TableCell>
          <TableCell>10/24/2010</TableCell>
          <TableCell>07/26/1989</TableCell>
          <TableCell>8</TableCell>
          <TableCell>Majihun MCHP</TableCell>
          <TableCell>Unassigned</TableCell>
          <TableCell>Complete</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Eshe</TableCell>
          <TableCell>Okeke</TableCell>
          <TableCell>01/31/1995</TableCell>
          <TableCell>01/31/1995</TableCell>
          <TableCell>63</TableCell>
          <TableCell>Mambiama CHP</TableCell>
          <TableCell>Shadrias Pearson</TableCell>
          <TableCell>Incomplete</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Obi</TableCell>
          <TableCell>Okafor</TableCell>
          <TableCell>06/07/1990</TableCell>
          <TableCell>01/03/2006</TableCell>
          <TableCell>28</TableCell>
          <TableCell>Dalakuru CHP</TableCell>
          <TableCell>Anatoliy Shcherbatykh</TableCell>
          <TableCell>Incomplete</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
`

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


const changeButton = `
    <div className="App">
    <Button
      dataTest="dhis2-uicore-button"
      name="Basic button"
      type="button"
      secondary
    >
      Basic button
    </Button>
    </div>
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


const findTheMistakeButton =  ` <>
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
</>`

const colorIframe = '<iframe src="https://codesandbox.io/embed/still-sunset-oucqv?fontsize=14&hidenavigation=1&theme=dark" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" title="still-sunset-oucqv" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>'

const iframe =
  '<iframe src="https://codesandbox.io/embed/bold-sun-l4upt?fontsize=14&hidenavigation=1&theme=dark" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" title="bold-sun-l4upt" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>';

const iframe2 =
  '<iframe src="https://codesandbox.io/embed/priceless-benz-t7sms?fontsize=14&hidenavigation=1&theme=dark" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" title="priceless-benz-t7sms" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>';
const buttonExample =
  '<iframe src="https://codesandbox.io/embed/compassionate-grass-8wq3t?fontsize=14&hidenavigation=1&theme=dark" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" title="compassionate-grass-8wq3t" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>';

const buttonFormExample = '<iframe src="https://codesandbox.io/embed/busy-sammet-u9mgn?fontsize=14&hidenavigation=1&theme=dark" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" title="busy-sammet-u9mgn" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>'
const chipIframeExample = '<iframe src="https://codesandbox.io/embed/gifted-mayer-risv4?fontsize=14&hidenavigation=1&theme=dark" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" title="gifted-mayer-risv4" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>';
const chipTableExample = '<iframe src="https://codesandbox.io/embed/keen-noether-xutgg?fontsize=14&hidenavigation=1&theme=dark" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" title="keen-noether-xutgg" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>';

const flyoutMenuExample = '<iframe src="https://codesandbox.io/embed/serene-snow-qi0wx?fontsize=14&hidenavigation=1&theme=dark" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" title="serene-snow-qi0wx" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>'

const simpleTableExample = '<iframe src="https://codesandbox.io/embed/festive-bhabha-nsi75?fontsize=14&hidenavigation=1&theme=dark" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" title="festive-bhabha-nsi75" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>'

const colorScaleIframe = '<iframe src="https://codesandbox.io/embed/still-sunset-oucqv?fontsize=14&hidenavigation=1&theme=dark" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" title="still-sunset-oucqv" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>'


export const quiz_data = [
  {
    title: "Content and communication",
    quizId: "ContentCommunication",
    courseImg: ContentCommunication,
    status: "under development",
    about:
      "Communicating consistently helps DHIS2 users understand, use and extend DHIS2. In this tutorial you will learn how to communicate effectively in DHIS2",
    topics: [
      {
        title: "Communcation",
        info: "learn about blablabla",
        taskType: "text",
        breadcrumb: "breadcrumb",
      },
      {
        title: "Building a conceptual model",
        info: "learn about blablabla",
        taskType: "coding",
        breadcrumb: "breadcrumb",
      },
      {
        title: "Error messages",
        info: "learn about blablabla",
        taskType: "quiz",
        breadcrumb: "breadcrumb",
      },
      {
        title: "Keeping the user informed",
        info: "learn about blablabla",
        taskType: "quiz",
        breadcrumb: "breadcrumb",
      },
      {
        title: "Tone of voice",
        info: "learn about blablabla",
        taskType: "quiz",
        breadcrumb: "breadcrumb",
      },
      {
        title: "Referring to the user",
        info: "learn about blablabla",
        taskType: "quiz",
        breadcrumb: "breadcrumb",
      },
    ],
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
    status: "under development",
    about:
      "The visual architecture of an application is made up of layout, spacing and stacking. The visual architecture of DHIS2 application should follow some basic rules to provide a consistent user experience across different types of apps",
    topics: [
      {
        title: "About layout",
        info: "learn about blablabla",
        taskType: "text",
      },
      {
        title: "Choosing the right layout",
        info: "learn about blablabla",
        taskType: "coding",
      },
      {
        title: "Spacing",
        info: "learn about blablabla",
        taskType: "quiz",
      },
      {
        title: "Stacking",
        info: "learn about blablabla",
        taskType: "quiz",
      },
    ],
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
    about: "Forms are one of the most common ways an application collects user input. DHIS2 applications should follow some common form of guidelines to make sure users are not unnecessarily challenged when working with forms",
    topics: [
      {
        title: "title 1",
        info: "learn about blablabla",
        taskType: "text",
      },
      {
        title: "title 2",
        info: "learn about blablabla",
        taskType: "coding",
      },
      {
        title: "title 3",
        info: "learn about blablabla",
        taskType: "quiz",
      },
    ],
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
    status: "under development",
    about:
      "Icons are simple images used in context to communicate something. They are easily recognizable and easy to remember. In DHIS2 there are some icons that are recommended to use, which you will learn more about in this tutorial",
    topics: [
      {
        title: "The Icon library",
        info: "Learn about the color scale in DHIS2",
        taskType: "text",
      },
      {
        title: "Using icons",
        info: "learn about blablabla",
        taskType: "coding",
      },
    ],
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
    status: "under development",
    about: "Typography, the selection and use of fonts, colors and sizes, is an effective way to communicate information to users. In this tutorial, you will learn the right way to use typography in DHIS2.",
    topics: [
      {
        title: "DHIS2 application typeface",
        info: "learn about blablabla",
        taskType: "text",
      },
      {
        title: "Communicating with typography",
        info: "learn about blablabla",
        taskType: "coding",
      },
      {
        title: "Guidelines",
        info: "learn about blablabla",
        taskType: "quiz",
      },
    ],
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
    courseImg: Color,
    about: "In section we will take you through how to use colors when developing applications for DHIS2. Some examples and explanations will be given as well as some coding tasks for you to try out, and some quizzes to check that you have understood the topics correctly",
    topics: [
      {
        title: "Information: DHIS2 color scale",
        info: "learn about the color scale used in DHIS2",
        taskType: "text",
      },
      {
        title: "Code example: the colors in use",
        info: "learn about blablabla",
        taskType: "coding",
      },
      {
        title: "Quiz: using color",
        info: "learn about blablabla",
        taskType: "quiz",
      },
      {
        title: "Information: accessibility",
        info: "learn about blablabla",
        taskType: "text",
      },
      {
        title: "Quiz: accessibility",
        info: "learn about blablabla",
        taskType: "quiz",
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
        sections: [{
          text: "It is important to maintain consistent usage of colors throughout the DHIS2 platform. Globally, color meanings are relative. It is not possible to say 'red = danger'. However, using a consistent color palette we can establish that 'red in DHIS2 = danger'.",
        },
        {
          text: "Color alone should not be relied upon to communicate effectively. ",
        }
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
            text: "Color usage in DHIS2 applications should be subtle. Reserve colors for when they need to communicate effectively",
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
            text: "Generally speaking, for all colors, the values also have a purpose",
            list: [
              "900-700: text, information, active or highlighted content",
              "600-300: icons, states (inactive, disabled etc.)",
              "200-050: backgrounds, tints, accents",
            ]
          }
        ],
        breadcrumb: "DHIS2 color scale",
      },
      {
        question: "Quiz: Which of the images uses colors correctly?",
        images: [colorCorrect1, colorIncorrect1],
        solutionImg: "Use neutral colors to make the information easy to understand and parse. Using unnecessary colors makes the user question: what does this color mean?",
        correct: 0,
      },
      {
        question: "Quiz: Which of the images uses colors correctly?",
        images: [colorIncorrect2, colorCorrect2],
        correct: 1,
        solutionImg: "Consistent use of red for errors or danger help the user to always understand what red means across all DHIS2 applications. If error and danger are represented with other colors it becomes much less obvious what information means or what actions do",
      },
      {
        question: "Quiz: Which of the images uses colors correctly?",
        images: [colorIncorrect3, colorCorrect3],
        correct: 1,
        solutionImg: "A single use of blue for the primary action makes it clear. Consistency aids user understanding. Using blue for non-primary actions breaks consistency and makes it harder to understand",
      },
      {
        question: "Lesson: How to import and use the colors",
        information: "The use the colors in DHIS2, you can either use the colors hex value or you can import colors from @dhis2/ui",
        sections: [
          {
            codeSnippet: importColors,
          }
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
            text: "Remember, when dealing with accessibility issues that designs may work or be understandable on your screen, but not necessarily on others. Make sure to think of all kinds of users with all kinds of hardware when designing with accessibility in mind. Use an WCAG2.0 standard accessibility checker to check contrast. Aim for AAA rating for all essential interface elements.",
          }
        ],
      },
      {
        header: "",
        question: "Quiz: accessibility",
        information: "Which image uses correct usage of color?",
        images: [color1, color2],
        correct: 0,
        breadcrumb: "Quiz: accessibility",
        solutionImg: "You need to make sure that you do not rely on color alone. You could for example also use icons which is the correct answer in this case"
      },
      {
        question: "Quiz: Click on the image that uses contrast correctly",
        images: [lowContrast, highContrast],
        correct: 1,
        solutionImg: "In this example, you see will see that the image to the right has a much higher contrast ratio, which ensure that the content is accessible to all users. On the other hand, the image on the left has a much lower contrast ration which makes information unnecessarily difficult to understand"
      }

    ],
  },
  {
    title: "DHIS2 Components",
    quizId: "Components",
    courseImg: Components,
    about:
      "DHIS2 has a collection of UI elements that can be, and should be, reused across all DHIS2 applications. The components have been designed with DHIS2 use cases in mind. Using these components means more time spent focusing on building a positive user experience and less time redesigning and rebuilding common components. Each component has its guidelines for use. In this tutorial you will learn how and when to use the different components",
    topics: [
      {
        title: "Introduction",
        content: <div>
        <p><LibraryBooksIcon /> <span style={{marginLeft: '15px'}}>Lesson: How to import components</span></p>
        <p><LibraryBooksIcon /> <span style={{marginLeft: '15px'}}>Lesson: Showcase of the DHIS2 components</span></p>
        <p><LibraryBooksIcon /> <span style={{marginLeft: '15px'}}>Lesson: Using the API for components</span></p>
      </div>,
      },
      {
        title: "Action components",
        content:  <div>
        <p>Buttons</p>
        <p><LibraryBooksIcon /><span style={{marginLeft: '15px'}}>Lesson: The different types of buttons and their usage</span></p>
        <p><EmojiObjectsIcon /><span style={{marginLeft: '15px'}}>Lesson: The Button API</span></p>
        <p><BuildIcon /><span style={{marginLeft: '15px'}}>Example: The different types of buttons in action</span></p>
        <p><ContactSupportIcon /><span style={{marginLeft: '15px'}}>Lesson: Different button options</span></p>
        <p><ContactSupportIcon /><span style={{marginLeft: '15px'}}>Coding exercise: Find the button mistakes and fix them</span></p>
        <p>Chip</p>
        <p><LibraryBooksIcon /><span style={{marginLeft: '15px'}}>Lesson: Chip</span></p>
        <p><LibraryBooksIcon /><span style={{marginLeft: '15px'}}>Lesson: Chip API</span></p>
        <p><LibraryBooksIcon /><span style={{marginLeft: '15px'}}>Coding exercise: Change the Chips from multiple select to single select</span></p>
        <p>FlyoutMenu</p>
        <p><LibraryBooksIcon /><span style={{marginLeft: '15px'}}>Lesson: FlyoutMenu</span></p>
        <p><LibraryBooksIcon /><span style={{marginLeft: '15px'}}>Lesson: FlyoutMenu API</span></p>
        <p><LibraryBooksIcon /><span style={{marginLeft: '15px'}}>Coding exercise: Add more functionality to the flyout menu</span></p>
        <p>End of section quiz: Action components</p>
      </div>,
      },
      {
        title: "Data display components",
        content:  <div>
          <p>Data table</p>
          <p><LibraryBooksIcon /><span style={{marginLeft: '15px'}}>Lesson: usage of the Data table</span></p>
          <p><LibraryBooksIcon /><span style={{marginLeft: '15px'}}>Lesson: composition of the Data table</span></p>
          <p><LibraryBooksIcon /><span style={{marginLeft: '15px'}}>Coding exercise: Here you will see a simple DHIS2 table without a header or footer. Try if you can add the header and footer</span></p>
          <p><LibraryBooksIcon /><span style={{marginLeft: '15px'}}>Lesson: Data table search</span></p>
          <p><LibraryBooksIcon /><span style={{marginLeft: '15px'}}>Lesson: Data table filterint</span></p>
          <p><LibraryBooksIcon /><span style={{marginLeft: '15px'}}>Lesson: Data table actions</span></p>
          <p>Tag</p>
          <p><LibraryBooksIcon /><span style={{marginLeft: '15px'}}>Lesson: Tag</span></p>
          <p><LibraryBooksIcon /><span style={{marginLeft: '15px'}}>Quiz: Tag</span></p>
          <p><LibraryBooksIcon /><span style={{marginLeft: '15px'}}>Lesson: Tag options</span></p>
          <p>Tooltip</p>
          <p><LibraryBooksIcon /><span style={{marginLeft: '15px'}}>Lesson: Tooltip</span></p>
          <p>Quiz</p>
          <p><LibraryBooksIcon /><span style={{marginLeft: '15px'}}>End of section quiz: Data display components</span></p>
        </div>,
      },
      {
        title: "Data entry components (coming soon)",
        content:  <div>
          <p>Checkbox</p>
          <p>Organization Unit tree</p>
          <p>Radio</p>
          <p>Select</p>
          <p>Switch</p>
          <p>Transfer</p>
        </div>,
      },
      {
        title: "Feecback components (coming soon)",
        content:  <div>
          <p>Alertbar</p>
          <p>Loading indicators</p>
        </div>,
      },
      {
        title: "Layout components (coming soon)",
        content:  <div>
        <p>Card</p>
        <p>Modal</p>
      </div>,
      },
      {
        title: "Navigation components (coming soon)",
        content:  <div>
        <p>Pagination</p>
        <p>Tabs</p>
      </div>,
      },
      {
        title: "Utilities (coming soon)",
        content:  <div>
        <p>Elevation</p>
        <p>Header bar</p>
      </div>,
      },
      {
        title: "Full examples",
        content:  <div>
        <p></p>
      </div>,
      },
      {
        title: "General",
        content:  <ul>
        <li>info</li>
      </ul>,
      },
      {
        title: "Contributing",
        content:  <ul>
        <li>info</li>
      </ul>,
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
        information: "In this section you will get a general to how you can use all the components in DHIS2.",
        breadcrumb: "Introduction",
        sections: [
          {
            text: "Some of the topics that will be covered includes:",
            list: [
              "Lesson: How to import components",
              "Lesson: Showcase of the DHIS2 components",
              "Lesson: Using the API for components",
              "Lesson: Resources that exists"
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
              "To be able to use the components, you need to import them. Up until recently, there has been different ways to import the components, depending of the type of component you want to import. @dhis2/ui unifies all of the dhis2 ui libraries, and you can now import everything that you imported previously from ui-core, ui-widgets and ui-forms directly from @dhis2/ui",
            image: importComponents,
          },
        ],
        section: "Introduction",
      },
      {
        question: "Lesson: Showcase of the DHIS2 components",
        information:
          "All the components have its own properties you can use to define how you want the component to look and behave. In the showcase below, you will see some examples of what is possible. If you want to get the most updated overview of all the components go to" + <a href="https://ui.dhis2.nu/demo/?path=/story/box--min-height" />,
        components: "show",
        section: "Introduction",
      },
      {
        question: "Lesson: Using the API for components",
        image: checkBoxApi,
        sections: [
          {
            text:  "All the components have its own properties you can use to define how you want the component to look and behave. In the next steps in this tutorial, I will got through some examples for how you can use the API and give you the knowledge for you to read up later. If you want to use other DHIS2 components, you can find their documentation here",
            link: "https://ui.dhis2.nu/#/api",
          },
          {
            text:
              "Here you can see the API for the dhis2 Checkbox component. In the first column named 'Name', you can see what type of properties the Checkbox component can take in. Each of the properties has a type, as specified in the 'Type' column. Sometimes a default value will be set for the property if nothing is set, which can be seen in the 'Default' column",
          },
        ],
        section: "Introduction",
      },
      {
        question: "Section 2: Action components",
        information:
          "Action components consist of components that the user will be able to interact with. When a user clicks on the component, an action will be performed",
        section: "Action components",
        sections: [
          {
            text: "Some of the topics that will be covered in this module includes:",
          },
          {
            subheading: "Buttons:",
            list: [
              "Lesson: The different types buttons and their usage",
              "Lesson: Button Api",
              "Example: The different types of buttons in action",
              "Quiz: Which image uses the correct button type",
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
          "Here you can see the Api for the button component. Have a look at what is possible, you will use this in later exercises",
        image: api,
        breadcrumb: "Buttons",
        section: "Action components",
      },
      {
        question: "Example: The different types of buttons in action",
        information: "Here you can see some of the possible button types in DHIS2. Familiarize yourself with the code and try to change some of the props the button uses (f.ex make all the buttons be primary buttons)",
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
            imageWidth: '40%',
          },
          {
            heading: "Icons",
            text:
              "Icons can be included in Basic, Primary, Secondary and Destructive buttons. Use an icon to supplement the text label. Remember that the user may not be fluent in the working language, so an accompanying icon on an important action can be a welcome addition. Buttons with icons only should be used for supplementary actions and should include a text tooltip on hover.",
            image: buttonIcon,
            imageWidth: '40%',
          },
          {
            heading: "Size",
            text:
              "Buttons are available in three sizes: small, medium, large. Medium is usually the correct choice. Use small button in an information dense ui. Large buttons can be use on very simple, single action pages.",
            image: buttonSize,
            imageWidth: '40%',
          },
        ],
        breadcrumb: "Buttons",
        section: "Action component",
      },
      {
        question: "Coding Exercise: Find the button mistakes and fix them",
        information: "Use the information from the page about the different types of buttons and their usage to improve the code example below.",
        hints: ["Remember when you should use primary buttons. Does the interface follow the guidelines?", "Could you create better labels for the buttons?", "Do some of the button represent the same?"],
        iframe: buttonFormExample,
        breadcrumb: "Buttons",
        section: "Action components",
        showCode: findTheMistakeButton,
      },
      {
        question: "Lesson: Chip",
        information: "Chips are useful for displaying a selection of defined choices and filters to the user",
        sections: [
          {
            heading: "Usage",
            text:
              "Chips are used to display a list of defined options, filters or views for a related view. Chips are always a secondary content to a main element, for example a data table or a dashboard. A common usage of this that can help to understand the pattern is a table with a set of filters:",
            image: chip,
          },
          {
            text:
              "The chips displayed above the table act as defined filters for the table. In the example above, selecting 'Overdue Patients' chip will select that chip and display only that data in the table below. To deselect the chip the user can click again, or a 'Clear filters' control could be provided.",
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
            text: "A chip can display an optional icon. Use icons in chips to highlight special/unique chip items. Do not use the same icon on all chips, otherwise it will be meaningless. To clarify what a group of chips are, use a title or header instead."
          },
          {
            heading: "Single vs Multiple Selections",
            text: "A group of chips can be set up for single or multiple selection, it depends on the usage. When using chips for selecting the active dashboard it makes sense to only allow a single selection at a time. You may choose to allow the user to select multiple chips, or filters, for a table displaying data."
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
        question: "Lesson: Chip api",
        information: "Here you can see the Api for the Chip component. Have a look at what is possible, you will use this in later exercises",
        image: chipApi,
        imageWidth: '50%',
        breadcrumb: "Chip",
        section: "Action component",
      },
      {
        question: "Coding Exercise: Change the Chips from multiple select to single select",
        information: "Here is an example of chips using the multiple selection options. If we remember the introduction lesson about Chips, Chips can either be used as single or multiple select depending on their usage. How would you make the Chips single select? Try to change the code",
        sections: [{
          text: "There exists many possible ways for how this could be accomplished, but you will see one possible solution by clicking the 'show solution' button below. If you are not familiar with React's useState, you can read about it here:",
          link: "https://reactjs.org/docs/hooks-state.html",
        }],
        iframe: chipIframeExample,
        breadcrumb: "Chip",
        section: "Action component",
        showCode: chipSingleSelectSol,
      },
      {
        question: "Lesson: FlyoutMenu",
        information: "A menu provides user access to options that are available when clicking the menu toggle. A menu toggle can be almost anything: button, table row, avatar etc.",
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
            text: "Make sure the menu item labels are short and easy to understand. One word is often enough to describe an action or option. Do not use sentences as labels. Some examples of good menu item labels:",
            list: [
              "'Save'",
              "'Open as map'",
              "'Export PDF'",
              "'Duplicate'",
            ],
          },
          {
            heading: "Menu levels",
            image: menuLevels,
            text: "Splitting menus into several levels with child menus makes sense when there are a lot of options that can be grouped together. An example may be an option in level 1 menu of 'Download' that has several different download formats as child menu items. Make sure that child menu items relate to their parent item, otherwise a user will struggle to discover them. A menu item with children is not selectable/actionable itself, it serves only as a container for the child elements. Try to keep menus to a maximum of 1, 2 or 3 levels, anything more than this can easily confuse the user",
          },
          {
            heading: "Ordering items",
            text: "There is no enforced ordering of menu items, they should be presented in order of relevance. Put the most commonly used items at the top of the menu for easy discovery and access.",
          },
          {
            heading: "Options",
          },
          {
            heading: "Size",
            image: menuDensity,
            text: "Menus are available in regular or dense sizes. Use dense menus in data-heavy applications used by users comfortable with technology. Use regular menus in apps that are less complex or have few controls."
          },
          {
            heading: "Dividers & Section Headers",
            image: menuSections,
            text: "Items in a menu can be split into separate sections by using dividers. Group relevant menu items together to help the user understand the options quickly. A divider can be used alone. If using a section header a divider will be automatically included. Try not to group single menu items together. An exception to this is a critical destructive menu item, like 'Delete', which can be separated from other menu items."
          },
          {
            heading: "Examples in use",
            image: FlyoutMenuExampleInUse,
          },
        ],
        breadcrumb: "Menu",
        section: "Action component",
  },
  {
    question: "Lesson: FlyoutMenu Api",
    sections: [{
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
  information: "In this exercise, you are supposed to add more functionality to the flyoutMenu. Try to transform the code snippet to represent the image. You need to use the FlyoutMenu, MenuItem, MenuSectionHeader and MenuDivider as described on the previous page to reflect the image",
  sections: [
    {
      text: "For the the Chart, Table and Map icons I have used material-ui/icons",
    },
    {
      text: "To import the icons I have used, you can use these import statements:"
    },
    {
      codeSnippet: flyoutExampleIcons,
    }
  ],
  image: flyoutMenuImage,
  imageWidth: '50%',
  iframe: flyoutMenuExample,
  breadcrumb: "Menu",
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
                "Primary buttons should be used to highlight the most importent/main action on the page. Should rarerly be more than one primary button",
              c:
                "Primary buttons should be used when you want to highlight to the user the seriousness of the action",
              d:
              "Primary buttons should be used for passive actions, often as an alternative to the secondary action. If 'Save' is secondary, 'Cancel could be primary. Do not use as the only action on a page",
            },
          ],
          correct: 0,
        },
        {
          question: "When should you use the destructive button?",
          answers: [
            {
              a:
                "Destructive buttons should be the default choice for the majority of actions. Several destructive buttons can be used in the same area",
              b:
                "Destructive buttons should be used to highlight the most importent/main action on the page. Should rarerly be more than one primary button",
              c:
                "Destructive buttons should be used when you want to highlight to the user the seriousness of the action",
                d:
                "Destructive buttons should be used for passive actions, often as an alternative to the primary action. If 'Save' is primary, 'Cancel could be destructive. Do not use as the only action on a page",
            },
          ],
          correct: 0,
        },
        {
          question: "When should you use the secondary button?",
          answers: [
            {
              a:
                "Secondary buttons are the most often used button that will suit the majority of actions. Should be the default choice for the majority of actions. Several secondary buttons can be used in the same area",
              b:
                "Destructive buttons should be used to highlight the most importent/main action on the page. Should rarerly be more than one primary button",
              c:
                "Destructive buttons should be used when you want to highlight to the user the seriousness of the action",
              d:
              "Secondary buttons should be used for passive actions, often as an alternative to the primary action. If 'Save' is primary, 'Cancel could be secondary. Do not use as the only action on a page",
          },
          ],
          correct: 0,
        },
        {
          question:
            "What is the difference between basic buttons and secondary buttons?",
          answers: [{ a: "Blablabla", b: "Blabbalba", c: "blablabla" }],
          correct: 0,
        },

        {
          question: "How should you display Chips?",
          answers: [
            {
              a:
                "Chips should be displayed in a horizontal list, where space permits",
              b:
                "Chips should always be stacked on top of each other",
              c:
                "Chips should have horizontal scrolling when a large number of chips are used",
            },
          ],
          correct: 1,
        },
        {
          question: "How should you use Chips?",
          answers: [
            {
              a:
                "When you want to trigger an action, like  'Save' or 'Open'",
              b:
                "When you want to be able to filter or select an option",
              c:
                "Chips should only be used as a way of describing an element, and should not be interactive",
              d: "A group of chips should all have the same icon to show that they belong together",
            },
          ],
          correct: 1,
        },
        {
          question: "When should you use single selection chips over multipleselection chips?",
          answers: [
            {
              a:
                "When you want to use chips for filtering",
              b:
                "When you want to use the chip as a button",
              c:
                "When you want to use chips for selecting the active dashboard",
            },
          ],
          correct: 2,
        },
        {
          question: "When should you use the Flyoutmenu component?",
          answers: [{ a: "When space is limited and displaying all the options would be impractical", b: "When you want to be able to choose multiple options at once", c: "When you...." }],
          correct: 0,
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
        text: "Some of the topics that will be covered in this module includes:",
      },
      {
        subheading: "Data table:",
        list: [
          "Lesson: usage of the Data table",
          "Lesson: composition of the Data table",
          "Lesson: the Data table Api",
          "Coding exercise: Here is a simple DHIS2 table. See if you can add a table to reflect the image",
          "Lesson: Data table search",
          "Lesson: Data table filtering",
          "Lesson: Data table actions",
        ],
      },
      {
        subheading: "Tag:",
        list: [
          "Lesson: Tag usage",
          "Lesson: Tag options",
          "Lesson: Tag Api",
          "Code example: example of tags in use",
        ],
      },
      {
        subheading: "Tooltip:",
        list: [
          "Lesson: Tooltip",
        ],
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
        text: "There are several different types of functionality and options available in the data table component. The correct data table to use will depend on the use case and type of data being displayed. The functionality and options available in the data table component are highlighted and discussed below.",
      },

    ],
  },
  {
    question: "Lesson: composition of the Data table",
    sections: [{
      heading: "Composition",
      image: composition,
      text: "A data table is made up of multiple elements, some of which are optional",
    },
    {
      text: "1. Toolbar, optional",
    },
    {
      text: "2. Data rows and header, required",
    },
    {
      text: "3. Footer, optional"
    }
    ],
  },
  {
    question: "Lesson: the Data table Api",
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
    ]
  },
  {
    question: "Coding exercise: Here you will see a simple DHIS2 table without a header or footer. Try if you can add the header and footer",
    iframe: simpleTableExample,
    showCode: exerciseTable,
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
        text: "Search allows a user to search for a specific term across the entire data table.",
      },
      {
        subheading: "How is search used?",
        text: "A search input can be included inside the table toolbar area or made available outside of the table. The location of the search input depends on the importance of search and how it relates to the task. If searching is a logical step performed before looking at the table the input should be shown outside, above the table. If searching is a secondary action it can be included inside the table.",
      },
      {
        text: "Be sure to inform the user with an empty state if there are no results for a search term.",
      },
      {
        subheading: "When to use search?", 
        text: "Include search whenever a user might need to find a specific data record in the table. Search can be quicker than filtering if the user knows the exact data item they are looking for. Often search and filtering work well in combination.",
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
        text: "Filters allow a user to view a precise, focused set of data. Filtering is a very effective way of finding the right data. Enabling filtering on a data table means that a single data table can fulfill several different functions for varying users and use cases.",
      },
      {
        text: "Filtering works best when a user wants to return multiple results that fit some criteria. If a user is looking for a single result, especially where they know a name/title/attribute, then provide search functionality outside of the table.",
      },
      {
        text: "Never filter data in a table without informing the user, the user must know they are viewing a filtered set of data.",
      },
      {
        text: "There are two ways to filter data in a data table: standalone or inline.",
      },
      {
        heading: "Filtering: Standalone",
        image: tableFiltering,
      },
      {
        subheading: "What are standalone filters?",
        text: "Standalone filters are buttons that can be used to filter on a column in a data table.",
      },
      {
        subheading: "How are standalone filters used?",
        text: "Standalone filter buttons should be displayed inside the table toolbar area. The available filters must be defined, none will be provided by default. Clicking a filter button opens a popover with input controls. An actively filtered column is highlighted with an active button and text indicating the applied filter.",
      },
      {
        subheading: "When to use standalone filters?",
        text: "Standalone filters are useful when filtering is one of the main actions available on the page. Standalone filters will draw the user's attention and are easier to use for users with lower tech literacy. Only provide standalone filters that are useful to the user, as filter buttons add visual noise and potential confusion to a data table.",
      },
      {
        heading: "Filtering: Inline",
        image: tableInline,
      },
      {
        subheading: "What are inline filters?",
        text: "Inline filter controls are a compact way to filter data in the data table.",
      },
      {
        subheading: "How are inline filters used?",
        text: "The filter input for a column is displayed by clicking the filter icon in the column header. Multiple columns can be filtered at the same time.",
      },
      {
        subheading: "When to use inline filters?",
        text: "Use inline filters in data-heavy, compact tables where standalone filters would take too much space. Inline filters are useful when filtering is not one of the main actions on a page, but is a tool that will be used occasionally.",
    },
  ]
  },
  {
    question: "Lesson: Data table actions",
    sections: [
      {
        image: tableActions,
      },
      {
        subheading: "What are table actions?",
        text: "Actions that can be applied to the entire data table or the currently selected data rows.",
      },
      {
        subheading: "How are table actions used?",
        text: "Table actions are presented as buttons in the toolbar area. Important, often used table actions can be displayed as individual buttons: 'Export' and 'Print' in the example above. Other secondary options contained within a dropdown button. Use a button label like 'Actions', 'More' or the three-dot icon.",
      },
      {
        subheading: "When to use table actions?",
        text: "Only include actions in the toolbar that apply directly to the data in the data table, not to the rest of the interface.",
      },
      {
        text: "Table action buttons will be very visible to the user, so only include actions here that will apply to most use cases. Edge case or rarely used options should be accessed through the overflow menu to avoid overwhelming users with options.",
      },
    ]
  },
  {
    question: "Lesson: Tag",
    information:
      "A tag is used to display categorizing labels or information for other elements in a collection.",
    section: "Data display components",
    breadcrumb: "Tag",
    image: tag,
    sections: [
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
        text: "Tags are never used for primary interaction and should not be used as buttons. Clicking a tag could sort a collection by that tag, or open a page to display all elements that have that tag type. Tags should not be used as navigation elements.",
      },
      {
        heading: "Composition",
        image: composition,
        text: "A data table is made up of multiple elements, some of which are optional",
        list: ["Toolbar, optional", "Data rows and header, required", "Footer, optional"]
      },
      {
        heading: "Options",
      },
    ],
  },
  {
    question: "Quiz: Tag",
    information:
      "A tag is used to display categorizing labels or information for other elements in a collection.",
    section: "Data display components",
    breadcrumb: "Tag",
    images: [tagCorrect, tagIncorrect],
    correct: 0,
  },
  {
    question: "Lesson: Tag options",
    sections: [
      {
        header: "Color",
        text: "Tags are available in four different colors. The color of a tag depends on its content and the meaning of that tag. The following system is used for tag coloring:",
        image: tagTable,
      },
      {
        header: "Icons",
        text: "Tags can contain icons. Use icons where they will help users easily identify the content of the tag. Tags must have a text label and cannot display only an icon.",
        image: tagIcons,
      },
      {
        header: "Bold",
        text: "Tags have an optional bold property. Use bold tags where it is important that the tag is seen by the user in an information dense interface. Bold tags should be reserved for edge cases and not overused.",
      },
      {
        header: "Example in use",
        image: tagExample,
      }
    ]
  },
  {
    question: "Lesson: Tooltip",
    information:
      "A tooltip is a container for displaying information about an element, it is displayed when a user hovers over the element.",
    section: "Data display components",
    breadcrumb: "Tooltip",
    sections: [
      {
        header: "Usage",
        text: "Tooltips only display when a user hovers over an element. Do not use tooltips for critical or important information, users may not find the information or it may completely unavailable to mobile users. Information provided in tooltips should be supplementary or provide helpful context. Icon buttons can use tooltips to inform the user of their action. Never put important information or actions inside a tooltip.",
        list: ["Common usage of a tooltip is to expand on the displayed information when the user hovers over the element.","Do not place actions inside a tooltip, they would be hidden from the user and difficult to click.","Only text can be displayed in a tooltip. A popover can be used for rich information.", "Limit the text inside a tooltip to a single, short sentence", "Do not repeat information in a tooltip, provide extra relevant, useful information"]
      },
      {
        header: "Options",
      },
      {
        header: "Placement",
        text: "By default the tooltip should display above the hovered element. Alternatively, a tooltip may be displayed underneath or to the side of an element if there is limited space.",
      },
      {
        header: "Example in use",
        text: "This tooltip gives the user some more context for the upwards arrow inside the cell: the percentage positive growth and the previous value.", 
        image: tooltipExample,
      },
      {
        text: "This tooltip gives extra information for new users about the action attributed to this icon used in an information dense environment.", 
        image: tooltipExample2,
      },
      {
        text: "Hovering over the selected period elements displays extra information, which period is selected. The tooltip is positioned down to avoid overlapping the information above.",
        image: tooltipExample3,
      }
    ]
  },
  {
    question: "End of section quiz: Data display components",
      questions: [
        {
          question: "How should you display Chips?",
          answers: [
            {
              a:
                "Chips should be displayed in a horizontal list, where space permits",
              b:
                "Chips should always be stacked on top of each other",
              c:
                "Chips should have horizontal scrolling when a large number of chips are used",
            },
          ],
          correct: 1,
        },
        {
          question: "How should you use Chips?",
          answers: [
            {
              a:
                "When you want to trigger an action, like  'Save' or 'Open'",
              b:
                "When you want to be able to filter or select an option",
              c:
                "Chips should only be used as a way of describing an element, and should not be interactive",
              d: "A group of chips should all have the same icon to show that they belong together",
            },
          ],
          correct: 1,
        },
        {
          question: "When should you use single selection chips over multipleselection chips?",
          answers: [
            {
              a:
                "When you want to use chips for filtering",
              b:
                "When you want to use the chip as a button",
              c:
                "When you want to use chips for selecting the active dashboard",
            },
          ],
          correct: 2,
        },
        {
          question: "When should you use the destructive button?",
          answers: [
            {
              a:
                "Destructive buttons should be the default choice for the majority of actions. Several destructive buttons can be used in the same area",
              b:
                "Destructive buttons should be used to highlight the most importent/main action on the page. Should rarerly be more than one primary button",
              c:
                "Destructive buttons should be used when you want to highlight to the user the seriousness of the action",
                d:
                "Destructive buttons should be used for passive actions, often as an alternative to the primary action. If 'Save' is primary, 'Cancel could be destructive. Do not use as the only action on a page",
            },
          ],
          correct: 0,
        },
        {
          question: "When should you use the secondary button?",
          answers: [
            {
              a:
                "Secondary buttons are the most often used button that will suit the majority of actions. Should be the default choice for the majority of actions. Several secondary buttons can be used in the same area",
              b:
                "Destructive buttons should be used to highlight the most importent/main action on the page. Should rarerly be more than one primary button",
              c:
                "Destructive buttons should be used when you want to highlight to the user the seriousness of the action",
              d:
              "Secondary buttons should be used for passive actions, often as an alternative to the primary action. If 'Save' is primary, 'Cancel could be secondary. Do not use as the only action on a page",
          },
          ],
          correct: 0,
        },
        {
          question:
            "What is the difference between basic buttons and secondary buttons?",
          answers: [{ a: "Blablabla", b: "Blabbalba", c: "blablabla" }],
          correct: 0,
        },

        {
          question: "When should you use the Chip component?",
          answers: [{ a: "When you want to trigger some action, like 'Save' or 'Exit'", b: "When you want to display categorizing labels or information for other elements in a collection", c: "Whenever an element in a collection needs to display its category or status" }],
          correct: 1,
        },
        {
          question: "When should you use the multiple select for the Chip component?",
          answers: [{ a: "When you want to trigger some action, like 'Save' or 'Exit'", b: "When you want to display categorizing labels or information for other elements in a collection", c: "Whenever an element in a collection needs to display its category or status" }],
          correct: 1,
        },
        {
          question: "When should you use the Flyoutmenu component?",
          answers: [{ a: "When space is limited and displaying all the options would be impractical", b: "When you want to be able to choose multiple options at once", c: "When you...." }],
          correct: 0,
        },
      ],
      breadcrumb: "End of section quiz",
      section: "Data display components",
    },
  {
    question: "Section 4: Data entry components (COMING SOON)",
    information:
      "Data entry components consist of components that based on the input from the user will have a set state",
    section: "Data entry components",
    sections: [
      {
        text: "Some of the topics that will be covered includes:",
      },
      {
        subheading: "Checkbox:",
        list: [
          "Lesson: The different types buttons and its usage",
          "Example: The different types of buttons in action",
          "Try it yourself: Change the button to a big secondary button",
          "Quiz: Buttons",
          "Quiz: Which image uses the correct button type",
          "Lesson: Different button options",
        ],
      },
      {
        subheading: "Organization Unit tree (NO INFO):",
        list: [
          "Lesson: How to import components",
        ],
      },
      {
        subheading: "Radio:",
        list: [
          "Lesson: How to import components",
        ],
      },
      {
        subheading: "Select:",
        list: [
          "Lesson: How to import components",
        ],
      },
      {
        subheading: "Switch:",
        list: [
          "Lesson: How to import components",
        ],
      },
      {
        subheading: "Transfer:",
        list: [
          "Lesson: How to import components",
        ],
      },
    ],
  },
  {
    question: "Section 5: Feedback components (COMING SOON)",
    information:
      "Lorem ipsum gnfgdgdf ndkfjdsljfkdslf fndskfjdsklfjsdlk jkfjdsklfjdkl fdksfjdklfj jfkdsljlf lkll jklkdsad klajdsksjf fkldjfls",
    section: "Data display components",
    sections: [
      {
        text: "Some of the topics that will be covered includes:",
      },
      {
        text: "Alertbar:",
        list: [
          "Lesson: The different types buttons and its usage",
          "Example: The different types of buttons in action",
          "Try it yourself: Change the button to a big secondary button",
          "Quiz: Buttons",
          "Quiz: Which image uses the correct button type",
          "Lesson: Different button options",
        ],
      },
      {
        text: "Loading indicators:",
        list: [
          "Lesson: How to import components",
        ],
      },
    ],
  },
  {
    question: "Section 6: Layout components (COMING SOON)",
    information:
      "Lorem ipsum gnfgdgdf ndkfjdsljfkdslf fndskfjdsklfjsdlk jkfjdsklfjdkl fdksfjdklfj jfkdsljlf lkll jklkdsad klajdsksjf fkldjfls",
    section: "Data display components",
    sections: [
      {
        text: "Some of the topics that will be covered includes:",
      },
      {
        text: "Card:",
        list: [
          "Lesson: The different types buttons and its usage",
        ],
      },
      {
        text: "Modal:",
        list: [
          "Lesson: How to import components",
        ],
      },
    ],
  },
  {
    question: "Section 7: Navigation components (COMING SOON)",
    information:
      "Lorem ipsum gnfgdgdf ndkfjdsljfkdslf fndskfjdsklfjsdlk jkfjdsklfjdkl fdksfjdklfj jfkdsljlf lkll jklkdsad klajdsksjf fkldjfls",
    section: "Navigation components",
    sections: [
      {
        text: "Some of the topics that will be covered includes:",
      },
      {
        text: "Pagination:",
        list: [
          "Lesson: The different types buttons and its usage",
        ],
      },
      {
        text: "Tabs:",
        list: [
          "Lesson: How to import components",
        ],
      },
    ],
  },
{
    question: "Section 8: Utilites (COMING SOON)",
    information:
      "Lorem ipsum gnfgdgdf ndkfjdsljfkdslf fndskfjdsklfjsdlk jkfjdsklfjdkl fdksfjdklfj jfkdsljlf lkll jklkdsad klajdsksjf fkldjfls",
    section: "Data display components",
    sections: [
      {
        text: "Some of the topics that will be covered includes:",
      },
      {
        text: "Elevation:",
        list: [
          "Lesson: The different types buttons and its usage",
        ],
      },
      {
        text: "Headerbar:",
        list: [
          "Lesson: How to import components",
        ],
      },
    ],
  },
  {
    question: "Section 9: Full examples",
    information:
      "In this section, you will get multiple examples of components working together",
    section: "Full examples",
    sections: [
      {
        text: "Some of the topics that will be covered includes:",
      },
      {
        list: [
          "Example: Filterable table with chips",
        ],
      },
    ],
  },
  {
    question: "Example: Filterable table with chips",
    section: "Full Examples",
    iframe:  chipTableExample,
  },
  {
    question: "Section 10: General",
    information:
      "Some general tips that is related to all the components",
    section: "General",
    sections: [
      {
        text: "Some of the topics that will be covered includes:",
        list: [
          "Lesson: The difference between normal and FF components",
          "Information: How can you contribute?"
        ],
      },
    ],
  },
  {
    question: "What is the difference between normal and FF components",
    information:
      "If you go to storybook that lists all the components, you will find that some of the different components exists as normal components and FF components",
    link: "https://ui.dhis2.nu/demo/",
    sections: [
      {
        text: "One example is the FileInputField. In storybook, you will see the FileInputField as a normal component and FF component:",
        image: fileInputFieldFF,
      },
      {
        text: "So what is the difference?", 
      },
      {
        text: "All the final-form enabled components are suffixed with 'FieldFF'. The Field suffix indicates the relation with our regular Field components and FF stands for final-form......... "
      }
    ],
    breadcrumb: "Normal vs FF components",
    section: "General"
  },
    ],
  },
];
