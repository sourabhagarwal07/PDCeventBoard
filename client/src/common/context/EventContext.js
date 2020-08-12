import React, { createContext, useState } from 'react';

const EventsContext = createContext();
// export const EventsConsumer = EventsContext.Consumer;

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