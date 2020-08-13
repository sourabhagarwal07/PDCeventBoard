import React, { useState, useContext, useEffect } from "react";
import {
  Button,
  Form,
  Segment,
  Grid,
  Confirm
} from "semantic-ui-react";
import axios from "axios";
import { config } from "../../common/config/config";
// import {event_id} from "./createEvent";

const CreateTicket = (props) => {

  const [ticket, setTicket] = useState({
    name:"General Entry",
    free: true,
    quantity_total: 5
  })

  const handleFormSubmit =  (e) => {
    e.preventDefault();

    const ticket_data = {ticket_class: ticket};

    console.log(ticket_data);
    axios.post(`https://www.eventbriteapi.com/v3/events/${props.event_id}/ticket_classes/?token=2SWITQPH72SPNCSRK7OW`, ticket_data)
    .then(response => { 
      console.log(response);
      alert("tickets information saved!")
    })
    .catch(error => {
        console.log(error.response)
    });
    return(
      <Button>Show</Button>
    )
  };

  const handleFormChange = ({ target: { name, value } }) => {
    setTicket({
        ...ticket,
        [name]: value,
    });
  }

  const handleFormCancel = () => {
    props.history.push("/events");
  };

  return (
    <Segment>
    <Form onSubmit={handleFormSubmit} autoComplete="off">
      <Form.Field>
        <label>Number of tickets</label>
        <input
          name="quantity_total"
          value={ticket.quantity_total}
          onChange={handleFormChange}
          placeholder="number of tickets"
        />
      </Form.Field>
      <Button positive type="submit">
        Save and Publish
        {/* {state ? "Update" : "Submit"} */}
      </Button>
      <Button onClick={handleFormCancel} type="button">
        Cancel
      </Button>
    </Form>
  </Segment>
  )
}

export default CreateTicket;