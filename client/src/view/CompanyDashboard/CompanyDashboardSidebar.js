import React, { Fragment, useState } from "react";
import { Menu } from "semantic-ui-react";

const CompanyDashboardSidebar = ({activeItem, setActiveItem}) => {

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };

  return (
    <Fragment>
      <Menu size="large" vertical>
        <Menu.Item
          name="Projects"
          active={activeItem === "Projects"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="Profile"
          active={activeItem === "Profile"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="Setting"
          active={activeItem === "Setting"}
          onClick={handleItemClick}
        />
      </Menu>
    </Fragment>
  );
};

export default CompanyDashboardSidebar;
