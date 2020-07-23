//import React, { Fragment, useState } from "react";
import React, { useEffect, useState, Fragment } from "react";
import { Button, Container,Segment, List, Header } from "semantic-ui-react";
import axios from 'axios';

const Data = (props) => {
  const [infoFields, setInfoFields] = useState({
    sname: "",
    email: "",
    stream: "",
  });
  const [userdata, setUserData]=useState([]);
    var path="";
  if (process.env.NODE_ENV != "production") {
    //for local setup
    path = "http://localhost:8080";
  }
  const handleChange = ({ target: { name, value } })=>{
    setInfoFields({
      ...infoFields,
      [name]:value,
    });
  };
    const sendData = (e) => {
        alert('sending data');
        const payload = {
            name: infoFields.sname,
            email:infoFields.email,
            stream: infoFields.stream
          };
      
          path+='/senddata';
          axios({
            url: path,
            method: 'POST',
            data: payload
          })
            .then(() => { 
              console.log('Data has been sent to the server');
              //resetUserInputs();
            })
            .catch(() => {
              console.log('Internal server error');
            });;
      };

      const showData = (e) => {
        alert('showing data');
          path+='/showdata';
          axios({
            url: path,
            method: 'GET'
          })
            .then((response) => { 
              const udata = response.data;
              setUserData({
                ...userdata,
                userdata:udata,
              })
              console.log("received data", udata);
              //var userdatadis = displaydataHere(userdata);
              //console.log("format received data", userdatadis);
              //var datadiv = document.getElementById("userdata");
              //datadiv.appendChild(userdatadis);
            })
            .catch(() => {
              console.log('Internal server error, not able to receive data');
            });
      };
      const displaydataHere=(userdata)=>{
        if(!userdata.length) return null;
        return userdata.map((post,index)=>(
          <div key={index}>
            <p>
              {post.name}
            </p>
            <p>
              {post.email}
            </p>
            <p>
              {post.stream}
            </p>
          </div>
        ));
      };
      useEffect(() => {
        console.log("state::name::::",infoFields);
      });
      return (
    <Fragment>
      <Segment placeholder>
        <div class="center">
          <form>
            <div className="form-input">
              <input type="text" name="sname" value={infoFields.sname} onChange={handleChange}></input>
              <input type="text" name="email" value={infoFields.email} onChange={handleChange}></input>
              <input type="text" name="stream" value={infoFields.stream} onChange={handleChange}></input>
            </div>
              <button onClick={sendData}>Send data</button>
          </form>
          <button onClick={showData}>Show data</button>
      <div id="userdata"></div>

            </div>
      </Segment>
    </Fragment>
  );
};

export default Data;