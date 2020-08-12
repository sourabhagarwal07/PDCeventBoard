import React, { Fragment } from "react";
import { Segment, Item } from "semantic-ui-react";
import { Link } from "react-router-dom";

const CompanyDashboardItem = ({ project }) => {
  const { logoUrl, title, _id } = project;
  return (
    <Fragment>
      <Segment>
        <Item.Group divided>
          <Item>
            <Item.Image size="tiny" src={logoUrl} />
            <Item.Content
              as={Link}
              to={`/project-detail/${_id}`}
              verticalAlign="middle"
            >
              {title}
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
    </Fragment>
  );
};

export default CompanyDashboardItem;
