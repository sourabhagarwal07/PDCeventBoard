import React, { Fragment, useEffect, useContext, useState } from "react";
import { Grid, Header, Icon } from "semantic-ui-react";
import CompanyDashboardItem from "./CompanyDashboardItem";
import CompanyDashboardSidebar from "./CompanyDashboardSidebar";
import { UserContext } from "../../common/context/UserProvider";
import Axios from "axios";
import { config } from "../../common/config/config";
import CompanyDashboardProfile from "./CompanyDashboardProfile";
import CompanyDashboardSetting from "./CompanyDashboardSetting";

const path = config();

const CompanyDashboard = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const { _id: userId } = userInfo.user;
  const [projectList, setProjectList] = useState([]);
  const [activeItem, setActiveItem] = useState("Projects");

  useEffect(() => {
    Axios.get(path + "project/user/" + userId)
      .then((res) => res.data)
      .then((data) => setProjectList(data));
  }, [userId]);

  return (
    <Fragment>
      <Header as="h1">
        <Icon name="dashboard" />
        <Header.Content>Dashboard</Header.Content>
      </Header>
      <Grid>
        <Grid.Column width={12}>
          {projectList &&
            activeItem === "Projects" &&
            projectList.map((project) => {
              return <CompanyDashboardItem project={project} />;
            })}
          {activeItem === "Profile" && <CompanyDashboardProfile />}
          {activeItem === "Setting" && <CompanyDashboardSetting />}
        </Grid.Column>
        <Grid.Column width={4}>
          <CompanyDashboardSidebar
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        </Grid.Column>
      </Grid>
    </Fragment>
  );
};

export default CompanyDashboard;
