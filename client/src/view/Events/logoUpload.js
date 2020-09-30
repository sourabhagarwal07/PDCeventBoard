import React, { Fragment, useState } from "react";
import { Icon, Label } from "semantic-ui-react";
import { Upload, Button } from "antd";
import "antd/dist/antd.css";
import { config } from "../../common/config/config";
import Axios from "axios";
import request from 'request';

/**
 * @author @yiyinzhang
 * @description Upload project logo component.
 */

// const path = config();

const UploadLogo = () => {
  // myfile = open()
}

// const UploadLogo = () => {
//   const [fileList, setFileList] = useState([]);
//   const upload_url =
//     "https://s3.amazonaws.com/eventbrite-uploader-incoming-prod/";
//   const image_data = {
//     upload_token:
//       "aW1hZ2UtZXZlbnQtbG9nb3xldmVudGJyaXRlLXVwbG9hZGVyLWluY29taW5nLXByb2R8OGIyOTU0MDAwYjM1NDIzOC4yMDIwMDkxNS0wMDI1NDA=",
//     crop_mask: {
//       top_left: {
//         y: 1,
//         x: 1,
//       },
//       width: 1280,
//       height: 640,
//     },
//   };
//   // const [image_data, setImage] = useState(INITIAL_STATE);
//   let fileName = "";

//   const [uploadStatus, setUploadStatus] = useState("");

//   // For saving images in database, convert image to base64 format
//   const getBase64 = (img, callback) => {
//     const reader = new FileReader();                                                                                                                                                                                                                             
//     reader.addEventListener("load", () => callback(reader.result));
//     reader.readAsBinaryString(img);
//   };

//   const getR = () => {
//     let data = "";
//     let url = "https://www.eventbriteapi.com/v3/media/upload/?type=image-event-logo&token=2SWITQPH72SPNCSRK7OW";
//     Axios.get(url).then((req) => {
//       data = req.body
//     })
//     console.log(data);

//   }
  
//   const dataURItoBlob = (base64Data) => {
//     var byteString;
//     if (base64Data.split(",")[0].indexOf("base64") >= 0)
//       byteString = atob(base64Data.split(",")[1]);
//     else byteString = unescape(base64Data.split(",")[1]);
//     var mimeString = base64Data.split(",")[0].split(":")[1].split(";")[0];
//     var ia = new Uint8Array(byteString.length);
//     for (var i = 0; i < byteString.length; i++) {
//       ia[i] = byteString.charCodeAt(i);
//     }
//     return new Blob([ia], { type: mimeString });
//   };

//   // limit image type to JPG and PNG and size < 1 MB.
//   const uploadOnChange = (e) => {
//     let fileListTemp = [...e.fileList];
//     fileListTemp = fileListTemp.slice(-1);
//     setFileList(fileListTemp);

//     const isLt1M = e.file.size / 1024 / 1024 < 1;
//     const isJpgOrPng =
//       e.file.type === "image/jpeg" || e.file.type === "image/png";

//     if (!isJpgOrPng) {
//       setFileList([]);
//       setUploadStatus("format error");
//     } else if (!isLt1M) {
//       setUploadStatus("size error");
//     }
//     // upload base64 image
//     else if (e.file.status === "done") {
//       let url
//       let file = {'file': e.file.originFileObj}
//       // request(url, file);

//       // getR();

//       // getBase64(e.file.originFileObj, (logoFile) => {
//       //   // console.log(logoFile);
//       //   // var blob = dataURItoBlob(logoFile); // 上一步中的函数
//       //   var canvas = document.createElement("canvas");
//       //   var blob = dataURItoBlob(dataURL);
//       //   var dataURL = canvas.toDataURL(logoFile, 0.5);
//       //   var fd = new FormData(document.forms[0]);
//       //   fd.append("the_file", blob, "image.png");
//       //   Axios.post(upload_url, fd)
//       //     .then(alert("upload succeed"))
//       //     .then((req) => console.log(req))
//       //     .catch((error) => {
//       //       console.log(error);
//       //     });
//       // });
//       fileName = e.file.name;
//       // message.success(`${e.file.name} file uploaded successfully`);
//     } else if (e.file.status === "error") {
//       setUploadStatus("failed");
//       fileName = e.file.name;
//       // message.error(`${e.file.name} file upload failed.`);
//     }
//   };

//   return (
//     <Fragment>
//       <Upload
//         // customRequest={customRequest}
//         name="logoUrl"
//         onChange={uploadOnChange}
//         fileList={fileList}
//       >
//         <Button>
//           <Icon name="upload" /> Click to Upload
//         </Button>
//         {uploadStatus === "success" ? (
//           <Label basic color="green" pointing="left">
//             {`${fileName} file uploaded successfully`}
//           </Label>
//         ) : uploadStatus === "failed" ? (
//           <Label basic color="red" pointing="left">
//             {`${fileName} file upload failed.`}
//           </Label>
//         ) : uploadStatus === "format error" ? (
//           <Label basic color="red" pointing="left">
//             You can only upload JPG/PNG file!
//           </Label>
//         ) : uploadStatus === "size error" ? (
//           <Label basic color="red" pointing="left">
//             Image must smaller than 1MB!
//           </Label>
//         ) : (
//           ""
//         )}
//       </Upload>
//     </Fragment>
//   );
// };

export default UploadLogo;
