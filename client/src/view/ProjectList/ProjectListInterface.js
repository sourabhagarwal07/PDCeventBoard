import React, { Fragment, useState, useEffect, useContext } from "react";
import { Grid, Button } from "semantic-ui-react";
import ProjectList from "./ProjectList";
import Axios from "axios";
import { UserContext } from "../../common/context/UserProvider";
import { config } from "../../common/config/config";

/**
 * @author @binjiasata
 * @description This page shows a project list and a create new project button.
 *              The project list is got from server.
 *          
 */
const ProjectListInterface = (props) => {
  // path config http://localhost:8080/
  const path = config();
  const { userInfo, setUserInfo } = useContext(UserContext);

  const [projectsInfo, setProjectsInfo] = useState([]);

  // when click create new project, jump to create-project page
  // const handleCreateNewProject = () => {
  //   props.history.push("/create-project");
  // };

  useEffect(() => {
    Axios.get(path + "project", {})
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setProjectsInfo(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <Fragment>
      <Grid>
        <Grid.Column width={12}>
          {/* Pass project info to project list and children component */}
          <ProjectList projectsInfo={projectsInfo} />
        </Grid.Column>
        {/* <Grid.Column width={6}>
          {userInfo.user && userInfo.user.admin && (
            <Button
              onClick={handleCreateNewProject}
              positive
              content="Create New Project"
            />
          )}
        </Grid.Column> */}
      </Grid>
    </Fragment>
  );
};

export default ProjectListInterface;
