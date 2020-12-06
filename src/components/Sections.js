import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

function Sections({ sections }) {
  return (
    <div>
      {sections.map((value) => {
        let maxWidth = value.imageWidth ? value.imageWidth : '100%'
        return (
          <>
            {value.heading && <h3>{value.heading}</h3>}
            {value.text && <p>{value.text} {value.link && <a target="_blank" href={value.link}>{value.link}</a>}</p>}
            {value.subheading && <h5>{value.subheading}</h5>}
            {value.image && (
              <img
                src={value.image}
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  display: "block",
                  maxWidth: maxWidth,
                  
                }}
              />
            )}
            {value.list && (
              <ul>
                {value.list.map((value) => {
                  return <li>{value}</li>;
                })}
              </ul>
            )}
            {value.codeSnippet && (
              <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
                {value.codeSnippet}
              </SyntaxHighlighter>
            )}
          </>
        );
      })}
    </div>
  );
}

export default Sections;
