import React from "react";

import color1 from "./images/colour_img.png";
import color2 from "./images/color_img2.png";
import api from "./images/api.png";
import buttonTable from "./images/buttonTable.png";

const iframe =
  '<iframe src="https://codesandbox.io/embed/bold-sun-l4upt?fontsize=14&hidenavigation=1&theme=dark" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" title="bold-sun-l4upt" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>';

const iframe2 =
  '<iframe src="https://codesandbox.io/embed/priceless-benz-t7sms?fontsize=14&hidenavigation=1&theme=dark" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" title="priceless-benz-t7sms" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>';
const buttonExample =
  '<iframe src="https://codesandbox.io/embed/compassionate-grass-8wq3t?fontsize=14&hidenavigation=1&theme=dark" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" title="compassionate-grass-8wq3t" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>';

export const quiz_data = [
  {
    title: "Content and communication",
    quizId: "ContentCommunication",
    status: "under development",
    about:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinction At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
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
        question: "What is blabla1?",
        alternatives: [
          { a: "To alert about danger" },
          { b: "General interface elements" },
          { c: "Selected or active element" },
        ],
        correct: "a",
      },
      {
        header: "header2",
        question: "What is blabla2?",
        alternatives: [
          { a: "To alert about danger" },
          { b: "General interface elements" },
          { c: "Selected or active element" },
        ],
        correct: "b",
      },
      {
        header: "header2",
        question: "What is blabla3?",
        alternatives: [
          { a: "To alert about danger" },
          { b: "General interface elements" },
          { c: "Selected or active element" },
        ],
        correct: "c",
      },
    ],
  },
  {
    title: "Layout, Spacing and Stacking",
    quizId: "LayoutSpacingStacking",
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
      },

      {
        header: "header",
        question: "Layout",
        image: "../images/colours.png",
        information:
          "Consistent layouts of applications means users only need to learn a few different patterns to understand many different applications. It is important that DHIS2 applications approach layout consistently",
      },
      {
        header: "header",
        question: "Layout",
        image: "../images/colours.png",
        information:
          "Consistent layouts of applications means users only need to learn a few different patterns to understand many different applications. It is important that DHIS2 applications approach layout consistently",
      },
      {
        header: "header",
        question: "Layout",
        information:
          "Consistent layouts of applications means users only need to learn a few different patterns to understand many different applications. It is important that DHIS2 applications approach layout consistently. Not all applications need to look the same, but there should be common elements when dealing with similar tasks. If an application has separate sections it should have a sidebar to move between them. An single-task application should not use a sidebar unnecessarily. The header bar is always placed at the top of the screen. These consistent layout principles help users understand DHIS2 applications",
      },
      {
        header: "header1",
        question: "What is blabla?",
        alternatives: [
          { a: "To alert about danger" },
          { b: "General interface elements" },
          { c: "Selected or active element" },
        ],
        correct: "a",
      },
      {
        header: "header2",
        question: "What is blabla?",
        alternatives: [
          { a: "To alert about danger" },
          { b: "General interface elements" },
          { c: "Selected or active element" },
        ],
        correct: "b",
      },
      {
        header: "header2",
        question: "What is blabla?",
        alternatives: [
          { a: "To alert about danger" },
          { b: "General interface elements" },
          { c: "Selected or active element" },
        ],
        correct: "c",
      },
    ],
  },
  {
    title: "Forms",
    quizId: "Forms",
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
        correct: "a",
      },
      {
        header: "header2",
        question: "What is blabla?",
        alternatives: [
          { a: "To alert about danger" },
          { b: "General interface elements" },
          { c: "Selected or active element" },
        ],
        correct: "b",
      },
      {
        header: "header2",
        question: "What is blabla?",
        alternatives: [
          { a: "To alert about danger" },
          { b: "General interface elements" },
          { c: "Selected or active element" },
        ],
        correct: "c",
      },
    ],
  },
  {
    title: "Icons",
    quizId: "Icons",
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
        correct: "a",
      },
      {
        header: "header2",
        question: "What is blabla?",
        alternatives: [
          { a: "To alert about danger" },
          { b: "General interface elements" },
          { c: "Selected or active element" },
        ],
        correct: "b",
      },
      {
        header: "header2",
        question: "What is blabla?",
        alternatives: [
          { a: "To alert about danger" },
          { b: "General interface elements" },
          { c: "Selected or active element" },
        ],
        correct: "c",
      },
    ],
  },
  {
    title: "Typography",
    quizId: "Typography",
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
        correct: "a",
      },
      {
        header: "header2",
        question: "What is blabla?",
        alternatives: [
          { a: "To alert about danger" },
          { b: "General interface elements" },
          { c: "Selected or active element" },
        ],
        correct: "b",
      },
      {
        header: "header2",
        question: "What is blabla?",
        alternatives: [
          { a: "To alert about danger" },
          { b: "General interface elements" },
          { c: "Selected or active element" },
        ],
        correct: "c",
      },
    ],
  },
  {
    title: "Color",
    quizId: "Color",
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
        correct: "a",
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
      },
      {
        header: "",
        question: "Code example: the colors in use",
        information: "Test out how to use the DHIS2 colors",
        iframe: iframe,
      },
      {
        header: "Qu",
        question: "Quiz: when should you use the color grey in DHIS2?",
        alternatives: [
          { a: "To alert about danger" },
          { b: "General interface elements" },
          { c: "Selected or active element" },
        ],
        correct: "a",
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
      },
    ],
  },
  {
    title: "DHIS2 Components",
    quizId: "Components",
    about:
      "DHIS2 has a collection of UI elements that can be, and should be, reused across all DHIS2 applications. The components have been designed with DHIS2 use cases in mind. Using these components means more time spent focusing on building a positive user experience and less time redesigning and rebuilding common components. Each component has its guidelines for use. In this tutorial you will learn how and when to use the different components",
    topics: [
      {
        title: "Information: Showcase of DHIS2 components",
      },
      {
        title: "Information: Using the API",
      },
      {
        title: "Example: Transforming a primary button to a secondary button",
      },
      {
        title: "Try it yourself: Changing a button to a big secondary button",
      },
      {
        title: "Example: More specific DHIS2 component",
      },
      {
        title:
          "Information: What is the difference between normal and FF components",
      },
      {
        title:
          "Fix the mistake: Can you find any mistakes in this tutorial? Try to fix them",
      },
      {
        title:
          "Try it yourself: Try to reacreate an image by using the components",
      },
      {
        title: "You are finished",
      },
    ],
    steps: [
      {
        question: "Using the API",
        information: "In this section you will get infor",
      },
      {
        question: "Showcase of the DHIS2 components",
        information:
          "All the components have its own properties you can use to define how you want the component to look and behave. In the showcase below, you will see some examples of what is possible. If you want to get the most updated overview of all the components go to [INSERT STORYBOOK]",
        components: "show",
      },
      {
        question: "Information: Using the API for components",
        information:
          "All the components have its own properties you can use to define how you want the component to look and behave. In the next steps in this tutorial, I will got through some examples for how you can use the API and give you the knowledge for you to read up later. If you want to use other DHIS2 components, you can find their documentation here(link)",
        image: api,
        sections: [
          {
            text:
              "Here you can see the API for the dhis2 button component. In the first column named 'Name', you can see what type of properties the Button component can take in. Each of the properties has a type, as specified in the 'Type' column. Sometimes a default value will be set for the property if nothing is set, which can be seen in the 'Default' column",
          },
        ],
      },
      {
        question: "Information: The different types of buttons and its usage",
        information:
          "Buttons are used for triggering actions. There are different types of buttons in the design system which are intended for different types of actions.",
        image: buttonTable,
        sections: [
          {
            text: "Each type of button has a specific usage:",
          },
        ],
      },
      {
        question: "Quiz: Button label",
        information: "Which of the buttons uses the correct label?",
        images: [buttonTable, buttonTable],
        correct: 0,
      },
      {
        question: "Information: Different button options",
        information:
          "A button can represent an on/off state using the toggle option. Use a toggle button when the user can enable or disable an option and a checkbox or switch is not suitable. This will most often be in the case of a toolbar, such as bold or italic options in a text editing toolbar. A toggle button in this example uses an icon and does not need text. A text label should be provided in a tooltip on hover. The toggle option is available for basic and secondary type buttons.",
        sections: [
          {
            text:
              "Icons can be included in Basic, Primary, Secondary and Destructive buttons. Use an icon to supplement the text label. Remember that the user may not be fluent in the working language, so an accompanying icon on an important action can be a welcome addition. Buttons with icons only should be used for supplementary actions and should include a text tooltip on hover.",
          },
          {
            text:
            "Buttons are available in three sizes: small, medium, large. Medium is usually the correct choice. Use small button in an information dense ui. Large buttons can be use on very simple, single action pages.",
            image: color1,
          }
        ],
      },
      {
        question:
          "Try it yourself: Change the button to a big secondary button",
        iframe: iframe2,
      },
      {
        question: "Example: More specific DHIS2 component",
        iframe: iframe2,
      },
      {
        question: "What is the difference between normal and FF components",
        information:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      },
      {
        question:
          "Try it yourself: Try to recreate this image by using the components given in the previous examples",
        image: color1,
        iframe: iframe2,
      },
    ],
  },
];
