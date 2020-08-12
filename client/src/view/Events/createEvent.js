import React, { useState } from "react";
import {
  Button,
  Form,
  Segment,

} from "semantic-ui-react";
import Axios from "axios";
import { UserContext } from "../../common/context/UserProvider";
import { config } from "../../common/config/config";

import Pizzly from 'pizzly-js';




// const bearer = require("@bearer/node")

// // Initialize the client
// const client = bearer("YOUR-SECRET-KEY")

// // Set up the Eventbrite Integration
// const eventBrite = client.integration("eventbrite").auth('YOUR-AUTH-ID)

const CreateEvent = (props) => {
  const organization_id = 464741062423//463774934539; //463774934539;

  const token = '2SWITQPH72SPNCSRK7OW';
  const pizzly = new Pizzly({ host: 'https://bearer0.herokuapp.com/auth/callback' }) // Initialize Pizzly
  const eventbrite = pizzly.integration('eventbrite') // Replace with the API slugname
  const url ="https://www.eventbriteapi.com/v3/organizations/464741062423/events/?token=2SWITQPH72SPNCSRK7OW";
  eventbrite
    .connect()
    .then(({ authId }) => console.log('Sucessfully connected!', authId))
    .catch(console.error)

  eventbrite
    .auth('9b7367a0-d801-11ea-b4e8-c10a4f90a3b3') // Replace with the authId previously obtained
    .post(`https://www.eventbriteapi.com/v3/organizations/${organization_id}/events/?token=${token}`, {
      "name": {
          "html": "My New Event"
      },
      "start":{
          "timezone": "America/Los_Angeles",
          "utc": "2019-12-01T02:00:00Z"
      },
      "end":{
          "timezone": "America/Los_Angeles",
          "utc": "2019-12-01T05:00:00Z"
      },
      "currency": "USD"
    })//'/v3/organizations/464741062423/events/') // Replace with a valid endpoint of the API
    .then(response => console.log(response))
    .catch(console.error)

  const [eventInfo, setEventInfo] = useState({
    name: "",
    start: "",
    end: "",
    currency: ""
  })

  //const handleSubmit

  const handleFormChange = ({ target: { name, value } }) => {
    setEventInfo({
      ...eventInfo,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    await setEventInfo({
      "name": {
          "html": "My New Event"
      },
      "start":{
          "timezone": "America/Los_Angeles",
          "utc": "2019-12-01T02:00:00Z"
      },
      "end":{
          "timezone": "America/Los_Angeles",
          "utc": "2019-12-01T05:00:00Z"
      },
      "currency": "USD"
    })

    console.log(eventInfo);

    //event.preventDefault();
    // // if does not have hostPhotoURL, use a default one
    // if (!info.hostPhotoURL) {
    //   info.hostPhotoURL = "https://img.icons8.com/carbon-copy/2x/company.png";
    // }
    Axios.post(`https://www.eventbriteapi.com/v3/organizations/${organization_id}/events/?token=${token}`, 
      eventInfo,
      {headers: {'Authorization': 'Bearer' + token}, withCredentials: true})
      .then((res) => {
        //console.log(res);
        alert("success create your event!")
        props.history.push("/event");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Segment>
      <Form onSubmit={handleFormSubmit}>
        <Form.Field>
          <label>Event name</label>
          <input 
            name="name"
            value={eventInfo.name}
            onChange={handleFormChange}
            placeholder="Event name"
          />
        </Form.Field>
        <Form.Field>
          <label>Start time</label>
          <input 
            name="start"
            value={eventInfo.start}
            onChange={handleFormChange}
            placeholder="Event name"
          />
        </Form.Field>
        <Form.Field>
          <label>End time</label>
          <input 
            name="end"
            value={eventInfo.end}
            onChange={handleFormChange}
            placeholder="Event name"
          />
        </Form.Field>
        <Form.Field>
          <label>Event name</label>
          <input 
            name="name"
            value={eventInfo.name}
            onChange={handleFormChange}
            placeholder="Event name"
          />
        </Form.Field>
        <Button positive type="submit">
          Submit
        </Button>
      </Form>
    </Segment>
  )
}

export default CreateEvent;