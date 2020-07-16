import React, { Fragment } from "react";
import { Button, Container, Segment, List,Header } from "semantic-ui-react";
import useReactRouter from "use-react-router";
import "./OurTeam.css";

const Home = (props) => {
  return (
    <Fragment >
      <Segment placeholder>
      <div class="center">
      <h2>
        Our Team
      </h2>     
      <p><h3>President</h3><div class="ui list">
      <div class="item">Astha Tiwari</div>
      <div class="item">Email: atiwa061@uottawa.ca</div>
    </div></p>
    <p><h3>Vice-President</h3><div class="ui list">
      <div class="item">Yi (Flora) Liu
    </div>
      <div class="item">Email: yliu538@uottawa.ca</div>
    </div></p>
    <p><h3>Event Manager</h3><div class="ui list">
      <div class="item">Parth Patel </div>
      <div class="item">Email: ppate127@uottawa.ca</div>
    </div><div class="ui list">
      <div class="item">Patricia Da Silva </div>
      <div class="item">Email: pdasi056@uottawa.ca</div>
    </div></p>
    <p><h3>Web Master</h3><div class="ui list">
      <div class="item">Bamdad Mousavi</div>
      <div class="item">Email: bmous014@uottawa.ca</div>
    </div></p>
    <p><h3>Publications Director</h3><div class="ui list">
      <div class="item">Yiling Yang</div>
      <div class="item">Email: yyang308@uottawa.ca</div>
    </div></p>
    <p><h3>Project Managers</h3><div class="ui list">
    <div class="item">Ajay Modagi </div>
      <div class="item">Email: amod040@uottawa.ca</div>
    </div><div class="ui list">
      <div class="item">Simardeep Singh </div>
      <div class="item">Email: ssima066@uottawa.ca</div>
    </div></p>
    </div>
    </Segment>
    </Fragment>
  );
};

export default Home;
