import React, { Fragment } from 'react';
import { Card, Image} from 'semantic-ui-react';
import moment from 'moment';

const EventCard = ({ event }) => {
  let { text } = event.description;
  if (text && text.length > 250) {
    text = `${text.substr(0, 250)}...`;
  }

  const timeDisplay = (time) => {

    //example: time = "2020-08-15T07:30:00"
    time = time.split("T");  // time = ["2020-08-15", "07:30:00"]
    let time0 = time[0].split("-"); // time0 = ["2020", "08", "15"];
    let time1 = time[1].split(":"); // time1 = ["07", "30", "00"]
    let timeD = time0[2]+"/"+time0[1]+"/"+time0[0];  //timeD="15/08/2020"
    let ampm = "AM";
    if(time1[0] >= 12 ){
      ampm = "PM";
      if(time1[0] > 12){
        time1[0] = time1[0] -12;
      }
    }
    let timeT = time1[0]+":"+time1[1]+" "+ampm;  //timeT="07:30 AM"
   
    return time = timeD+" "+" "+timeT;
  }

  return (
    <Fragment>
      <Card color='blue'>
        {event.logo ? <Image src={event.logo.url} alt={event.name} /> : null}
        <Card.Content>
        <Card.Header>{event.name.text}</Card.Header>
        <Card.Meta>
          <span>Start time: {timeDisplay(event.start.local)}</span>
        </Card.Meta>
        <Card.Meta>
          <span>End time: {timeDisplay(event.end.local)}</span>
        </Card.Meta>
        <Card.Description>
          {event.description.text}
        </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a href={event.url}>
            More info
          </a>
          </Card.Content>
        </Card>
    </Fragment>
  )
};

export default EventCard;
