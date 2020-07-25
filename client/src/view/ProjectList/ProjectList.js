import React, { Fragment } from "react";
import ProjectListItem from "./ProjectListItem";

/**
 * @author @binjiasata
 * @description This is project list component.
 */
const ProjectList = ({ projectsInfo }) => {
  return (
    <Fragment>
      {projectsInfo.map((project) => (
        <ProjectListItem key={project._id} project={project} />
      ))}
    </Fragment>
  );
};

export default ProjectList;
