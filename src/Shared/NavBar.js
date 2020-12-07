import React from "react";

import { Link } from "react-router-dom";

import logo from "../images/dhis2-logo.png";
import Grid from "@material-ui/core/Grid";
import { Settings } from "@dhis2/ui-icons";
import { LinearLoader } from "@dhis2/ui";
import styled from "styled-components";

const Nav = styled.div`
  background: white;
  position: fixed;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.25);
  z-index: 2;
  margin: 0;
  padding: 8px;
  align-items: center;
  width: 100%;
`;

const Logo = styled.img`
  text-align: left;
  max-height: 30px;
`;

const Loader = styled.div`
  @media (max-width: 959px) {
    display: none;
  }
`;

const Text = styled.p`
  text-align: center;
`;

function NavBar({ user, nrCourses, nrCompletedCourses, loggedIn }) {
  const completionRate = Math.floor((nrCompletedCourses / nrCourses) * 100);

  return (
    <Nav>
      <Grid container>
        <Grid
          container
          item
          alignItems="center"
          justify="left"
          xs={4}
          sm={4}
          md={4}
        >
          <Link
            to={{
              pathname: `/home`,
            }}
          >
            <Logo src={logo} />
          </Link>
        </Grid>
        {loggedIn ? (
          <>
            <Grid
              container
              item
              alignItems="center"
              justify="center"
              xs={4}
              sm={4}
              md={4}
            >
              <Loader>
                <Text>Completion rate: {completionRate}%</Text>
                <LinearLoader
                  amount={completionRate}
                  dataTest="dhis2-uicore-linearloader"
                  width="300px"
                />
              </Loader>
            </Grid>
            <Grid
              container
              item
              alignItems="center"
              justify="flex-end"
              style={{ paddingRight: "12px" }}
              xs={4}
              sm={4}
              md={4}
            >
              <Link to={`/settings`}>
                <Settings />
              </Link>
            </Grid>
          </>
        ) : (
          <Grid
            container
            item
            alignItems="center"
            justify="flex-end"
            xs={8}
            sm={8}
            md={8}
          >
            <Link
              to={{
                pathname: `/login`,
              }}
            >
              <p>login</p>
            </Link>
          </Grid>
        )}
      </Grid>
    </Nav>
  );
}

export default NavBar;
