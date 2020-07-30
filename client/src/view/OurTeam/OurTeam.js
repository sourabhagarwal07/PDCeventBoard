import React, { Fragment, useEffect, useState } from "react";
import { Image, Grid, Segment, Accordion, Icon } from "semantic-ui-react";

const Home = (props) => {
  const InitialArray = new Array([10]);
  for (let i=0; i < 10; i++){
    InitialArray[i] = "Show bios";
  }
  const [bios, setbios] = useState(InitialArray);
  const [activeIndex, setActiveIndex] = useState(0);
  const [index, setIndex] = useState(-1);

  const handleClick = (e, titleProps) => {
    // setIndex(titleProps.index);
    const {index} = titleProps;
    let newIndex;
    if(activeIndex === index){
      newIndex = -1;
        bios[index] = "Show bios";
    } else {
      newIndex = index;
      bios[activeIndex] = "Show bios";
      bios[newIndex] = "Hide bios";
    }
    setActiveIndex(newIndex);
    
  };

  return (
    <Fragment>
      <Segment placeholder>
        <Grid columns={4} stackable textAlign="center">
          <Grid.Row>
            <Grid.Column>
              <Image centered size="large" src="/assets/liam_peyton3.jpg" />
              <h2>Astha Tiwari</h2>
              <h3>President</h3>
              <p>Email: atiwa061@uottawa.ca</p>
              <Accordion>
                <Accordion.Title
                  active={activeIndex === 0}
                  index={0}
                  onClick={handleClick}
                >
                  <Icon name="dropdown" />
                  {bios[0]}
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 0}>
                  <p>
                    Introduction 1
                  </p>
                </Accordion.Content>
              </Accordion>
            </Grid.Column>
            <Grid.Column>
              <Image centered size="large" src="/assets/liam_peyton3.jpg" />
              <h2>Yi (Flora) Liu</h2>
              <h3>Vice-President</h3>
              <p>Email: yliu538@uottawa.ca</p>
              <Accordion>
                <Accordion.Title
                  active={activeIndex === 1}
                  index={1}
                  onClick={handleClick}
                >
                  <Icon name="dropdown" />
                  {bios[1]}
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 1}>
                  <p>Introduction 2</p>
                </Accordion.Content>
              </Accordion>
            </Grid.Column>
            <Grid.Column>
              <Image centered size="large" src="/assets/liam_peyton3.jpg" />
              <h2>Parth Patel</h2>
              <h3>Event Manager</h3>
              <p>Email: ppate127@uottawa.ca</p>
              <Accordion>
                <Accordion.Title
                  active={activeIndex === 2}
                  index={2}
                  onClick={handleClick}
                >
                  <Icon name="dropdown" />
                  {bios[2]}
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 2}>
                  <p>
                  Introduction 3
                  </p>
                </Accordion.Content>
              </Accordion>
            </Grid.Column>
            <Grid.Column>
              <Image centered size="large" src="/assets/liam_peyton3.jpg" />
              <h2>Patricia Da Silva</h2>
              <h3>Event Manager</h3>
              <p>Email: pdasi056@uottawa.ca</p>
              <Accordion>
                <Accordion.Title
                  active={activeIndex === 3}
                  index={3}
                  onClick={handleClick}
                >
                  <Icon name="dropdown" />
                  {bios[3]}
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 3}>
                  <p>
                  Introduction 5
                  </p>
                </Accordion.Content>
              </Accordion>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Image centered size="large" src="/assets/liam_peyton3.jpg" />
              <h2>Bamdad Mousavi</h2>
              <h3>Web Master</h3>
              <p>Email: bmous014@uottawa.ca</p>
              <Accordion>
                <Accordion.Title
                  active={activeIndex === 4}
                  index={4}
                  onClick={handleClick}
                >
                  <Icon name="dropdown" />
                  {bios[4]}
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 4}>
                  <p>
                  Introduction 6
                  </p>
                </Accordion.Content>
              </Accordion>
            </Grid.Column>
            <Grid.Column>
              <Image centered size="large" src="/assets/liam_peyton3.jpg" />
              <h2>Yiling Yang</h2>
              <h3>Publications Director</h3>
              <p>Email: yyang308@uottawa.ca</p>
              <Accordion>
                <Accordion.Title
                  active={activeIndex === 5}
                  index={5}
                  onClick={handleClick}
                >
                  <Icon name="dropdown" />
                  {bios[5]}
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 5}>
                  <p>
                  Introduction 7
                  </p>
                </Accordion.Content>
              </Accordion>
            </Grid.Column>
            <Grid.Column>
              <Image centered size="large" src="/assets/liam_peyton3.jpg" />
              <h2>Ajay Modagi</h2>
              <h3>Project Managers</h3>
              <p>Email: atiwa061@uottawa.ca</p>
              <Accordion>
                <Accordion.Title
                  active={activeIndex === 6}
                  index={6}
                  onClick={handleClick}
                >
                  <Icon name="dropdown" />
                  {bios[6]}
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 6}>
                  <p>
                  Introduction 8
                  </p>
                </Accordion.Content>
              </Accordion>
            </Grid.Column>
            <Grid.Column>
              <Image centered size="large" src="/assets/liam_peyton3.jpg" />
              <h2>Simardeep Singh</h2>
              <h3>Project Managers</h3>
              <p>Email: ssima066@uottawa.ca</p>
              <Accordion>
                <Accordion.Title
                  active={activeIndex === 7}
                  index={7}
                  onClick={handleClick}
                >
                  <Icon name="dropdown" />
                  {bios[7]}
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 7}>
                  <p>
                  Introduction 9
                  </p>
                </Accordion.Content>
              </Accordion>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        {/* <div class="center">
          <h2>
            Our Team
          </h2>     
          <p>
            <h3>President</h3>
            <div class="ui list">
              <div class="item">Astha Tiwari</div>
              <div class="item">Email: atiwa061@uottawa.ca</div>
            </div>
          </p>
          <p>
            <h3>Vice-President</h3>
            <div class="ui list">
              <div class="item">Yi (Flora) Liu</div>
              <div class="item">Email: yliu538@uottawa.ca</div>
            </div>
          </p>
          <p>
            <h3>Event Manager</h3>
            <div class="ui list">
              <div class="item">Parth Patel </div>
              <div class="item">Email: ppate127@uottawa.ca</div>
            </div>
            <div class="ui list">
              <div class="item">Patricia Da Silva </div>
              <div class="item">Email: pdasi056@uottawa.ca</div>
            </div>
          </p>
          <p>
            <h3>Web Master</h3>
            <div class="ui list">
              <div class="item">Bamdad Mousavi</div>
              <div class="item">Email: bmous014@uottawa.ca</div>
            </div>
          </p>
          <p>
            <h3>Publications Director</h3>
            <div class="ui list">
              <div class="item">Yiling Yang</div>
              <div class="item">Email: yyang308@uottawa.ca</div>
            </div>
          </p>
          <p>
            <h3>Project Managers</h3>
            <div class="ui list">
              <div class="item">Ajay Modagi </div>
              <div class="item">Email: amod040@uottawa.ca</div>
            </div>
            <div class="ui list">
              <div class="item">Simardeep Singh </div>
              <div class="item">Email: ssima066@uottawa.ca</div>
            </div>
          </p>
        </div> */}
      </Segment>
    </Fragment>
  );
};

export default Home;
