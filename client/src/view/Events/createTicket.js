import React, { useState, useContext, useEffect } from "react";
import { Button, Form, Segment, Grid, Confirm } from "semantic-ui-react";
import axios from "axios";
import { config } from "../../common/config/config";

const CreateTicket = (props) => {
  //event id got from the response from create event page
  const { state } = props.location;
  console.log(state);
  const event_id = state;

  const [isDisable, setDisable] = useState(true);

  const [ticket, setTicket] = useState({
    name: "General Entry",
    free: true,
    quantity_total: 5,
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const ticket_data = { ticket_class: ticket };

    console.log(ticket_data);
    axios
      .post(
        `https://www.eventbriteapi.com/v3/events/${event_id}/ticket_classes/?token=2SWITQPH72SPNCSRK7OW`,
        ticket_data
      )
      .then((response) => {
        console.log(response);
        alert("tickets information saved!");
      })
      .catch((error) => {
        console.log(error.response);
      });
    setDisable(!isDisable);
  };

  const publish = () => {
    axios
      .post(
        `https://www.eventbriteapi.com/v3/events/${event_id}/publish/?token=2SWITQPH72SPNCSRK7OW`
      )
      .then((response) => {
        console.log(response);
        alert("Event has been pushlished!");
      })
      .catch((error) => {
        console.log(error.response);
      });
    props.history.push("/events");
  };

  const handleFormChange = ({ target: { name, value } }) => {
    setTicket({
      ...ticket,
      [name]: value,
    });
  };

  const handleFormCancel = () => {
    props.history.push("/events");
  };

  return (
    <div>
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
            Save and Continue
            {/* {state ? "Update" : "Submit"} */}
          </Button>
          <Button onClick={handleFormCancel} type="button">
            Cancel
          </Button>
        </Form>
      </Segment>
      <Button disabled={isDisable} onClick={publish} positive>Publish</Button>
    </div>
  );
};

export default CreateTicket;
