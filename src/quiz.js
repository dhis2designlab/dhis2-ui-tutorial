import React from "react";

import color1 from "./images/colour_img.png";
import color2 from "./images/color_img2.png";
import api from "./images/api.png";
import buttonTable from "./images/buttonTable.png";
import buttonIcon from "./images/buttonIcon.png";
import buttonSize from "./images/buttonSize.png";
import toggle from "./images/toggle.png";
import importComponents from "./images/importComponents.png";

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

const flyoutMenuSolution = `
<FlyoutMenu>
      <MenuItem label="Send message" />
      <MenuItem label="Download" />
      <MenuItem label="Open as">
        <MenuItem label="Chart" />
        <MenuItem label="Pivot table" />
        <MenuItem label="Map" />
      </MenuItem>
      <MenuItem label="Share interpretation" />
    </FlyoutMenu>`;


const changeButton = `
  function createStyleObject(classNames, style) {
    return classNames.reduce((styleObject, className) => {
      return {...styleObject, ...style[className]};
    }, {});
  }
  
  function createClassNameString(classNames) {
    return classNames.join(' ');
  }
  
  // this comment is here to demonstrate an extremely long line length, well beyond what you should probably allow in your own code, though sometimes you'll be highlighting code you can't refactor, which is unfortunate but should be handled gracefully
  
  function createChildren(style, useInlineStyles) {
    let childrenCount = 0;
    return children => {
      childrenCount += 1;
      return children.map((child, i) => createElement({
        node: child,
        style,
        useInlineStyles,
      }));
    }
  }
  
  function createElement({ node, style, useInlineStyles, key }) {
    const { properties, type, tagName, value } = node;
    if (type === "text") {
      return value;
    } else if (tagName) {
      const TagName = tagName;
      const childrenCreator = createChildren(style, useInlineStyles);
      const props = (
        useInlineStyles
        ? { style: createStyleObject(properties.className, style) }
        : { className: createClassNameString(properties.className) }
      );
      const children = childrenCreator(node.children);
      return <TagName key={key} {...props}>{children}</TagName>;
    }
  }
  `;

const iframe =
  '<iframe src="https://codesandbox.io/embed/bold-sun-l4upt?fontsize=14&hidenavigation=1&theme=dark" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" title="bold-sun-l4upt" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>';

const iframe2 =
  '<iframe src="https://codesandbox.io/embed/priceless-benz-t7sms?fontsize=14&hidenavigation=1&theme=dark" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" title="priceless-benz-t7sms" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>';
const buttonExample =
  '<iframe src="https://codesandbox.io/embed/compassionate-grass-8wq3t?fontsize=14&hidenavigation=1&theme=dark" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" title="compassionate-grass-8wq3t" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>';

const chipIframeExample = '<iframe src="https://codesandbox.io/embed/gifted-mayer-risv4?fontsize=14&hidenavigation=1&theme=dark" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" title="gifted-mayer-risv4" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>';
const chipTableExample = '<iframe src="https://codesandbox.io/embed/keen-noether-xutgg?fontsize=14&hidenavigation=1&theme=dark" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" title="keen-noether-xutgg" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>';

const flyoutMenuExample = '<iframe src="https://codesandbox.io/embed/bold-night-pmruq?fontsize=14&hidenavigation=1&theme=dark" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" title="bold-night-pmruq" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>'

export const quiz_data = [
  {
    title: "Content and communication",
    quizId: "ContentCommunication",
    courseImg: ContentCommunication,
    status: "under development",
    about:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinction At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
    topics: [
      {
        title: "title 1",
        info: "learn about blablabla",
        taskType: "text",
        breadcrumb: "breadcrumb",
      },
      {
        title: "title 2",
        info: "learn about blablabla",
        taskType: "coding",
        breadcrumb: "breadcrumb",
      },
      {
        title: "title 3",
        info: "learn about blablabla",
        taskType: "quiz",
        breadcrumb: "breadcrumb",
      },
    ],
    steps: [
      {
        header: "header1",
        question: "What is blabla1?",
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
        question: "What is blabla2?",
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
        question: "What is blabla3?",
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
    title: "Layout, Spacing and Stacking",
    quizId: "LayoutSpacingStacking",
    courseImg: Layout,
    status: "under development",
    about:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
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
    about: "this is a quiz about blablabl",
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
      {
        header: "header2",
        question: "What is blabla?",
        alternatives: [
          { a: "To alert about danger" },
          { b: "General interface elements" },
          { c: "Selected or active element" },
        ],
        correct: 2,
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
    ],
  },
  {
    title: "Icons",
    quizId: "Icons",
    courseImg: Icon,
    status: "under development",
    about:
      "Color is used in DHIS2 to support effective communication. DHIS2 applications use color to help the user understand information, feedback and more. The colors used in an application should not be chosen based primarily on how they look, but how they convey information and aid understanding. It is important to maintain consistent usage of colors throughout the DHIS2 platform. Globally, color meanings are relative. It is not possible to say 'red = danger'. However, using a consistent color palette we can establish that 'red in DHIS2 = danger'. Color alone should not be relied upon to communicate effectively. Read more about color accessibility.",
    topics: [
      {
        title: "DHIS2 color Scale",
        info: "Learn about the color scale in DHIS2",
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
        correct: 2,
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
        correct: 2,
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
    ],
  },
  {
    title: "Typography",
    quizId: "Typography",
    courseImg: Typography,
    status: "under development",
    about: "this is a quiz about blablabl",
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
    about:
      "Color is used in DHIS2 to support effective communication. DHIS2 applications use color to help the user understand information, feedback and more. The colors used in an application should not be chosen based primarily on how they look, but how they convey information and aid understanding. It is important to maintain consistent usage of colors throughout the DHIS2 platform. Globally, color meanings are relative. It is not possible to say 'red = danger'. However, using a consistent color palette we can establish that 'red in DHIS2 = danger'. Color alone should not be relied upon to communicate effectively.",
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
        question: "Color",
        information:
          "In section we will take you through how to use colors when developing applications for DHIS2. Some examples and explanations will be given as well as some coding tasks for you to try out, and some quizzes to check that you have understood the topics correctly",
        correct: 0,
        breadcrumb: "breadcrumb",
      },
      {
        header: "DHIS2 color scale",
        question: "DHIS2 color scale",
        image: "../images/colours.png",
        information:
          "The DHIS2 color scale contains 7 colors. Each color has 10 shades. This color system provides enough colors for most situations. Each color in the DHIS2 color scale has a purpose.",
        sections: [
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
        ],
        breadcrumb: "breadcrumb",
      },
      {
        header: "",
        question: "Code example: the colors in use",
        information: "Test out how to use the DHIS2 colors",
        iframe: iframe,
        breadcrumb: "breadcrumb",
      },
      {
        header: "Qu",
        question: "Quiz: when should you use the color grey in DHIS2?",
        alternatives: [
          { a: "To alert about danger" },
          { b: "General interface elements" },
          { c: "Selected or active element" },
        ],
        correct: 1,
        breadcrumb: "breadcrumb",
        //iframe: iframe2,
      },
      {
        header: "",
        question: "Accessibility",
        sections: [
          {
            text:
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? ",
          },
          {
            text:
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam. ",
          },
          {
            text:
              "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat",
          },
        ],
      },
      {
        header: "",
        question: "Quiz: accessibility",
        information: "Which image uses correct usage of color?",
        images: [color1, color2],
        correct: 1,
        breadcrumb: "breadcrumb",
      },
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
        <p><LibraryBooksIcon /> <span style={{marginLeft: '15px'}}>Lesson: The different types of buttons and its usage</span></p>
        <p><EmojiObjectsIcon /> <span style={{marginLeft: '15px'}}>Example: The different types of buttons in action</span></p>
        <p><BuildIcon /> <span style={{marginLeft: '15px'}}>Try it yourself: Change the button to a big secondary button</span></p>
        <p><ContactSupportIcon /> <span style={{marginLeft: '15px'}}>Quiz: Buttons</span></p>
        <p><ContactSupportIcon /> <span style={{marginLeft: '15px'}}>Quiz: Which image uses the correct button type</span></p>
        <p><LibraryBooksIcon /> <span style={{marginLeft: '15px'}}>Lesson: Different button options</span></p>
        <p>Chip</p>
        <p>Menu</p>
      </div>,
      },
      {
        title: "Data display components",
        content:  <ul>
        <li>Data table</li>
        <li>Table</li>
        <li>Tooltip</li>
      </ul>,
      },
      {
        title: "Data entry components",
        content:  <ul>
        <li>Checkbox</li>
        <li>Organization Unit tree</li>
        <li>Radio</li>
        <li>Select</li>
        <li>Switch</li>
        <li>Transfer</li>
      </ul>,
      },
      {
        title: "Feecback components",
        content:  <ul>
        <li>Alert bar</li>
        <li>Loading indicators</li>
      </ul>,
      },
      {
        title: "Layout components",
        content:  <ul>
        <li>Card</li>
        <li>Modal</li>
      </ul>,
      },
      {
        title: "Navigation components",
        content:  <ul>
        <li>Pagination</li>
        <li>Tabs</li>
      </ul>,
      },
      {
        title: "Utilities",
        content:  <ul>
        <li>Elevation</li>
        <li>Header bar</li>
      </ul>,
      },
      {
        title: "Full examples",
        content:  <ul>
        <li>Elevation</li>
        <li>Header bar</li>
      </ul>,
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
        image: api,
        sections: [
          {
            text:  "All the components have its own properties you can use to define how you want the component to look and behave. In the next steps in this tutorial, I will got through some examples for how you can use the API and give you the knowledge for you to read up later. If you want to use other DHIS2 components, you can find their documentation here",
            link: "https://ui.dhis2.nu/#/api",
          },
          {
            text:
              "Here you can see the API for the dhis2 button component. In the first column named 'Name', you can see what type of properties the Button component can take in. Each of the properties has a type, as specified in the 'Type' column. Sometimes a default value will be set for the property if nothing is set, which can be seen in the 'Default' column",
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
            text: "Some of the topics that will be covered includes:",
          },
          {
            subheading: "Buttons:",
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
            subheading: "Chip:",
            list: [
              "Lesson: How to import components",
            ],
          },
          {
            subheading: "Menu:",
            list: [
              "Lesson: How to import components",
            ],
          },
        ],
      },
      {
        question: "Lesson: The different types of buttons and its usage",
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
        question: "Example: The different types of buttons in action",
        iframe: buttonExample,
        breadcrumb: "Buttons",
        section: "Action components",
      },
      {
        question:
          "Try it yourself: Change the button to a big secondary button",
        iframe: iframe2,
        breadcrumb: "Buttons",
        showCode: changeButton,
        breadcrumb: "Buttons",
        section: "Action components",
      },
      {
        question: "Quiz: Which image uses the correct button types?",
        images: [buttonTable, buttonTable],
        correct: 0,
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
        information: "The Api for chips",
        image: chipApi,
        imageWidth: '50%',
        breadcrumb: "Chip",
        section: "Action component",
      },
      {
        question: "Example: Chip in use",
        information: "The Api for chips",
        iframe: chipIframeExample,
        breadcrumb: "Chip",
        section: "Action component",
      },
      {
        question: "Quiz: Which image uses the chips correct",
       // information: "Chips should only be used for filtering or selecting an option. Do not use filters to trigger actions such as 'Save', 'Exit' or 'Open'. Use a button to trigger actions.",
        breadcrumb: "Chip",
        section: "Action component",
        images: [chip, chipSelected], //Find images
        //ADD SHOW DESCRIPTION
      },
      {
        question: "Lesson: Menu",
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
            image: chipSelected,
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
            image: chipExample,
          },
        ],
        breadcrumb: "Menu",
        section: "Action component",
    },
    {
      question: "Lesson: Menu API",
      sections: [{
        heading: "Menu",
        image: menuApi,
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
      breadcrumb: "Menu",
      section: "Action component",
  },
  {
    question: "Lesson: FlyoutMenu api",
    sections: [{
      heading: "Menu",
      image: menuApi,
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
    breadcrumb: "Menu",
    section: "Action component",
},
{
  question: "Coding exercise: Add more functionality to the flyout menu",
  section: "Try to recreate this image:",
  image: menuLevels,
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
                "Primary buttons should be the default choice for the majority of actions. Several primary buttons can be in the same area",
              b:
                "Primary buttons should be used to highlight the most importent/main action on the page. Should rarerly be more than one primary button",
              c:
                "Primary buttons should be used when you want to highlight to the user the seriousness of the action",
            },
          ],
          correct: 0,
        },
        {
          question: "When should you use the destructive button?",
          answers: [
            {
              a:
                "Destructive buttons should be the default choice for the majority of actions. Several primary buttons can be in the same area",
              b:
                "Destructive buttons should be used to highlight the most importent/main action on the page. Should rarerly be more than one primary button",
              c:
                "Destructive buttons should be used when you want to highlight to the user the seriousness of the action",
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
          question: "When should blabla?",
          answers: [{ a: "Blablabla", b: "Blabbalba", c: "blablabla" }],
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
          "Lesson: The different types buttons and its usage",
          "Example: The different types of buttons in action",
          "Try it yourself: Change the button to a big secondary button",
          "Quiz: Buttons",
          "Quiz: Which image uses the correct button type",
          "Lesson: Different button options",
        ],
      },
      {
        subheading: "Table:",
        list: [
          "Lesson: How to import components",
        ],
      },
      {
        subheading: "Tag:",
        list: [
          "Lesson: How to import components",
        ],
      },
      {
        subheading: "Tooltip:",
        list: [
          "Lesson: How to import components",
        ],
      },
    ],
  },
  {
    question: "Lesson: Data table",
    information:
      "A data table is used to display data in a structured way. Data tables have functionality for viewing and manipulating data.",
    section: "Data display components",
    breadcrumb: "Data table",
    image: dataTable,
    sections: [
      {
        heading: "Usage",
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
      {
        heading: "Composition",
        image: composition,
        text: "A data table is made up of multiple elements, some of which are optional",
        list: ["Toolbar, optional", "Data rows and header, required", "Footer, optional"]
      },

    ],
  },
  {
    question: "Lesson: Data table options",
    section: "Data display components",
    breadcrumb: "Data table",
    sections: [
      {
        heading: "Search",
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
      {
        heading: "Table actions",
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
    ],
  },
  {
    question: "Example: Data table",
    information:
      "A data table is used to display data in a structured way. Data tables have functionality for viewing and manipulating data.",
    section: "Data display components",
    breadcrumb: "Data table",
    image: dataTable,
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
    question: "Section 4: Data entry components",
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
    question: "Lesson: Checkbox",
    information:
      "Lorem ipsum gnfgdgdf ndkfjdsljfkdslf fndskfjdsklfjsdlk jkfjdsklfjdkl fdksfjdklfj jfkdsljlf lkll jklkdsad klajdsksjf fkldjfls",
    section: "Data entry components",
    breadcrumb: "Checkbox"
  },
  {
    question: "Lesson: Organization Unit Tree",
    information:
      "Lorem ipsum gnfgdgdf ndkfjdsljfkdslf fndskfjdsklfjsdlk jkfjdsklfjdkl fdksfjdklfj jfkdsljlf lkll jklkdsad klajdsksjf fkldjfls",
    section: "Data entry components",
    breadcrumb: "Organization Unit Tree"
  },
  {
    question: "Lesson: Radio",
    information:
      "Lorem ipsum gnfgdgdf ndkfjdsljfkdslf fndskfjdsklfjsdlk jkfjdsklfjdkl fdksfjdklfj jfkdsljlf lkll jklkdsad klajdsksjf fkldjfls",
    section: "Data entry components",
    breadcrumb: "Radio"
  },
  {
    question: "Lesson: Switch",
    information:
      "Lorem ipsum gnfgdgdf ndkfjdsljfkdslf fndskfjdsklfjsdlk jkfjdsklfjdkl fdksfjdklfj jfkdsljlf lkll jklkdsad klajdsksjf fkldjfls",
    section: "Data entry components",
    breadcrumb: "Switch"
  },
  {
    question: "Lesson: Transfer",
    information:
      "Lorem ipsum gnfgdgdf ndkfjdsljfkdslf fndskfjdsklfjsdlk jkfjdsklfjdkl fdksfjdklfj jfkdsljlf lkll jklkdsad klajdsksjf fkldjfls",
    section: "Data entry components",
    breadcrumb: "Transfer"
  },
  {
    question: "Section 5: Feedback components",
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
    question: "Lesson: Alertbar",
    information:
      "Lorem ipsum gnfgdgdf ndkfjdsljfkdslf fndskfjdsklfjsdlk jkfjdsklfjdkl fdksfjdklfj jfkdsljlf lkll jklkdsad klajdsksjf fkldjfls",
    section: "Feedback components",
    breadcrumb: "Alertbar"
  },
  {
    question: "Lesson: Loading indicators",
    information:
      "Lorem ipsum gnfgdgdf ndkfjdsljfkdslf fndskfjdsklfjsdlk jkfjdsklfjdkl fdksfjdklfj jfkdsljlf lkll jklkdsad klajdsksjf fkldjfls",
    section: "Feedback components",
    breadcrumb: "Loading indicators"
  },
  {
    question: "Section 6: Layout components",
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
    question: "Lesson: Card",
    information:
      "Lorem ipsum gnfgdgdf ndkfjdsljfkdslf fndskfjdsklfjsdlk jkfjdsklfjdkl fdksfjdklfj jfkdsljlf lkll jklkdsad klajdsksjf fkldjfls",
    section: "Layout components",
    breadcrumb: "Card"
  },
  {
    question: "Lesson: Loading indicators",
    information:
      "Lorem ipsum gnfgdgdf ndkfjdsljfkdslf fndskfjdsklfjsdlk jkfjdsklfjdkl fdksfjdklfj jfkdsljlf lkll jklkdsad klajdsksjf fkldjfls",
    section: "Layout components",
    breadcrumb: "Modal"
  },
  {
    question: "Section 7: Navigation components",
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
    question: "Lesson: Pagination",
    information:
      "Lorem ipsum gnfgdgdf ndkfjdsljfkdslf fndskfjdsklfjsdlk jkfjdsklfjdkl fdksfjdklfj jfkdsljlf lkll jklkdsad klajdsksjf fkldjfls",
    section: "Navigation components",
    breadcrumb: "Pagination"
  },
  {
    question: "Lesson: Tabs",
    information:
      "Lorem ipsum gnfgdgdf ndkfjdsljfkdslf fndskfjdsklfjsdlk jkfjdsklfjdkl fdksfjdklfj jfkdsljlf lkll jklkdsad klajdsksjf fkldjfls",
    section: "Navigation components",
    breadcrumb: "Tabs"
  },
  {
    question: "Section 8: Utilites",
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
    question: "Lesson: Elevation",
    information:
      "Lorem ipsum gnfgdgdf ndkfjdsljfkdslf fndskfjdsklfjsdlk jkfjdsklfjdkl fdksfjdklfj jfkdsljlf lkll jklkdsad klajdsksjf fkldjfls",
    section: "Utilities",
    breadcrumb: "Elevation"
  },
  {
    question: "Lesson: Tabs",
    information:
      "Lorem ipsum gnfgdgdf ndkfjdsljfkdslf fndskfjdsklfjsdlk jkfjdsklfjdkl fdksfjdklfj jfkdsljlf lkll jklkdsad klajdsksjf fkldjfls",
    section: "Utilities",
    breadcrumb: "Headerbar"
  },
  {
    question: "Section 9: Full examples",
    information:
      "Lorem ipsum gnfgdgdf ndkfjdsljfkdslf fndskfjdsklfjsdlk jkfjdsklfjdkl fdksfjdklfj jfkdsljlf lkll jklkdsad klajdsksjf fkldjfls",
    section: "Full examples",
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
    question: "Example: Filterable table with chips",
    information:
      "Lorem ipsum gnfgdgdf ndkfjdsljfkdslf fndskfjdsklfjsdlk jkfjdsklfjdkl fdksfjdklfj jfkdsljlf lkll jklkdsad klajdsksjf fkldjfls",
    section: "Full Examples",
    iframe:  chipTableExample,
  },
  {
    question: "Section 10: General",
    information:
      "Lorem ipsum gnfgdgdf ndkfjdsljfkdslf fndskfjdsklfjsdlk jkfjdsklfjdkl fdksfjdklfj jfkdsljlf lkll jklkdsad klajdsksjf fkldjfls",
    section: "Data display components",
    sections: [
      {
        text: "Some of the topics that will be covered includes:",
      },
      {
        text: "Difference between normal and FF components:",
        list: [
          "Lesson: The different types buttons and its usage",
        ],
      },
      {
        text: "Trfgdfgfdg:",
        list: [
          "Lesson: How to import components",
        ],
      },
      {
        text: "How can you contribute?:",
        list: [
          "Lesson: How to import components",
        ],
      },
    ],
  },
  {
    question: "Example: More specific DHIS2 component",
    iframe: iframe2,
    breadcrumb: "Data table",
    section: "Data display components",
  },
  {
    question: "What is the difference between normal and FF components",
    information:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    breadcrumb: "Table",
    section: "Data display components"
  },
  {
    question:
      "Try it yourself: Try to recreate this image by using the components given in the previous examples",
    image: color1,
    iframe: iframe2,
    breadcrumb: "Tooltip",
    section: "Data display components"
  },
    ],
  },
];
