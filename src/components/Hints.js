import React, { useState } from "react";

import { Button } from "@dhis2/ui";

function Hints({ hints}) {
    const [shouldShowHint, setShowHint] = useState(false);
    return (
        <>
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
        </>
  );
}

export default Hints;
