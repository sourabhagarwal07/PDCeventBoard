import React, { Fragment } from 'react';
import { Segment, Card, Image} from 'semantic-ui-react';
import { startSession } from 'mongoose';

const EventCard = ({ event }) => {
  let { text } = event.description;
  if (text && text.length > 250) {
    text = `${text.substr(0, 250)}...`;
  }
  let Ev

  return (
    <Fragment>
      <Card color='red'>
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

  return (
    <div>
      <div className="uk-card uk-card-default">
        <div className="uk-card-media-top">
          {event.logo ? <img src={event.logo.url} alt={event.name} /> : null}
        </div>
        <div className="uk-card-body">
          <h3 className="uk-card-title">{event.name.text}</h3>
          {text}
        </div>
        <div className="uk-card-footer">
          <a
            href={event.url}
            target="_blank"
            rel="noopener noreferrer"
            className="uk-button uk-button-secondary"
          >
            More info
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
