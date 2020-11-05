import React, { Fragment, useState } from "react";
import { Image, Grid, Segment } from "semantic-ui-react";

const Home = (props) => {
  const InitialArray = new Array([10]);
  for (let i = 0; i < 10; i++) {
    InitialArray[i] = "Show bios";
  }
  const [bios, setbios] = useState(InitialArray);
  const [activeIndex, setActiveIndex] = useState(0);
  const [index, setIndex] = useState(-1);

  const handleClick = (e, titleProps) => {
    // setIndex(titleProps.index);
    const { index } = titleProps;
    let newIndex;
    if (activeIndex === index) {
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
              <Image centered size="large" src="/assets/Astha.jpg" />
              <h2>Astha Tiwari</h2>
              <h3>President</h3>
              <p>atiwa061@uottawa.ca</p>
              {/* <Accordion>
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
              </Accordion> */}
            </Grid.Column>
            <Grid.Column>
              <Image centered size="large" src="/assets/Ajay 2.jpg" />
              <h2>Ajay Modagi</h2>
              <h3>Vice-President</h3>
              <p>amoda040@uottawa.ca</p>
              {/* <Accordion>
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
              </Accordion> */}
            </Grid.Column>
            <Grid.Column>
              <Image centered size="large" src="/assets/Parth.jpg" />
              <h2>Parth Patel</h2>
              <h3>Event Manager</h3>
              <p>ppate127@uottawa.ca</p>
              {/* <Accordion>
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
              </Accordion> */}
            </Grid.Column>
            <Grid.Column>
              <Image centered size="large" src="/assets/Pat.jpg" />
              <h2>Patricia Da Silva</h2>
              <h3>Event Manager</h3>
              <p>pdasi056@uottawa.ca</p>
              {/* <Accordion>
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
              </Accordion> */}
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
          <Grid.Column>
              <Image centered size="large" src="/assets/Flora.jpg" />
              <h2>Yi (Flora) Liu</h2>
              <h3>Alumni Relation Coordinator</h3>
              <p>yliu538@uottawa.ca</p>
              {/* <Accordion>
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
              </Accordion> */}
            </Grid.Column>
            <Grid.Column>
              <Image centered size="large" src="/assets/yillin.jpg" />
              <h2>Yiling Yang</h2>
              <h3>Publications Director</h3>
              <p>yyang308@uottawa.ca</p>
              {/* <Accordion>
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
              </Accordion> */}
            </Grid.Column>
            <Grid.Column>
              <Image centered size="large" src="/assets/Simardeep.jpg" />
              <h2>Simardeep Singh</h2>
              <h3>Project Manager</h3>
              <p>ssima066@uottawa.ca</p>
              {/* <Accordion>
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
              </Accordion> */}
            </Grid.Column>
            <Grid.Column>
              <Image centered size="large" src="/assets/Abhiram.jpg" />
              <h2>Abhiram Kothapalli</h2>
              <h3>Web Master and Developer</h3>
              <p>akoth101@uottawa.ca</p>
              {/* <Accordion>
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
              </Accordion> */}
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
            <Image centered size="large" src="/assets/Yiyin.png" />
              <h2>Yiyin Zhang</h2>
              <h3>Web Developer</h3>
              <p>yzhan647@uottawa.ca</p>
              {/* <Accordion>
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
              </Accordion> */}
            </Grid.Column>
            <Grid.Column>
            <Image centered size="large" src="/assets/Bin.jpg" />
              <h2>Bin Jia</h2>
              <h3>Web Developer</h3>
              <p>bjia038@uottawa.ca</p>
              {/* <Accordion>
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
              </Accordion> */}
            </Grid.Column>
            <Grid.Column>
            <Image centered size="large" src="/assets/Navpreet.jpg" />
              <h2>Navpreet Kaur</h2>
              <h3>Web Developer</h3>
              <p>nkaur051@uottawa.ca</p>
              {/* <Accordion>
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
              </Accordion> */}
            </Grid.Column>
            <Grid.Column>
              {/* <Image centered size="large" src="/assets/Navpreet.jpg" />
              <h2>Navpreet Kaur</h2>
              <h3>Web Developer</h3>
              <p>nkaur051@uottawa.ca</p> */}
              {/* <Accordion>
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
              </Accordion> */}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Fragment>
  );
};

export default Home;
