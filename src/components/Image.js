import React from "react";


function Image({ image }) {

  return (
    <>
      {image && (
        <img
          src={image}
          width="100%"
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              display: "block",
            }}
          alt=""
        />
      )}
    </>
  );
}

export default Image;
