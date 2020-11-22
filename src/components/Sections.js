import React from "react";

function Sections({ sections }) {
  return (
    <div>
      {sections.map((value) => {
        return (
          <>
            {value.heading && <h3>{value.heading}</h3>}
            {value.text && <p>{value.text}</p>}
            {value.subheading && <h5>{value.subheading}</h5>}
            {value.image && (
              <img
                src={value.image}
                width="80%"
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  display: "block",
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
          </>
        );
      })}
    </div>
  );
}

export default Sections;
