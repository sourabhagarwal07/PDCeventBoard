import React, { Fragment } from "react";
import {
    Segment,
    Item,
    Card
  } from "semantic-ui-react";

const ProgramCoordinators = (props) => {
  return (
    <Fragment>
      <h1 class="ui center aligned huge header">
        Information about Program Coordinators for various disciplines
      </h1>
      <Card.Group itemsPerRow="4">
      <Card color='blue'>
        <Card.Content>
        <Card.Header>Abdullah-Al-Mehedi</Card.Header>
        <Card.Description>
          Program: DTI (UI/UX, Data Science)
        </Card.Description>
        <Card.Description>
          Email: ahasa085@uottawa.ca
        </Card.Description>
        </Card.Content>
      </Card>
      <Card color='blue'>
        <Card.Content>
        <Card.Header>Ali Vaseghnia</Card.Header>
        <Card.Description>
          Program: Systems Science
        </Card.Description>
        <Card.Description>
          Email: avase081@uottawa.ca
        </Card.Description>
        </Card.Content>
      </Card>
      <Card color='blue'>
        <Card.Content>
        <Card.Header>Akashdeep Singh</Card.Header>
        <Card.Description>
          Program: AMM and Mechanical Engineering
        </Card.Description>
        <Card.Description>
          Email: asing255@uottawa.ca
        </Card.Description>
        </Card.Content>
      </Card>
      <Card color='blue'>
        <Card.Content>
        <Card.Header>Navpreet Kaur</Card.Header>
        <Card.Description>
          Program: ELG
        </Card.Description>
        <Card.Description>
          Email: nkaur051@uottawa.ca
        </Card.Description>
        </Card.Content>
      </Card>
      <Card color='blue'>
        <Card.Content>
        <Card.Header>Yunzao Ma</Card.Header>
        <Card.Description>
          Program: Computer Science
        </Card.Description>
        <Card.Description>
          Email: yma122@uottawa.ca
        </Card.Description>
        </Card.Content>
      </Card>
      <Card color='blue'>
        <Card.Content>
        <Card.Header>Roopleen Kaur</Card.Header>
        <Card.Description>
          Program: Engineering Project Management
        </Card.Description>
        <Card.Description>
          Email: rkaur050@uottawa.ca
        </Card.Description>
        </Card.Content>
      </Card>
      <Card color='blue'>
        <Card.Content>
        <Card.Header>Farzaneh Farshad</Card.Header>
        <Card.Description>
          Program: Environmental and Civil Engineering 
        </Card.Description>
        <Card.Description>
          Email: ffars046@uottawa.ca
        </Card.Description>
        </Card.Content>
      </Card>
      <Card color='blue'>
        <Card.Content>
        <Card.Header>Mansher Singh</Card.Header>
        <Card.Description>
          Program: Bio-medical and Chemical Engineering
        </Card.Description>
        <Card.Description>
          Email: msidh098@uottawa.ca
        </Card.Description>
        </Card.Content>
      </Card>
      </Card.Group>
      </Fragment>
  );
};

export default ProgramCoordinators;
