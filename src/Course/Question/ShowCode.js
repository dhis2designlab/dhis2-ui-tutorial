import React, { useState } from "react";

import { Button } from "@dhis2/ui";

import { makeStyles } from "@material-ui/core/styles";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const useStyles = makeStyles((theme) => ({
  media: {
    marginRight: "26px",
    marginLeft: "26px",
    marginBottom: "16px",
  },
}));

function ShowCode({ showCode }) {
  const classes = useStyles();
  const [shouldShowCode, setShowCode] = useState(false);

  return (
    <div className={classes.media}>
      <Button onClick={() => setShowCode(!shouldShowCode)}>
        {shouldShowCode ? "Hide solution" : "Show solution"}
      </Button>
      {shouldShowCode && (
        <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
          {showCode}
        </SyntaxHighlighter>
      )}
    </div>
  );
}

export default ShowCode;
