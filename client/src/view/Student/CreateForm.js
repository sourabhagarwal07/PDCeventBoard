import React, { Fragment } from "react";

const CreateForm = (props) => {
  return (
    <Fragment>
      <h1 class="ui center aligned huge header">
        Create/Activate Your Association
      </h1>
      <p>
        {" "}
        Each department in University of Ottawa can have a student association.{" "}
        <a href="https://gsaed.ca/en/about-us/">GSAED</a> (Graduate Student
        Association of University of Ottawa) represents the Graduate students at
        uOttawa and in order to create or activate your departmental student
        association, interested students should contact GSAED to learn more.
      </p>
      <p>
        {" "}
        The steps are elaborated below. We are saying, create or, activate your
        departmental graduate student association because an association might
        not exist at present time but there might have been one in past. So, if
        there was one, you can simply activate the association going through
        this process. But if an association was never created, you will have to
        go start from scratch.
      </p>

      <p> You can find the list of associations here.</p>
      <p>
        {" "}
        Following are the steps you have to take to establish your program’s
        association:
      </p>
      <div class="ui ordered list">
        <p class="item">
          First, find out if your departmental graduate student association
          already exists. Check the list of association in GSAED website too. If
          they are there, find a way to communicate with them. It is possible
          your association has a website, like{" "}
          <a href="http://ssgsauottawa.wordpress.com/">System Science</a>,{" "}
          <a href="https://ebtuottawa.ca/">E-Business</a>.
        </p>
        <p class="item">
          If you have not found a way to contact your departmental graduate
          student association, you should now seek help from GSAED. You can
          either go to their office located at the second floor of{" "}
          <a href="https://www.google.com/maps/place/Caf%C3%A9+Nostalgica/@45.4239118,-75.684085,17.03z/data=!4m5!3m4!1s0x0:0x4e562941be8e6756!8m2!3d45.4240167!4d-75.6839936">
            Cafe Nostalgica
          </a>
          , or send an email to Lucie Morin (gsaed@uottawa.ca) or, the Internal
          Commissioner (internal@gsaed.ca) requesting to provide you information
          about whether your departmental graduate student association is
          currently active or not. If it is active, request for the contact
          information of actual executives and get in touch with them.
        </p>
        <p class="item">
          If your association is not currently active but students in past had
          established one (which you can confirm from GSAED), request for bylaw
          from previous students. Study and understand the Bylaw, it will govern
          your departmental student association. Make sure you have clearly
          defined the position of executives in your association, their roles
          and how to elect them.
        </p>

        <p class="item">
          Once you have the Bylaw, next step to send the bylaw out for review.
          Send it out through email. You can request the emails of all students
          in your program through GSAED (again, you have to contact The Internal
          commissioner or, Lucie to get the emails). You should have some time
          (seven to ten days) after you send the Bylaw to allow students to read
          through it and give their comments on it and vote at a general
          assembly.
        </p>
        <p class="item">
          After review process, you have to now conduct fair election. Election
          can be done in many ways, like Ballot, online voting through google
          forms etc. but whatever mechanism you choose, it should be within the
          scope of bylaw that you have finalized by step 4. It needs to be a
          fair and independent process.
        </p>
        <p class="item">
          When election concludes, you have your executives for your
          association. Get together and proceed to formal registration of your
          Association. There is a form of registration you have to fill which
          will be provided by GSAED. You need to have at-least 2 co-signers for
          handling bank account of association so, make your mind beforehand
          about who is to be co-signer.
        </p>
      </div>
      <p>
        {" "}
        Once you have submitted the form you will get a letter from GSAED that
        will say you are recognized as a graduate student association and the
        co-signers will be handling bank account. When you open a bank account
        only then will the University will provide the association with money to
        carry out the events for students in your program. Share this:
      </p>
    </Fragment>
  );
};

export default CreateForm;
