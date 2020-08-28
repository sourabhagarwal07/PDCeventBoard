import React, { Fragment } from "react";
import {Button,Grid,Segment,Image} from "semantic-ui-react";


const GNG5299 = (props) => {

  const handledownload = () => {
    window.open("https://professionaldevclub.files.wordpress.com/2019/08/gng5299_application-template.docx");
  };
  return (
    <Fragment>
      <Segment placeholder>
        <Grid columns={2} stackable textAlign="center">
          <Grid.Row verticalAlign="middle">
            <Grid.Column>
              <h1>Useful University Resources for Newly Admitted Students</h1>
            </Grid.Column>
            <Grid.Column>
              <Image centered size="large" src="/assets/students-uottawa.jpg" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <div class="ui inverted segment">
        <div class="ui inverted relaxed divided list">
          <a class="item" href="https://international.uottawa.ca/en">
          International Office 
          </a>
          <a class="item" href="https://international.uottawa.ca/en/study-at-uottawa/current-students/immigration#1">
          Immigration
          </a>
          <a class="item" href="https://international.uottawa.ca/en/study-at-uottawa/uoconnexion">
          uOConnexion 
          </a>
          <a class="item" href="https://international.uottawa.ca/en/study-at-uottawa/uhip">
          University Health Insurance Plan (UHIP)
          </a>
          <a
            class="item"
            href="https://www.uottawa.ca/graduate-studies/students/awards"
          >
            Awards and Financial Support
          </a>
          <a
            class="item"
            href="https://www.uottawa.ca/wellness/"
          >
            Mental Health and Wellness 
          </a>
          <a class="item" href="https://www.uottawa.ca/career-development-centre/">
          Career Development Centre 
          </a>
          <a class="item" href="https://sass.uottawa.ca/en/writing">
          Academic Writing Help Centre (AWHC)
          </a>
          <a class="item" href="https://olbi.uottawa.ca/">
          Official Language and Bilingualism Institute (OLBI)
          </a>
          <a class="item" href="https://gsaed.ca/en/home/">
          Graduate Students Association of the University of Ottawa (GSAED) 
          </a>
          <a class="item" href="https://www.uottawa.ca/important-academic-dates-and-deadlines/">
          Important Academic Dates and Deadlines 
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default GNG5299;
