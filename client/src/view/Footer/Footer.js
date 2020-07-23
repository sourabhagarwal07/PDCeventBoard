import React, { Fragment, useState } from "react";

import {
  Segment,
  Container,
  Grid,
  Header,
  List,
  Divider,
  Image,
  Button,
  Form,
  Checkbox,
} from "semantic-ui-react";

const Footer = () => {
  const [focused, setFocused] = useState(false);
  return (
    <Fragment>
      <Segment inverted color="violet" vertical className="footer">
        <Container textAlign="center">
          <Grid divided inverted stackable>
            <Grid.Column width={5}>
              <Header inverted as="h4" content="PDC" />
              <List link inverted>
                <List.Item as="a">About Us</List.Item>
                <List.Item as="a">Join Us</List.Item>
                <List.Item as="a">Events</List.Item>
                <List.Item as="a">Project Opportunities</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={5}>
              <Header inverted as="h4" content="Get in Touch" />
              <p>
                <button class="ui facebook button">
                  <i class="facebook icon"></i>
                  Facebook
                </button>
              </p>
              <p>
                {" "}
                <button class="ui twitter button">
                  <i class="twitter icon"></i>
                  Twitter
                </button>
              </p>
              <p>
                {" "}
                <button class="ui linkedin button">
                  <i class="linkedin icon"></i>
                  Linkedin
                </button>
              </p>
            </Grid.Column>
            <Grid.Column width={5}>
              <Header inverted as="h4" content="Leave us a Message!" />

              {/* <List link inverted>
                <List.Item as="a">Link One</List.Item>
                <List.Item as="a">Link Two</List.Item>
                <List.Item as="a">Link Three</List.Item>
                <List.Item as="a">Link Four</List.Item>
              </List> */}

              <Form inverted>
                <Form.Field>
                  <label style={{ color: focused ? "red" : "" }}>Name</label>
                  <input placeholder="First Name" />
                </Form.Field>
                <Form.Field>
                  <label>Email</label>
                  <input placeholder="Last Name" />
                </Form.Field>
                <Form.Field>
                  <label>Message</label>
                  <textarea rows="3"></textarea>
                </Form.Field>
                <Button type="submit">Submit</Button>
              </Form>
            </Grid.Column>
            {/* <Grid.Column width={7}>
              <Header inverted as="h4" content="Footer Header" />
              <p>
                Extra space for a call to action inside the footer that could
                help re-engage users.
              </p>
            </Grid.Column>  */}
          </Grid>

          {/* <Divider inverted section />
          <Image centered size="small" src="/assets/logo.png" />
          <List horizontal inverted divided link size="small">
            <List.Item as="a" href="#">
              Site Map
            </List.Item>
            <List.Item as="a" href="#">
              Contact Us
            </List.Item>
            <List.Item as="a" href="#">
              Terms and Conditions
            </List.Item>
            <List.Item as="a" href="#">
              Privacy Policy
            </List.Item>
          </List> */}
        </Container>
      </Segment>
    </Fragment>
  );
};

export default Footer;
