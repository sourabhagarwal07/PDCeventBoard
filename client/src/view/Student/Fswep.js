import React, { Fragment } from "react";

const Fswep = (props) => {
  return (
    <Fragment>
      <h1 class="ui center aligned huge header">
        Programs Recognized by FSWEP
      </h1>

      <p>
        Following programs in University of Ottawa’s Faculty of Engineering have
        been registered in{" "}
        <a href="https://www.canada.ca/en/public-service-commission/jobs/services/recruitment/students/federal-student-work-program.html">
          FSWEP
        </a>{" "}
        as recognized for internship, co-op programs.
      </p>

      <div class="ui bulleted list">
        <div class="item">
          Master of Engineering, Advanced Materials and Manufacturing{" "}
        </div>
        <div class="item">
          {" "}
          Master of Computer Sciences, Applied Artificial Intelligence
        </div>
        <div class="item">Master of Computer Sciences, Bioinformatics </div>
        <div class="item"> Master of Engineering, Biomedical Engineering</div>
        <div class="item">Master of Engineering, Chemical Engineering </div>
        <div class="item"> Master of Engineering, Civil Engineering</div>
        <div class="item">
          {" "}
          Master of Engineering, Electrical and Computer Engineering
        </div>
        <div class="item">
          Master of Engineering, Electronic Business Technologies
        </div>
        <div class="item"> Master of Engineering, Engineering Management</div>
        <div class="item">
          {" "}
          Master of Environment, Environmental Engineering
        </div>
        <div class="item"> Master of Engineering, Mechanical Engineering</div>
        <div class="item"> Master of Applied Technology, System Science</div>
      </div>

      <p>Duration of the co-op or, internship term can be 4 or, 8 months.</p>
      <p>
        Information about FSWEP can be found{" "}
        <a href="https://www.canada.ca/en/public-service-commission/jobs/services/recruitment/students/federal-student-work-program.html">
          here
        </a>
        .
      </p>
    </Fragment>
  );
};

export default Fswep;
