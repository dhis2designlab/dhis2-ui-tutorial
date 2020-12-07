import React from "react";

import { Link } from "react-router-dom";

import logo from "../images/dhis2-logo.png";
import Grid from "@material-ui/core/Grid";
import { Settings } from "@dhis2/ui-icons";
import { LinearLoader } from "@dhis2/ui";
import styled from "styled-components";

const Nav = styled(Grid)`
  background: white;
  height: 64px;
  position: fixed;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.25);
  z-index: 2;
  margin: 0;
  padding: 0;
  align-items: center;
`;

const LinkTo = styled(Link)`
  text-decoration: none;
  text-align: left;
  margin-left: 12px;
  margin-right: 12px;
`;

const Logo = styled.img`
  max-height: 30px;
`;

const Loader = styled.div`
  @media (max-width: 959px) {
    display: none;
  }
`;

const Name = styled.p`
  color: black;
  text-align: right;
  display: inline-block;
`;

function NavBar({ user, nrCourses, nrCompletedCourses, loggedIn }) {
  const name = user ? user.username : "";
  const completionRate = Math.floor((nrCompletedCourses / nrCourses) * 100);

  return (
    <Nav container>
      <Grid item xs={4} sm={4} md={4}>
        <LinkTo
          to={{
            pathname: `/home`,
          }}
        >
          <Logo src={logo} />
        </LinkTo>
      </Grid>
      {loggedIn ? (
        <>
          <Grid item xs={4} sm={4} md={4}>
            <Loader>
              <div style={{ margin: "auto", textAlign: "center" }}>
                <p>Completion rate: {completionRate}%</p>
                <LinearLoader
                  amount={completionRate}
                  dataTest="dhis2-uicore-linearloader"
                  width="300px"
                />
              </div>
            </Loader>
          </Grid>
          <Grid item xs={4} sm={4} md={4}>
            <LinkTo to={`/settings`}>
              <Name>{name}</Name>
              <Settings />
            </LinkTo>
          </Grid>
        </>
      ) : (
        <Grid item xs={8} sm={8} md={8}>
          <Link
            to={{
              pathname: `/login`,
            }}
          >
            <p>login</p>
          </Link>
        </Grid>
      )}
    </Nav>
  );
}

export default NavBar;
