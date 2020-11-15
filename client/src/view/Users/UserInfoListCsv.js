import React, { Fragment,useState, useEffect } from "react";
import { CSVLink} from "react-csv";
import { config } from "../../common/config/config";
import Axios from "axios";

const path = config();

const UserInfoListCsv =() => {
  const [completeUsersList, setCompleteUsersList] = useState([]);
  const headers = [
    { label: 'Name', key: 'name' },
    { label: 'Email', key: 'email' },
    { label: 'Program', key: 'program'},
    // { label: 'IsGoogleAccount', key: 'googleId'},
    // { label: 'IsLinkedInAccount', key: 'linkedinId'},
    // { label: 'IsOutlookAccount', key: 'outlookId'},
    { label: 'IsAdmin', key: 'admin'},
    { label: 'IsCompany', key: 'company'},
  ];
 
  useEffect(() => {
    Axios.get(path + "user/completeuserlist")
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setCompleteUsersList(data);
      })
      .catch((e) => {
        console.log(e);
      });
  },[null]);
  
  let userList = [
   ];

  completeUsersList.map((user)=>{
    userList.push(
      {
        name:user.name,
        email:user.email,
        admin:user.admin,
        company:user.company,
        program:user.program
      });
  });

  return (
    <Fragment>
        <CSVLink headers={headers} data={userList} filename="User info list.csv">
          Download User Information Here
        </CSVLink>
    </Fragment>
  );
};

export default UserInfoListCsv;
