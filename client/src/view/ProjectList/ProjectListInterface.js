import React, { Fragment, useState } from "react";
import { Grid, Button } from "semantic-ui-react";
import CreateProject from "../CreateProject/CreateProject";
import ProjectList from "./ProjectList";

// data from server
const projectsFromServer = [
  {
    id: "1",
    title: "Web Development",
    date: "2020-03-27",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
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

const ProjectListInterface = () => {
  const [projectsInfo, setProjectsInfo] = useState(projectsFromServer);
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

  return (
    <Fragment>
      <Grid>
        <Grid.Column width={10}>
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
