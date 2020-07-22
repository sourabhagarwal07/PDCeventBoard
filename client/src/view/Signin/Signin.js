import React, { Fragment } from "react";
import { config } from "../../common/config/config";
import { Button, Container, Image, Grid, Segment,Divider, GridColumn } from "semantic-ui-react";

const Signin = (props) => {
  let path = config();

  // Use google login
  const handleGoogleLogin = () => {
    window.open(path + "auth/login", "_self");
  };

  const handleLinkedinLogin = () => {
    window.open(path + "auth/linkedin", "_self");
  }

  return (
    <Fragment>       
      <Grid columns={2} stackable textAlign='center' >
        <Grid.Column>
          <h2>If you are a student, please log in with Google</h2>
          <h1><button class="ui google button" onClick={handleGoogleLogin}> 
            <i class="google icon"></i>
                Google
          </button></h1>
        </Grid.Column>
        <Grid.Column>
          <h2>If you are a company, please log in with Linkedin</h2>
          <h1><button class="ui linkedin button" onClick={handleLinkedinLogin}> 
            <i class="linkedin icon"></i>
                Linkedin
          </button></h1>
        </Grid.Column>
      </Grid>
    </Fragment>
  );
};

export default Signin;