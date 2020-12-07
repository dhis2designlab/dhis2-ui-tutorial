import React from "react";

import Grid from "@material-ui/core/Grid";
import HeaderImg from "../images/header_img.png";

import { Button } from "@dhis2/ui";

import styled from "styled-components";

const HeaderDiv = styled.div`
  padding-top: 70px;
  height: 500px;
  display: flex;
  align-items: center;
  padding-bottom: 32px;
  background-color: #f3f5f7;
`;
const Content = styled.div`
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
`;

const Paragraph = styled.p`
  margin-right: 92px;
`;
const Image = styled.img`
  @media (max-width: 959px) {
    display: none;
  }
`;

function Header() {
  return (
    <HeaderDiv>
      <Content>
        <Grid container spacing={4}>
          <Grid item item xs={12} sm={12} md={6}>
            <h1>DHIS2 UI tutorial</h1>
            <Paragraph>
              In these tutorials you will get design knowledge about how to
              develop applications in align with the UI guidelines. In addition
              to some theoretical material, you will also be given real life
              code examples that you can try out directly in the browser
            </Paragraph>
            <Button dataTest="dhis2-uicore-button" primary type="button">
              Go to courses
            </Button>
          </Grid>
          <Grid item item xs={12} sm={12} md={6}>
            <Image src={HeaderImg} style={{ maxWidth: "100%" }}></Image>
          </Grid>
        </Grid>
      </Content>
    </HeaderDiv>
  );
}

export default Header;