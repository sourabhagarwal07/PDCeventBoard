import React, { useEffect, useState, Fragment } from "react";
import { Button, Container,Segment,Form , List, Header } from "semantic-ui-react";
import axios from 'axios';

const Pictures = (props) => {
  const [imageFields, setImageFields] = useState({
    eventDate: "",
    eventName: ""
  });
  const [image, setImage] = useState([]);
  var path="";
  if (process.env.NODE_ENV != "production") {
    //for local setup
    path = "http://localhost:8080";
  }
    const handleFormSubmit=(e)=>{
        debugger;
        let imageFormObj= new FormData();
        imageFormObj.append("eventDate",imageFields.eventDate);
        imageFormObj.append("eventName",imageFields.eventName);
        imageFormObj.append("imageName",image[0].name);
        imageFormObj.append("imageData",image[0]);
        //make folders as per date
        //create image crousal for each date
        //upload pictures on mongodb
        //retrieve pictures from db and show on pictures page.
    
        path+='/images/uploadImage';
        axios({
          url: path,
          method: 'POST',
          data: imageFormObj//,
          //headers: {'Content-Type': 'multipart/form-data' }
        })
          .then((data) => { 
            if(data.data.success){
            console.log('Data has been sent to the server');
            }
          })
          .catch(() => {
            console.log('Internal server error');
          });;
    };
    const handleFormChange = ({ target: { name, value } }) => {
      setImageFields({
        ...imageFields,
        [name]: value,
      });
    };
    const onChangePicture = e => {
      setImage([e.target.files[0]]);
    };
      return (
    <Fragment>
      <Segment placeholder>
        <div class="center">
          <Form  onSubmit={handleFormSubmit}>
          <Form.Field>
          <label>Event Date</label>
          <input
            name="eventDate"
            value={imageFields.eventDate}
            onChange={handleFormChange}
            type="date"
            placeholder="Date"
          />
        </Form.Field>
        <Form.Field>
          <label>Event Name</label>
          <input
            name="eventName"
            value={imageFields.eventName}
            onChange={handleFormChange}
            type="text"
            placeholder="Event name"
          />
        </Form.Field>
        <Form.Field>
          <label>Choose file</label>
          <input
            name="image"
            onChange={e => onChangePicture(e)}
            type="file"
            placeholder="choose file"
          />
        </Form.Field>
        <Button positive type="submit">
          Upload
        </Button>
        </Form>
        </div>
      </Segment>
    </Fragment>
  );
};

export default Pictures;