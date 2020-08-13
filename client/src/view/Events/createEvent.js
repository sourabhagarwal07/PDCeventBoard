import React, { useState } from "react";
import {
  Button,
  Form,
  Segment,
  Dropdown,
  TextArea,
  Checkbox,
  Grid,
} from "semantic-ui-react";
import axios from "axios";
import { EventsContext } from "../../common/context/EventContext";
import { config } from "../../common/config/config";
import CreateTicket from "./createTicket";
import useReactRouter from "use-react-router";
// import UploadFile from "./UploadFile";

/**
 * @author @binjiasata
 * @description Create a new project and show on Project List page.
 *              Post the new project to server.
 */

const CreateEvent = (props) => {
  const [time, setTime] = useState({
    startDate:"",
    endDate:"",
  });

  const [isOnline, setOnline] = useState(false);

  // project information
  const [event, setEvent] = useState({
    name: {html: ""},
    start: { timezone: "America/Toronto", utc: "" },
    end: { timezone: "America/Toronto", utc: "" },
    currency: "USD",
    online_event: false,
    summary:"",
    description: {html: ""},
    logo_id:"108521843"
  });

  /**
   * Category options:
   * include Machine Learning, Web Development, Game Development for now.
   */
  const timeOptions = [
    // { key: "12am", text: "12:00 AM", value: "00:00:00" },
    // { key: "12.30am", text: "12:30 AM", value: "00:30:00" },
    // { key: "1am", text: "1:00 AM", value: "01:00:00" },
    // { key: "1.30am", text: "1:30 AM", value: "01:30:00" },
    // { key: "2am", text: "2:00 AM", value: "02:00:00" },
    // { key: "2.30am", text: "2:30 AM", value: "02:30:00" },
    // { key: "3am", text: "3:00 AM", value: "03:00:00" },
    // { key: "3.30am", text: "3:30 AM", value: "03:30:00" },
    // { key: "4am", text: "4:00 AM", value: "04:00:00" },
    // { key: "4.30am", text: "4:30 AM", value: "04:30:00" },
    // { key: "5am", text: "5:00 AM", value: "05:00:00" },
    // { key: "5.30am", text: "5:30 AM", value: "05:30:00" },
    { key: "6am", text: "6:00 AM", value: "06:00:00" },
    { key: "6.30am", text: "6:30 AM", value: "06:30:00" },
    { key: "7am", text: "7:00 AM", value: "07:00:00" },
    { key: "7.30am", text: "7:30 AM", value: "07:30:00" },
    { key: "8am", text: "8:00 AM", value: "08:00:00" },
    { key: "8.30am", text: "8:30 AM", value: "08:30:00" },
    { key: "9am", text: "9:00 AM", value: "09:00:00" },
    { key: "9.30am", text: "9:30 AM", value: "09:30:00" },
    { key: "10am", text: "10:00 AM", value: "10:00:00" },
    { key: "10.30am", text: "10:30 AM", value: "10:30:00" },
    { key: "11am", text: "11:00 AM", value: "11:00:00" },
    { key: "11.30am", text: "11:30 AM", value: "11:30:00" },
    { key: "12pm", text: "12:00 PM", value: "12:00:00" },
    { key: "12.30pm", text: "12:30 PM", value: "12:30:00" },
    { key: "1pm", text: "1:00 PM", value: "13:00:00" },
    { key: "1.30pm", text: "1:30 PM", value: "13:30:00" },
    { key: "2pm", text: "2:00 PM", value: "14:00:00" },
    { key: "2.30pm", text: "2:30 PM", value: "14:30:00" },
    { key: "3pm", text: "3:00 PM", value: "15:00:00" },
    { key: "3.30pm", text: "3:30 PM", value: "15:30:00" },
    { key: "4pm", text: "4:00 PM", value: "16:00:00" },
    { key: "4.30pm", text: "4:30 PM", value: "16:30:00" },
    { key: "5pm", text: "5:00 PM", value: "17:00:00" },
    { key: "5.30pm", text: "5:30 PM", value: "17:30:00" },
    { key: "6pm", text: "6:00 PM", value: "18:00:00" },
    { key: "6.30pm", text: "6:30 PM", value: "18:30:00" },
    { key: "7pm", text: "7:00 PM", value: "19:00:00" },
    { key: "7.30pm", text: "7:30 PM", value: "19:30:00" },
    { key: "8pm", text: "8:00 PM", value: "20:00:00" },
    { key: "8.30pm", text: "8:30 PM", value: "20:30:00" },
    { key: "9pm", text: "9:00 PM", value: "21:00:00" },
    { key: "9.30pm", text: "9:30 PM", value: "21:30:00" },
    { key: "10pm", text: "10:00 PM", value: "22:00:00" },
    { key: "10.30pm", text: "10:30 PM", value: "22:30:00" },
    { key: "11pm", text: "11:00 PM", value: "23:00:00" },
    { key: "11.30pm", text: "11:30 PM", value: "23:30:00" },
  ];

  // handle dropdown category
  const handleStartTimeChange = (e, data) => {
    setEvent({
      ...event,
      start:{ timezone: "America/Toronto", utc: time.startDate+"T"+data.value+"Z" },
    })
  };

  const handleEndTimeChange = (e, data) => {
    setEvent({
      ...event,
      end: {timezone: "America/Toronto", utc: time.endDate+"T"+data.value+"Z"}
    })
  };
  const { history } = useReactRouter();
  // post project info to server
  const handleFormSubmit = async (e) => {
    
    e.preventDefault();
    const testdata = {
      event: event
    }

    console.log(testdata);
    axios.post('https://www.eventbriteapi.com/v3/organizations/464741062423/events/?token=2SWITQPH72SPNCSRK7OW', testdata)
    .then(response => { 
        const path = {
        pathname: "/create-ticket",
        state: response.data.id
      }
      console.log(response);
      alert("Your event is saved and please fill up ticket information")
      history.push(path);
    })
    .catch(error => {
        console.log(error.response)
    });
  };

  // when click cancel, go back to the project list page
  const handleFormCancel = () => {
    props.history.push("/events");
  };

  // handle form field change
  const handleFormChange = ({ target: { name, value } }) => {
    if (name == "name" || name == "description") {
      setEvent({
        ...event,
        [name]: {html: value }
      });
    } else {setEvent({
        ...event,
        [name]: value,
      });
    }
  };

  const handleTimeChange = ({ target: { name, value }}) => {
    setTime({
      ...time,
      [name]: value
    })
  }

  return (
    <Segment>
      <Form onSubmit={handleFormSubmit} autoComplete="off">
        <Form.Field>
          <label>Event Title</label>
          <input
            name="name"
            value={event.name.html}
            onChange={handleFormChange}
            placeholder="Event Title"
            required
          />
        </Form.Field>

        <Form.Field>
          <Grid style={{ paddindBottom: "10px" }}>
            <Grid.Column width={8}>
              <label>Events Starts</label>
              <input
                name="startDate"
                value={time.startDate}
                onChange={handleTimeChange}
                type="date"
                placeholder="Start Date"
                required
              />
            </Grid.Column>
            <Grid.Column width={8}>
              <label>Start Time</label>
              <Dropdown id="selectStart"
                onChange={handleStartTimeChange}
                placeholder="select end time"
                fluid
                selection
                options={timeOptions}
                required
              />
            </Grid.Column>
          </Grid>
          <Grid>
            <Grid.Column width={8}>
              <label>Events Ends</label>
              <input
                name="endDate"
                value={time.endDate}
                onChange={handleTimeChange}
                type="date"
                placeholder="End Date"
                required
              />
            </Grid.Column>
            <Grid.Column width={8}>
              <label>End Time</label>
              <Dropdown
                name={"endTime"}
                onChange={handleEndTimeChange}
                placeholder="select end time"
                fluid
                selection
                options={timeOptions}
                required
              />
            </Grid.Column>
          </Grid>
        </Form.Field>

        {/* <Form.Field>
          <label>Summary</label>
          <input
            name="summary"
            value={event.summary}
            onChange={handleFormChange}
            placeholder="Enter the Event summary"
          />
        </Form.Field> */}


        <Form.Field>
          <Checkbox
            onClick={() => setOnline(!isOnline)}
            label="Set it as an online event"
          />
        </Form.Field>

        <Form.Field>
          <label>Description</label>
          <TextArea
            name="description"
            rows={3}
            value={event.description.html}
            onChange={handleFormChange}
            placeholder="Enter the Desciption of the event"
          />
        </Form.Field>

        <Button positive type="submit">
          Save and continue
          {/* {state ? "Update" : "Submit"} */}
        </Button>
        <Button onClick={handleFormCancel} type="button">
          Cancel
        </Button>
      </Form>
    </Segment>
  );
};
export default CreateEvent;
// export {event_id};
