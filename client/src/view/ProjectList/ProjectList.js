import React, { Fragment } from "react";
import ProjectListItem from "./ProjectListItem";

//git test
const ProjectList = (props) => {
  const { projectsInfo } = props;
  return (
    <Fragment>
      {projectsInfo.map((project) => (
        <ProjectListItem key={project.id} project={project} />
      ))}
    </Fragment>
  );
};

export default ProjectList;
