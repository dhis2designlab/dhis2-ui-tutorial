import React, { useState } from "react";

import { Button } from "@dhis2/ui";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

import styled from "styled-components";

const Container = styled.div`
  marginRight: 26px,
  marginLeft: 26px,
  marginBottom: 16px,
`;

function ShowCode({ showCode }) {
  const [shouldShowCode, setShowCode] = useState(false);

  return (
    <Container>
      <Button onClick={() => setShowCode(!shouldShowCode)}>
        {shouldShowCode ? "Hide solution" : "Show solution"}
      </Button>
      {shouldShowCode && (
        <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
          {showCode}
        </SyntaxHighlighter>
      )}
    </Container>
  );
}

export default ShowCode;
