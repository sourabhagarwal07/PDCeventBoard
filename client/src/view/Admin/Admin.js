import React, { Fragment } from "react";
import { Button, Image, Grid } from "semantic-ui-react";
import { config } from "../../common/config/config";

const Admin = (props) => {
  let path = config();

  // Use google login
  const handleGoogleLogin = () => {
    window.open(path + "auth/login", "_self");
  };

  return (
    <Fragment>
        <Grid columns={1} stackable textAlign='center' >
        <Grid.Column>
      <Image centered size="medium" src="/assets/employer.png" />
      <h2>Are you an Admin?</h2>
      <Button onClick={handleGoogleLogin}>
        <i className="google icon"></i>
        Sign in with Google
      </Button>
      </Grid.Column>
      </Grid>
    </Fragment>
  );
};

export default Admin;
