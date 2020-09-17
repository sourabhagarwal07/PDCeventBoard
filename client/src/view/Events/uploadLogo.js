// import React, { useState } from "react";
// import {
//   Button,
//   Form,
//   Segment,
//   Dropdown,
//   TextArea,
//   Checkbox,
//   Grid,
// } from "semantic-ui-react";
// import axios from "axios";
// import { config } from "../../common/config/config";
// import request from 'request'
// import urllib from 'urllib'

// let OAUTH_TOKEN = '2SWITQPH72SPNCSRK7OW'
// let MEDIA_UPLOAD_URL = 'https://www.eventbriteapi.com/v3/media/upload/'

// let 



// const UploadLogo = () => {

//   const url = "https://www.eventbriteapi.com/v3/media/upload/?type=image-event-logo&token=2SWITQPH72SPNCSRK7OW";

//   const send = () => {
//     console.log("click")
//     axios.get(url)
//       .then((res) => {
//         if(res.status == 200){
//           console.log("succeed");
//           console.log(res.data);  
//         } else {
//           console.log("not succeed")
//         }
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   }

//   const upload_file = (filename) => {
//     instructions_url = MEDIA_UPLOAD_URL + '?' + urllib.urlencode({
//         'type': 'image-event-logo',
//         'token': OAUTH_TOKEN
//     })
//   }
//     // data = requests.get(instructions_url).json()
//     // post_args = data['upload_data']
//     // response = requests.post(data['upload_url'],
//     //     data = post_args,
//     //     files = {
//     //         data['file_parameter_name']: open(filename)
//     //     }
//     // )
//     //   return response, data['upload_token']
//     // }

// response, upload_token = upload_file('~/Pictures/test-image.jpg')

//   return (
//     <div>
//       <Button onClick={send} type="button">retrive upload url</Button>
//       <Button onClick={post} type="button">Upload pictures to upload url</Button>
//     </div>
//   )
// }

// export default UploadLogo;