import React from 'react';
import colors from './images/colours.png';

import color1 from './images/colour_img.png';
import color2 from './images/color_img2.png';


const iframe = '<iframe src="https://codesandbox.io/embed/bold-sun-l4upt?fontsize=14&hidenavigation=1&theme=dark" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" title="bold-sun-l4upt" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>';

const iframe2 = '<iframe src="https://codesandbox.io/embed/n9m2w9q8x0?fontsize=14&hidenavigation=1&theme=dark" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" title="Jest test" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>'
export const quiz_data = [
  {
      title: "Content and communication",
      quizId: "ContentCommunication",
      about: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinction At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
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
          }
      ],
      steps: [
          {
              header: "header1",
              question: "What is blabla1?",
              alternatives: [ {a: "To alert about danger"}, {b: "General interface elements"}, {c: "Selected or active element"}],
              correct: 'a',
          },
          {
              header: "header2",
              question: "What is blabla2?",
              alternatives: [ {a: "To alert about danger"}, {b: "General interface elements"}, {c: "Selected or active element"}],
              correct: 'b',
          },
          {
              header: "header2",
              question: "What is blabla3?",
              alternatives: [ {a: "To alert about danger"}, {b: "General interface elements"}, {c: "Selected or active element"}],
              correct: 'c',
          },
          
      ]
  },
  {
      title: "Layout, Spacing and Stacking",
      quizId: "LayoutSpacingStacking",
      about: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
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
        }
    ],
      steps: [
          {
            header: "header",
            question: "Layout",
            information: "Consistent layouts of applications means users only need to learn a few different patterns to understand many different applications. It is important that DHIS2 applications approach layout consistently. Let´s take an example: say we have a layout for how ",
            image: "../images/colours.png",
          },

          {
            header: "header",
            question: "Layout",
            image: "../images/colours.png",
            information: "Consistent layouts of applications means users only need to learn a few different patterns to understand many different applications. It is important that DHIS2 applications approach layout consistently",
            
        },
          {
            header: "header",
            question: "Layout",
            image: "../images/colours.png",
            information: "Consistent layouts of applications means users only need to learn a few different patterns to understand many different applications. It is important that DHIS2 applications approach layout consistently",
          },
          {
            header: "header",
            question: "Layout",
            information: "Consistent layouts of applications means users only need to learn a few different patterns to understand many different applications. It is important that DHIS2 applications approach layout consistently. Not all applications need to look the same, but there should be common elements when dealing with similar tasks. If an application has separate sections it should have a sidebar to move between them. An single-task application should not use a sidebar unnecessarily. The header bar is always placed at the top of the screen. These consistent layout principles help users understand DHIS2 applications",

          },
          {
              header: "header1",
              question: "What is blabla?",
              alternatives: [ {a: "To alert about danger"}, {b: "General interface elements"}, {c: "Selected or active element"}],
              correct: 'a',
          },
          {
              header: "header2",
              question: "What is blabla?",
              alternatives: [ {a: "To alert about danger"}, {b: "General interface elements"}, {c: "Selected or active element"}],
              correct: 'b',
          },
          {
              header: "header2",
              question: "What is blabla?",
              alternatives: [ {a: "To alert about danger"}, {b: "General interface elements"}, {c: "Selected or active element"}],
              correct: 'c',
          },
          
      ]
  },
  {
      title: "Forms",
      quizId: "Forms",
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
        }
    ],
      steps: [
          {
              header: "header1",
              question: "What is blabla?",
              alternatives: [ {a: "To alert about danger"}, {b: "General interface elements"}, {c: "Selected or active element"}],
              correct: 'a',
          },
          {
              header: "header2",
              question: "What is blabla?",
              alternatives: [ {a: "To alert about danger"}, {b: "General interface elements"}, {c: "Selected or active element"}],
              correct: 'b',
          },
          {
              header: "header2",
              question: "What is blabla?",
              alternatives: [ {a: "To alert about danger"}, {b: "General interface elements"}, {c: "Selected or active element"}],
              correct: 'c',
          },
          
      ]
  },
  {
      title: "Color",
      quizId: "Color",
      about: "Color is used in DHIS2 to support effective communication. DHIS2 applications use color to help the user understand information, feedback and more. The colors used in an application should not be chosen based primarily on how they look, but how they convey information and aid understanding. It is important to maintain consistent usage of colors throughout the DHIS2 platform. Globally, color meanings are relative. It is not possible to say 'red = danger'. However, using a consistent color palette we can establish that 'red in DHIS2 = danger'. Color alone should not be relied upon to communicate effectively.",
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
            }
        ],
      steps: [
          {
              header: "",
              question: "Color",
              information: "In section we will take you through how to use colors when developing applications for DHIS2. Some examples and explanations will be given as well as some coding tasks for you to try out, and some quizzes to check that you have understood the topics correctly",
              correct: 'a',
          },
          {
              header: "DHIS2 color scale",
              question: "DHIS2 color scale",
              image: "../images/colours.png",
              information: "The DHIS2 color scale contains 7 colors. Each color has 10 shades. This color system provides enough colors for most situations. Each color in the DHIS2 color scale has a purpose.",    
              sections: [ {
                text: "Put simply:",    
                list: ["Grey: general interface elements, neutral information", "Blue: important neutral information, primary actions", "Teal: selected or active element", "Red: danger, error, destructive action", "Yellow: warning, non-blocking error", "Green: positive feedback, valid, success",]
            },

        ]   
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
              alternatives: [ {a: "To alert about danger"}, {b: "General interface elements"}, {c: "Selected or active element"}],
              correct: 'a',
              //iframe: iframe2,
          },
          {
            header: "",
            question: "Accessibility",
            sections: [ {
                text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? ",    
            },
            {
                text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam. "
            },
            {
                text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat",
            },
        ]   
        },
        {
            header: "",
            question: "Quiz: accessibility",
            information: "Which image uses correct usage of color?",
            images: [color1, color2], 
            correct: 1,
        },
          
      ]
  },
  {
      title: "Typography",
      quizId: "Typography",
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
        }
    ],
      steps: [
          {
              header: "header1",
              question: "What is blabla?",
              alternatives: [ {a: "To alert about danger"}, {b: "General interface elements"}, {c: "Selected or active element"}],
              correct: 'a',
          },
          {
              header: "header2",
              question: "What is blabla?",
              alternatives: [ {a: "To alert about danger"}, {b: "General interface elements"}, {c: "Selected or active element"}],
              correct: 'b',
          },
          {
              header: "header2",
              question: "What is blabla?",
              alternatives: [ {a: "To alert about danger"}, {b: "General interface elements"}, {c: "Selected or active element"}],
              correct: 'c',
          },
          
      ]
  },
  {
      title: "Icons",
      quizId: "Icons",
      about: "Color is used in DHIS2 to support effective communication. DHIS2 applications use color to help the user understand information, feedback and more. The colors used in an application should not be chosen based primarily on how they look, but how they convey information and aid understanding. It is important to maintain consistent usage of colors throughout the DHIS2 platform. Globally, color meanings are relative. It is not possible to say 'red = danger'. However, using a consistent color palette we can establish that 'red in DHIS2 = danger'. Color alone should not be relied upon to communicate effectively. Read more about color accessibility.",
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
        }
    ],
      steps: [
          {
              header: "header1",
              question: "What is blabla?",
              alternatives: [ {a: "To alert about danger"}, {b: "General interface elements"}, {c: "Selected or active element"}],
              correct: 'a',
          },
          {
              header: "header2",
              question: "What is blabla?",
              alternatives: [ {a: "To alert about danger"}, {b: "General interface elements"}, {c: "Selected or active element"}],
              correct: 'b',
          },
          {
              header: "header2",
              question: "What is blabla?",
              alternatives: [ {a: "To alert about danger"}, {b: "General interface elements"}, {c: "Selected or active element"}],
              correct: 'c',
          },
          
      ]
  }
]