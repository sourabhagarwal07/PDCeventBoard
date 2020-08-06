import React, { useEffect, useState } from "react";
import { Grid, Button } from "semantic-ui-react";
import ProjectDetailedHeader from "./ProjectDetailedHeader";
import ProjectDetailedInfo from "./ProjectDetailedInfo";
import ProjectDetailedSidebar from "./ProjectDetailedSidebar";
import Axios from "axios";
import { config } from "../../common/config/config";

/**
 * @author @binjiasata
 * @description Project details page, get project details from server.
 *
 */

const path = config();

const ProjectDeatiledPage = (props) => {
  const [projectDetails, setProjectDetails] = useState({});
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
  }, [setProjectDetails]);

  return (
    <Grid>
      <Grid.Column width={10}>
        <ProjectDetailedHeader id={id} path={path} project={projectDetails} />
        <ProjectDetailedInfo project={projectDetails} />
      </Grid.Column>
      <Grid.Column width={6}>
        <ProjectDetailedSidebar project={projectDetails} />
      </Grid.Column>
    </Grid>
  );
};

export default ProjectDeatiledPage;
