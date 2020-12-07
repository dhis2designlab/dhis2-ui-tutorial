import React, { useState } from "react";

import { Button } from "@dhis2/ui";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  
    media: {
      marginRight: "26px",
      marginLeft: "26px",
      marginBottom: "16px",
    },
  }));
  

function Hints({ hints}) {
    const classes = useStyles();
    const [shouldShowHint, setShowHint] = useState(false);
    return (
        <div className={classes.media}>
            <Button onClick={() => setShowHint(!shouldShowHint)}>
                {shouldShowHint ? "Hide hint" : "Show hint"}
            </Button>
            {shouldShowHint && (
                <ul>
                {hints.map((hint) => {
                    return <li>{hint}</li>;
                })}
                </ul>
            )}
        </div>
  );
}

export default Hints;
