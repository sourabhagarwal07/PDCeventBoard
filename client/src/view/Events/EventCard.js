import React, { Fragment } from 'react';
import { Card, Image} from 'semantic-ui-react';

const EventCard = ({ event }) => {
  let { text } = event.description;
  if (text && text.length > 250) {
    text = `${text.substr(0, 250)}...`;
  }

  return (
    <Fragment>
      <Card color='blue'>
        {event.logo ? <Image src={event.logo.url} alt={event.name} /> : null}
        <Card.Content>
        <Card.Header>{event.name.text}</Card.Header>
        <Card.Meta>
          <span>Start time: {event.start.local}</span>
        </Card.Meta>
        <Card.Meta>
          <span>End time: {event.end.local}</span>
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
