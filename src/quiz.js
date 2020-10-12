const iframe = '<iframe src="https://codesandbox.io/embed/bold-sun-l4upt?fontsize=14&hidenavigation=1&theme=dark" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" title="bold-sun-l4upt" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>';

export const quiz_data = [
  {
      title: "Content and communication",
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
      about: "Color is used in DHIS2 to support effective communication. DHIS2 applications use color to help the user understand information, feedback and more. The colors used in an application should not be chosen based primarily on how they look, but how they convey information and aid understanding. It is important to maintain consistent usage of colors throughout the DHIS2 platform. Globally, color meanings are relative. It is not possible to say 'red = danger'. However, using a consistent color palette we can establish that 'red in DHIS2 = danger'. Color alone should not be relied upon to communicate effectively. Read more about color accessibility.",
      topics: [
            {
                title: "DHIS2 color scale",
                info: "learn about the color scale used in DHIS2",
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
              header: "",
              question: "Color",
              information: "In section we will take you through how to use colors when developing applications for DHIS2. Some examples and explanations will be given as well as some coding tasks for you to try out, and some quizzes to check that you have understood the topics correctly",
              correct: 'a',
          },
          {
              header: "DHIS2 color scale",
              question: "DHIS2 color scale",
              information: "The DHIS2 color scale contains 7 colors. Each color has 10 shades. This color system provides enough colors for all situations. Reference: Color codes and #hex values for the DHIS2 color scale.",
              image: "../images/colours.png",
          },
          {
              header: "General, simplified principles",
              question: "General, simplified principles",
              information: "Each color in the DHIS2 color scale has a purpose. Put simply: Grey: general interface elements, neutral information, Blue: important neutral information, primary actions, Teal: selected or active element, Red: danger, error, destructive action, Yellow: warning, non-blocking error, Green: positive feedback, valid, success",
          },
          {
              header: "Qu",
              question: "Test it out!",
              information: "Want to test it out?",
              iframe: iframe,
          },
          {
              header: "Qu",
              question: "Quiz: When should you use the color red?",
              alternatives: [ {a: "To alert about danger"}, {b: "General interface elements"}, {c: "Selected or active element"}],
              correct: 'a',
          },
          
      ]
  },
  {
      title: "Typography",
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