import React, { Fragment } from "react";
import ProjectListItem from "./ProjectListItem";
import moment from "moment";

/**
 * @author @binjiasata
 * @description This is project list component. Only show the projects
 * which are still before expire date.
 */
const ProjectList = ({ projectsInfo }) => {
  const currentDate = moment().format("YYYY-MM-DD");
  const currentDateFourWeeksAgo = moment()
    .subtract(4, "weeks")
    .format("YYYY-MM-DD");

  return (
    <Fragment>
      {projectsInfo.map((project) => {
        {
          /* If expireDate exist and after currentDate, show the project.
           * If expireDate does not exist, but startDate after currentDateFourWeeksAgo, show the project.
           * Except, does not show the project.
           */
        }
        if (
          project.expireDate &&
          moment(currentDate).isBefore(project.expireDate)
        ) {
          return <ProjectListItem key={project._id} project={project} />;
        } else if (
          !project.expireDate &&
          moment(project.startDate).isAfter(currentDateFourWeeksAgo)
        ) {
          return <ProjectListItem key={project._id} project={project} />;
        } else {
          return;
        }
      })}
    </Fragment>
  );
};

export default ProjectList;
