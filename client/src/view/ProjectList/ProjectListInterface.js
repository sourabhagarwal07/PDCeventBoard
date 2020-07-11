import React, { Fragment, useState, useEffect } from "react";
import { Grid, Button } from "semantic-ui-react";
import CreateProject from "../CreateProject/CreateProject";
import ProjectList from "./ProjectList";
import Axios from "axios";

// This data should be got from server
const projectsFromServer = [
  {
    id: "1",
    title: "Web Development",
    date: "2020-03-27",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut,enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut,enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    hostedBy: "Apple",
    hostPhotoURL:
      "https://imageog.flaticon.com/icons/png/512/37/37150.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF",
    user: [
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg",
      },
    ],
  },
  {
    id: "2",
    title: "Game Development",
    date: "2020-05-28",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    hostedBy: "Ubisoft",
    hostPhotoURL:
      "https://www.logo-designer.co/wp-content/uploads/2017/06/2017-new-ubisoft-logo-2.png",
    user: [
      {
        id: "a",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/30.jpg",
      },
      {
        id: "b",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/29.jpg",
      },
    ],
  },
];

/**
 * @author @binjiasata
 * @description This page shows a project list and a create new project button.
 *              Todo: Project list data should be got from server.
 *              Todo: Create new project should be saved in server.
 */
const ProjectListInterface = () => {
  const [projectsInfo, setProjectsInfo] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpenToggle = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const handleCreateProject = (newProject) => {
    // we will get these info from server
    newProject.id = 9;
    newProject.hostPhotoURL =
      "https://img.icons8.com/carbon-copy/2x/company.png";
    setProjectsInfo([...projectsInfo, newProject]);
    setIsOpen(false);
  };

  useEffect(() => {
    Axios.get("http://localhost:8080/project", {})
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        console.log(data)
        data.map((project) => {
          console.log(project);
          setProjectsInfo([...projectsInfo, project]);
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <Fragment>
      <Grid>
        <Grid.Column width={10}>
          {/* Pass project info to project list and children component */}
          <ProjectList projectsInfo={projectsInfo} />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button
            onClick={handleIsOpenToggle}
            positive
            content="Create New Project"
          />
          {isOpen && (
            <CreateProject
              createProject={handleCreateProject}
              cancelCreateOpen={handleIsOpenToggle}
            />
          )}
        </Grid.Column>
      </Grid>
    </Fragment>
  );
};

export default ProjectListInterface;
