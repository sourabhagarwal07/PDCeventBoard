import React, { Fragment } from "react";
import {
    Card
  } from "semantic-ui-react";

const Programs = (props) => {
  return (
    <Fragment>
      <h1 class="ui center aligned huge header">
        Program Information
      </h1>
      <Card.Group centered="true" itemsPerRow={1}>
      <Card color='blue'>
        <Card.Content>
        <details>
          <summary>ELG</summary>
          <p>Electrical engineering</p>
          <p>Electrical engineering</p>
          <p>Masters
          5902</p>
          <p>Masters
          5902</p>
        </details>
        </Card.Content>
      </Card>
      <Card color='blue'>
        <Card.Content>
        <details>
          <summary>DTI</summary>
          <p>Electrical engineering</p>
          <p>Electrical engineering</p>
          <p>Masters
          5902</p>
          <p>Masters
          5902</p>
        </details>
        </Card.Content>
      </Card>
      <Card color='blue'>
        <Card.Content>
        <details>
          <summary>System Sciences</summary>
          <p>Electrical engineering</p>
          <p>Electrical engineering</p>
          <p>Masters
          5902</p>
          <p>Masters
          5902</p>
        </details>
        </Card.Content>
      </Card>
      </Card.Group>
      </Fragment>
  );
};

export default Programs;
