import React, { Fragment, useState } from "react";

import {
  Segment,
  Container,
  Grid,
  Header,
  List,
  Button,
  Form,
} from "semantic-ui-react";

const Footer = () => {
  const [focused, setFocused] = useState(false);
  const handlefacebook = () => {
    window.open("https://www.facebook.com/Professionaldevclub/");
  };
  const handletwitter = () => {
    window.open("https://twitter.com/PDCuOttawa");
  };
  const handlelinkedin = () => {
    window.open("https://www.linkedin.com/groups/10528074/");
  };
  return (
    <Fragment>
      <Segment inverted color="blue" vertical className="footer">
        <Container textAlign="center">
          <Grid divided inverted stackable>
            
            <Grid.Column width={15}>
              <Header inverted as="h4" content="FOLLOW US" />
              
              <p>
                {" "}
                <button onClick={handlefacebook} className="ui facebook button">
                  <i className="facebook icon"></i>
                  Facebook
                </button>
                <button onClick={handletwitter} className="ui twitter button">
                  <i className="twitter icon"></i>
                  Twitter
                </button>
                <button onClick={handlelinkedin} className="ui linkedin button">
                  <i className="linkedin icon"></i>
                  Linkedin
                </button>
              </p>
              
            </Grid.Column>
           
          </Grid>
        </Container>
      </Segment>
    </Fragment>
  );
};

export default Footer;
