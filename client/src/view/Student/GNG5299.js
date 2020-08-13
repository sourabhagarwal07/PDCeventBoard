import React, { Fragment } from "react";
import {Button} from "semantic-ui-react";


const GNG5299 = (props) => {

  const handledownload = () => {
    window.open("https://professionaldevclub.files.wordpress.com/2019/08/gng5299_application-template.docx");
  };
  return (
    <Fragment>
      <h1 class="ui center aligned huge header">Project proposal Template</h1>

      <p>
        In order to register for GNG5299, students must complete a Project
        Proposal Form (fill in the attached template below) that must be
        approved and signed by one of the two Project Coordinators:{" "}
      </p>
      <p>
        Mana Azarm (mazar088@uottawa.ca), Office hours: Monday, 1-3pm in SITE
        3020
      </p>
      <p>
        Sawsan Abdul-Majid (sawsan.majid@uottawa.ca) Office hours: Friday, 12 –
        1:30pm in SITE 2051a.
      </p>
      <p>
        Students thinking of doing a GNG 5299 Project should attend the
        information sessions every Thursday from 4pm to 530pm in CRX-010.
      </p>
      <p>
        Once the proposal is approved you submit the signed project proposal
        form as a service request to your program.
      </p>
      <Button primary onClick={handledownload}>Download</Button>
    </Fragment>
  );
};

export default GNG5299;
