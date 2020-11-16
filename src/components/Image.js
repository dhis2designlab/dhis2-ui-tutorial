import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  media: {
    maxWidth: "130ch",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

function Image({ image }) {
  const classes = useStyles();

  return (
    <div className={classes.media}>
      {image && (
        <img
          src={image}
          width="70%"
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            display: "block",
          }}
          alt=""
        />
      )}
    </div>
  );
}

export default Image;
