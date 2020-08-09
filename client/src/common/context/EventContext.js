import React, { createContext, Component, useState, useContext } from 'react';
import axios from 'axios';

const EventsContext = createContext();
export const EventsConsumer = EventsContext.Consumer;

export {EventsContext};

const EventsProvider = (props) => {

  const [eventInfo, setEventInfo] = useState([]);

  return (
    <EventsContext.Provider
      value={{ eventInfo: eventInfo, setEventInfo:setEventInfo}}
    >
      {props.children}
    </EventsContext.Provider>
  );
}

export default EventsProvider;