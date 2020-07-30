import React, { Fragment,useState } from "react";

import {
  Segment,
  Container,
  Grid,
  Header,
  List,
  Divider,
  Image,Button,Form, Checkbox
} from "semantic-ui-react";

const Footer = () => {
  const [focused, setFocused] = useState(false);
  const handlefacebook = () => {
    window.open("https://www.facebook.com/Professionaldevclub/");
  };
  const handletwitter  = () => {
    window.open("https://twitter.com/PDCuOttawa");
  };
  const handlelinkedin  = () => {
    window.open("https://www.linkedin.com/groups/10528074/");
  };
  return (
    <Fragment>
      <Segment inverted color = 'violet' vertical className="footer">
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
              <p><button onClick={handlefacebook} class="ui facebook button">
              <i class="facebook icon"></i>
                        Facebook
                      </button></p>
                     <p> <button onClick={handletwitter} class="ui twitter button"> 

              <i class="twitter icon"></i>
                        Twitter
                      </button></p>
                      <p> <button onClick={handlelinkedin}class="ui linkedin button"> 

              <i class="linkedin icon"></i>
                        Linkedin
                      </button></p>
            </Grid.Column>
            <Grid.Column width={5}>
              <Header inverted as="h4" content="Leave us a Message!" />
              

<Form inverted>
    <Form.Field>
      <label style={{color: focused ? 'red' : ''}}>Name</label>
      <input placeholder='First Name' />
    </Form.Field>
    <Form.Field>
      <label>Email</label>
      <input placeholder='Email Address' />
    </Form.Field>
    <Form.Field>
      <label>Message</label>
      <textarea rows="3"></textarea>
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
            </Grid.Column>
            
          </Grid>

         
        </Container>
      </Segment>
    </Fragment>
  );
};

export default Footer;
