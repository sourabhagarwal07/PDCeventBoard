import React, { Fragment } from "react";

const StudentForm = (props) => {
  return (
    <Fragment>
      <h1 class="ui center aligned huge header">
        Student Associations in uOttawa
      </h1>

      <p>All the associations in university of Ottawa can be found <a href="https://gsaed.ca/en/about-us/structure/departmental-associations/">here</a>.</p>

      <p>
        Following are the engineering associations that are currently active:
      </p>
      <div class="ui bulleted list">
        <a class="item" href="https://www.cssa-aei.ca/">
          Computer Science Student Association
        </a>
        <a
          class="item"
          href="https://catalogue.uottawa.ca/en/graduate/master-engineering-engineering-management/"
        >
          Engineering Management Student Association
        </a>
        <a class="item" href="https://dtiuottawa.ca/">
          E-Business Technology Student Association
        </a>
        <a
          class="item"
          href="http://www.site.uottawa.ca/school/eegsa/public_html/index.shtml"
        >
          Electrical Engineering Student Association
        </a>
        <a class="item" href="https://ssgsauottawa.wordpress.com/">
          System Science Student Association
        </a>
      </div>

      <p>
        Following are the engineering associations that are currently Inactive:
      </p>
      <div class="ui bulleted list">
        <div class="item">
          Civil and Environmental Engineering Student Association
        </div>
        <div class="item">Mechanical Engineering Student Association</div>
        <div class="item">Biomedical Engineering Student Association</div>
        <div class="item">Electrical Engineering Student Association</div>
        <div class="item">
          Chemical Engineering Student Association </div>
      </div>
     
      
    </Fragment>
  );
};

export default StudentForm;
