import React, { useEffect, useState, Fragment } from "react";
import { Button, Container,Segment,Form , List, Header } from "semantic-ui-react";
import axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
//require('dotenv').config();

const Pictures = (props) => {
  const [imageFields, setImageFields] = useState({
    eventDate: "",
    eventName: ""
  });
  const [image, setImage] = useState([]);
  const [retrievedImageData, getImageData] = useState([]);
  const [retrievedImages, getImages] = useState([]);
  const [allEvents, getEvents] = useState([]);
  // var path="";
  // if (process.env.NODE_ENV != "production") {
  //   //for local setup
  //   path = process.env.serverURL;//"http://localhost:8080";
  // }
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
        // var path="";
        // if (process.env.NODE_ENV != "production") {
        //   //for local setup
        // path = process.env.serverURL;//"http://localhost:8080";
        // }
        var path ='/images/uploadImage';
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

    const showImages =(evntDate) =>{
      console.log("showing......",evntDate);
        var path=`/images/getImagesByDate/${evntDate.toString()}`;
        axios({
          url: path,
          method: 'GET'
        })
          .then((response) => { 
            if(response !== null){
              const files = response.data.files;
              console.log("images::::",files);
              var imageCrousel = [];
              var imageArray =[];
              if(files) {
                  files.forEach(function(file) {
                      if(file.metadata.eventDate === evntDate.toString()){
                        console.log("in ifffff");
                    //imageArray.push(<div><h3>{file.filename}{file.metadata.eventName}{file.metadata.eventDate}</h3></div>);
                    //  // var retrievedImagestring = displayImages(file.filename);
                    //  // getImages(retrievedImagestring);
                    //  // console.log("image string:::::::",retrievedImages);
                    //  //if (file.isImage) { 
                    //   // var path="";
                    //   // if (process.env.NODE_ENV != "production") {
                    //   //     //for local setup
                    //   //   path = process.env.serverURL;//"http://localhost:8080";
                    //   // }
                    //   // path+= `/images/image/${file.filename}`;
                    //    //const url =`http://localhost:8080/images/image/${file.filename}`
                       const url =`/images/image/${file.filename}`
                       imageArray.push(<div><img className="sliderimg" src={url} /></div>);
                       // subjectArray.push(<div><button onClick={(file._id)=>deleteImage(file._id)} class="btn btn-danger">Delete</button></div>);
                       //subjectArray.push(</Carousel>);
                    //crousal for images
                   imageCrousel.push(<Carousel>{imageArray}</Carousel>)
                   //imageCrousel.push(<div>{imageArray}</div>);
                   //console.log("arrayobjects:::",imageFolder);
              } else {
                imageCrousel.push(<p>No files to show</p>);
              }
              getImages(imageCrousel);
            });
          }
            else{
              console.log("No images to show");
            }
          }
        })
          .catch((err) => {
            console.log('Internal server error, not able to receive data',err);
          });
    };
    // const displayImages =(filename)=>{
    //   console.log('getting image');
    //     //path+=`/images/image/${filename}`
    //     axios({
    //       url: `http://localhost:8080/images/image/${filename}`,
    //       method: 'GET'
    //     })
    //       .then((response) => { 
    //        console.log("imagessssss::::::",response);
    //         //getImages(response.data);
    //         return response.data;
    //        // const udata = images;
    //         //console.log("received data", udata);
    //       })
    //       .catch((e) => {
    //         console.log('Internal server error, not able to retrieve image',e);
    //       });
    // };
    // const deleteImage =(id)=>{
    //   console.log('deleting image');
    //     //path+=`/images/image/${filename}`
    //     axios({
    //       url: `http://localhost:8080/images/file/${id}`,
    //       method: 'post'
    //     })
    //       .then((response) => { 
    //        console.log("Going to delete::",response);
    //         //getImages(response.data);
    //         //return response.data;
    //        // const udata = images;
    //         //console.log("received data", udata);
    //       })
    //       .catch((e) => {
    //         console.log('Internal server error, not able to delete image',e);
    //       });
    // };

    useEffect(() => {
      console.log('getting data');
      //var path="";
      // if (process.env.NODE_ENV !== "production") {
      //     //for local setup
      //   path = process.env.serverURL;//"http://localhost:8080";
      // }
      var path='/images/getVariousEvents';
      axios({
        url: path,
        method: 'GET'
      })
        .then((response) => { 
          if(response !== null){
            console.log("imagefilesss::::",response.data); 
            const Events = response.data.files;
            //const Files = response.data.files;
            console.log("images::::",Events);
            var imageArray = [];
            var imageCrousel = [];
            var imageFolder = [];
            var variousEvents =[];
            var variousEvents = [];
            if(Events){
              console.log("eventssss");
              //const groupedEvents = groupBy(Events, 'eventDate');
              // console.log("grouped events", groupedEvents);
              // groupedEvents.forEach(function(event){
              // imageFolder.push(<div><button onClick={event => showImages(event)}>{event.eventDate}</button></div>)
              // });
              Events.forEach(function(event){
                if(!(variousEvents.indexOf(event.eventDate)>-1)){
                  variousEvents.push(event.eventDate);
                }
              });
              //imageFolder.push(<div></div>)
              variousEvents.forEach(function(item){
                var itmDate = item;
                console.log("eventdate::",itmDate);
               imageFolder.push(<span><div onClick={() => showImages(itmDate)} value={itmDate}>{itmDate}</div></span>);
               //imageFolder.push(<p><span><div>{itmDate}</div></span></p>);
              });
            }
            else{
              imageFolder.push(<p>No events to show</p>);
            }
           // var filesCounter=0,dateCounter=0;
            // if(files) {
            //   // //subjectArray.push(<Carousel>);
            // //  const groupedFiles = groupBy(files, 'metadata.eventDate');
            //     //console.log("grouped data::::",groupedFiles);
            //     files.forEach(function(file) {
            //        //divide based on event date
            //        debugger;
            //         if(!(imageFolder.indexOf(file.metadata.eventDate)>-1)){
            //        // if(!isArrayItemExists(imageFolder,file.metadata.eventDate)){
            //          //imageFolder.push(file.metadata.eventDate); 
            //          var dateIndex = imageFolder.indexOf(file.metadata.eventDate);
            //          console.log("in iff....",dateIndex);
            //         console.log("image folder here:::",imageFolder);
            //         // console.log("date index:::",dateIndex);
            //        // imageFolder[] = [ ];
            //         //imageFolder[j][i] = [file.metadata.eventDate][file];
            //          //imageFolder.push([file.metadata.eventDate,file]);
            //          imageFolder[dateCounter][filesCounter] = [file.metadata.eventDate,file];
            //         // imageFolder[dateIndex][i]= {file:file}; // a[i] is now an array so this works.
            //          dateCounter++;
            //          filesCounter = 1;
            //        }
            //        else
            //        {
            //          var dateIndex = imageFolder.indexOf(file.metadata.eventDate);
            //          console.log("in else....",dateIndex);
            //          imageFolder[dateIndex][filesCounter] = [file.metadata.eventDate,file];
            //          filesCounter++; 
            //        }
            //       //  if(!imageFolder.indexOf(file.metadata.eventDate) > -1){
            //       //   imageFolder.push(file.metadata.eventDate);
            //       //  }
            //       //imageArray.push(<div><h3>{file.filename}{file.metadata.eventName}{file.metadata.eventDate}</h3></div>);
            //       //  // var retrievedImagestring = displayImages(file.filename);
            //       //  // getImages(retrievedImagestring);
            //       //  // console.log("image string:::::::",retrievedImages);
            //       //  //if (file.isImage) { 
            //       //   // var path="";
            //       //   // if (process.env.NODE_ENV != "production") {
            //       //   //     //for local setup
            //       //   //   path = process.env.serverURL;//"http://localhost:8080";
            //       //   // }
            //       //   // path+= `/images/image/${file.filename}`;
            //       //    //const url =`http://localhost:8080/images/image/${file.filename}`
            //          //const url =`/images/image/${file.filename}`
            //          //imageArray.push(<div><img className="sliderimg" src={url} /></div>);
            //          // subjectArray.push(<div><button onClick={(file._id)=>deleteImage(file._id)} class="btn btn-danger">Delete</button></div>);
            //          //subjectArray.push(</Carousel>);
            //         });
            //       //crousal for images
            //      // imageCrousel.push(<Carousel>{imageArray}</Carousel>)
            //      imageCrousel.push(<div>{imageArray}</div>);
            //      console.log("arrayobjects:::",imageFolder);
            // } else {
            //   imageCrousel.push(<p>No files to show</p>);
            // }
            // getImageData(imageCrousel);
            getEvents(imageFolder);
          }
          else{
            console.log("No events");
          }
        })
        .catch((err) => {
          console.log('Internal server error, not able to receive data',err);
        });
    }, []);

    // Accepts the array and key
const groupBy = (array, key) => {
  // Return the end result
  return array.reduce((result, currentValue) => {
    // If an array already present for key, push it to the array. Else create an array and push the object
    (result[currentValue[key]] = result[currentValue[key]] || []).push(
      currentValue
    );
    // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
    return result;
  }, {}); // empty object is the initial value for result object
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
          {/* <button onClick={displayImages}>Display images</button> */}
        </div>
        <div class="centre">
          <div>
           {allEvents}
          </div>
          <div id="imageCrousal"> 
            {retrievedImages}
          </div>
        </div>
      </Segment>
    </Fragment>
  );
};

export default Pictures;