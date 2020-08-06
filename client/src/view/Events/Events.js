import React, { Fragment, useState, useEffect, useContext } from "react";
import axios from "axios";

import { Button, Segment, Grid, GridColumn, Card } from "semantic-ui-react";
import { EventsConsumer } from "../../common/context/EventContext";
import EventCard from "./EventCard";
import Axios from "axios";
import { config } from "../../common/config/config";

// const Events =(props)=>{

//   // const { eventInfo, setEventInfo } = useContext(EventsContext);
//   // let events = [];
//   // console.log(typeof(events));
//   // //events = Object.keys(eventInfo.events)
//   // console.log(typeof(events));
//   // console.log(events);

//   // const [ eventInfo, setEventInfo ] = useState();
//   // const path = config();

//   const url ="https://www.eventbriteapi.com/v3/organizations/464741062423/events/?token=2SWITQPH72SPNCSRK7OW";

//   const [eventInfo, setEventInfo] = useContext();

//   axios.get(url)
//     .then((res) => {
//       return res.data;
//     })
//     .then((data) => {
//       console.log(data);
//       setEventInfo(data);
//     })
//     .catch((e) => {
//       console.log(e);
//     });
//     console.log(eventInfo);
//   // useEffect(() => {
//   //   Axios.get(path + "events", {})
//   //     .then((res) => {
//   //       return res.data;
//   //     })
//   //     .then((data) => {
//   //       console.log(data);
//   //       setEventInfo(data);
//   //     })
//   //     .catch((e) => {
//   //       console.log(e);
//   //     });
//   // }, []);

//   return (
//     <div className="uk-child-width-1-3@m" uk-grid="true">
//       {console.log(eventInfo)}
//         {eventInfo.events.map(event => (
//           <EventCard key={event.id} event={event} />
//         ))}
//     </div>
//   );
// };

// export default Events;
const onClick = (value) => {
  value.getEvents();
};

const Events = () => {
  return (
    <div className="uk-child-width-1-3@m" uk-grid="true">
      <Segment>
        <EventsConsumer>
          {(value) => {
            return <Button onClick={value.getEvents}>Show events</Button>;
          }}
        </EventsConsumer>
      </Segment>
        <Card.Group itemsPerRow={3}>
        <EventsConsumer>
          {(value) =>
            value.events.map((event) => {
              return <EventCard key={event.id} event={event} />;
            })
          }
        </EventsConsumer>
        </Card.Group>
    </div>
  );
};
export default Events;
