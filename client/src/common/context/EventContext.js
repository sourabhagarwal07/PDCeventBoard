import React, { createContext,Component, useState, useContext } from 'react';
import axios from 'axios';
import Axios from 'axios';

const EventsContext = createContext();
export const EventsConsumer = EventsContext.Consumer;

// const EventsProvider =  (props) => {
//   const url ="https://www.eventbriteapi.com/v3/organizations/464741062423/events/?token=2SWITQPH72SPNCSRK7OW";

//   const [eventInfo, setEventInfo] = useState([]);

//   axios.get(url)
//     .then((res) => {
//       return res.data;
//     })
//     .then((data) => {
//       //console.log(data);
//       setEventInfo(data);
//     })
//     .catch((e) => {
//       console.log(e);
//     });  

//   return (
//     <EventsContext.Provider
//       value={{ eventInfo: eventInfo, setEventInfo:setEventInfo}}
//     >
//       {props.children}
//     </EventsContext.Provider>
//   );
// }

// export {EventsProvider, EventsContext};

class EventsProvider extends Component {
  state = { events: [] };

  getEvents = async () => {
    const url ="https://www.eventbriteapi.com/v3/organizations/464741062423/events/?token=2SWITQPH72SPNCSRK7OW";
    // const url = `https://www.eventbriteapi.com/v3/events/search/?q=${
    //   params.name
    // }
    // &categories=${params.category}&sort_by=${this.order}&token=${this.apiKey}`;

    const response = await axios.get(url);
    const { events } = response.data;
    console.log(events);

    this.setState({ events });
  };

  render() {
    return (
      <EventsContext.Provider
        value={{ events: this.state.events, getEvents: this.getEvents }}
      >
        {this.props.children}
      </EventsContext.Provider>
    );
  }
}

export default EventsProvider;