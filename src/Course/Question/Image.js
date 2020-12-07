import React from "react";

function Image({ image, imageWidth }) {
  return (
    <>
      {image && (
        <img
          src={image}
          width={imageWidth ? imageWidth : "100%"}
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
