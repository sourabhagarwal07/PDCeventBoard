import React from "react";
import { Grid } from "semantic-ui-react";
import ProjectDetailedHeader from "./ProjectDetailedHeader";
import ProjectDetailedInfo from "./ProjectDetailedInfo";
import ProjectDetailedSidebar from "./ProjectDetailedSidebar";

// This data should be got from server
const projectsFromServer = {
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
};

const ProjectDeatiledPage = () => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <ProjectDetailedHeader projects={projectsFromServer} />
        <ProjectDetailedInfo projects={projectsFromServer} />
      </Grid.Column>
      <Grid.Column width={6}>
        <ProjectDetailedSidebar projects={projectsFromServer} />
      </Grid.Column>
    </Grid>
  );
};

export default ProjectDeatiledPage;
