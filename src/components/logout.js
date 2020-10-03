import React, { useState } from 'react';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Input } from '@dhis2/ui-core'
import { Button } from '@dhis2/ui-core'
import { makeStyles } from '@material-ui/core/styles';


import {
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(30),
    paddingBottom: theme.spacing(30),
  },
  input: {
    paddingBottom: theme.spacing(6),
  },
  heading: {
    textAlign: 'center',
    paddingBottom: theme.spacing(6),
  }
}));


function Logout({ onClick }) {
  return (
    <div>
      <span>You are logged in</span>
      <button onClick={onClick}>Logout</button>
    </div>
  );
}

export default Logout
