import React, { useEffect, useState, useContext } from "react";
import { Grid } from "semantic-ui-react";
import ProjectDetailedHeader from "./ProjectDetailedHeader";
import ProjectDetailedInfo from "./ProjectDetailedInfo";
import ProjectDetailedSidebar from "./ProjectDetailedSidebar";
import Axios from "axios";
import { config } from "../../common/config/config";
import ProjectDetailedAppliedStudents from "./ProjectDetailedAppliedStudents";
import { UserContext } from "../../common/context/UserProvider";

/**
 * @author @binjiasata
 * @description Project details page, get project details from server.
 *
 */

const path = config();

const ProjectDeatiledPage = (props) => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const [projectDetails, setProjectDetails] = useState({});
  const [appliedStudentsList, setAppliedStudentsList] = useState([]);

  const { id } = props.match.params;

  // get project details accroding to project id
  useEffect(() => {
    Axios.get(path + "project/" + id)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setProjectDetails(data);
      });

    Axios.get(path + "student/apply/" + id)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setAppliedStudentsList(data);
      });
  }, [setProjectDetails, id]);

  return (
    <Grid>
      <Grid.Column width={10}>
        <ProjectDetailedHeader
          id={id}
          path={path}
          project={projectDetails}
          userInfo={userInfo}
          appliedStudentsList={appliedStudentsList}
        />
        <ProjectDetailedInfo project={projectDetails} />
      </Grid.Column>
      <Grid.Column width={6}>
        <ProjectDetailedSidebar project={projectDetails} />
        {userInfo.user &&
        (userInfo.user.company || userInfo.user.admin) &&
        projectDetails.user &&
        projectDetails.user[0].email === userInfo.user.email ? (
          <ProjectDetailedAppliedStudents
            appliedStudentsList={appliedStudentsList}
          />
        ) : (
          ""
        )}
      </Grid.Column>
    </Grid>
  );
};

export default ProjectDeatiledPage;
