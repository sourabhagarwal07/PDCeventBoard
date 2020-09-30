/**
 * @author @yiyinzhang
 * @description Create a new event and push it to eventbrite.
 */

import React, { Fragment, useState, useEffect, useContext } from "react";

import { Card, Dropdown } from "semantic-ui-react";
import { EventsContext } from "../../common/context/EventContext";
import EventCard from "./EventCard";
import Axios from "axios";
import { deviceType } from "react-device-detect";
import { set } from "mongoose";
import moment from 'moment';

const Events = (props) => {
  const { eventInfo, setEventInfo } = useContext(EventsContext);

  const url =
    "https://www.eventbriteapi.com/v3/organizations/464741062423/events/?token=2SWITQPH72SPNCSRK7OW";

  const [columnNumber, setColumnNumber] = useState(3);

  const [filteredEvents, setFilteredEvents] = useState([]);

  // var fileteredEvents = eventInfo;

  const handleMobileView = (device) => {
    if (device === "mobile") {
      setColumnNumber(1);
    } else {
      setColumnNumber(3);
    }
  };

  useEffect(() => {
    let device = deviceType;

    handleMobileView(device);
    console.log("effective currently");
    Axios.get(url)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        console.log(data);
        setEventInfo(data);
        console.log(data.events)
        setFilteredEvents(data.events);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [setEventInfo, setFilteredEvents]);

  const showPastEvent = () => {
    let currentTime = moment().format().slice(0,10);
    setFilteredEvents(eventInfo.events.filter((event) => event.start.local.slice(0,10) < currentTime));
  };

  const showFutureEvent = () => {
    let currentTime = moment().format().slice(0,10);
    setFilteredEvents(eventInfo.events.filter((event) => event.start.local.slice(0,10) > currentTime));
  };

  const showAllEvent = () => {
    setFilteredEvents(eventInfo.events)
  }

  const eventsOptions = [
    {
      key: "Past Events",
      text: "Past Events",
      value: "Past Events",
      onClick: showPastEvent
    },
    {
      key: "Future Events",
      text: "Future Events",
      value: "Future Events",
      onClick: showFutureEvent
    },
    {
      key: "All Events",
      text: "All Events",
      value: "All Events",
      onClick: showAllEvent
    }
  ];
  return (
    <div>
      <Dropdown
        placeholder="Select Events"
        fluid
        selection
        options={eventsOptions}
      />
      <Card.Group itemsPerRow={columnNumber}>
        {filteredEvents === undefined
          ? null
          : filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
      </Card.Group>
      {/* <Card.Group itemsPerRow={columnNumber}>
        {eventInfo.events === undefined
          ? null
          : eventInfo.events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
      </Card.Group> */}
    </div>
  );
};

export default Events;
