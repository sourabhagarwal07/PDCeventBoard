import React, { Fragment } from "react";
import { config } from "../../common/config/config";
import {Divider,  Button, Image, Grid } from "semantic-ui-react";

const Signin = (props) => {
  let path = config();

  // Use google login
  const handleGoogleLogin = () => {
    window.open(path + "auth/login", "_self");
  };

  const handleLinkedinLogin = () => {
    window.open(path + "auth/linkedin", "_self");
  };

  const handleOutlookLogin = () => {
    window.open(path + "auth/outlook", "_self")
  }

  return (
    <Fragment>
      <Grid columns={2} stackable textAlign="center">
      <Divider vertical>Or</Divider>
        <Grid.Column>
          <Image centered size="medium" src="/assets/student.png" />
          <h2>If you are a student, please log in with Google</h2>
          <Button onClick={handleGoogleLogin}>
            <i className="google icon"></i>
            Sign in with Google
          </Button>
          Or
          <Button onClick={handleOutlookLogin}>
            Sign in with Outlook
          </Button>
        </Grid.Column>
        <Grid.Column>
          <Image centered size="medium" src="/assets/employer.png" />
          <h2>If you are a company, please log in with Linkedin</h2>
          <Button className="ui linkedin button" onClick={handleLinkedinLogin}>
            <i className="linkedin icon"></i>
            Sign in with Linkedin
          </Button>
        </Grid.Column>
      </Grid>
    </Fragment>
  );
};

export default Signin;
