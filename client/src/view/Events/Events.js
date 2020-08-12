import React, { Fragment, useState, useEffect, useContext } from "react";
import axios from "axios";

import { Button, Segment, Grid, GridColumn, Card } from "semantic-ui-react";
import { EventsConsumer, EventsContext } from "../../common/context/EventContext";
import EventCard from "./EventCard";
import Axios from "axios";
import { config } from "../../common/config/config";

const Events = (props) => {

  const { eventInfo, setEventInfo } = useContext(EventsContext);

  const url ="https://www.eventbriteapi.com/v3/organizations/464741062423/events/?token=2SWITQPH72SPNCSRK7OW";

  useEffect(async () => {
    console.log("effective currently")
    await Axios.get(url, {})
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        console.log(data);
        setEventInfo(data);
        console.log()
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div>
      <Card.Group itemsPerRow={3}>
        { eventInfo.events === undefined? null : eventInfo.events.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </Card.Group>
    </div>
  );
}

export default Events;
