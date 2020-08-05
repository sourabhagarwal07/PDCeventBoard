import React, { Fragment } from "react";

import { config } from "../../common/config/config";
import { Button } from 'semantic-ui-react'
// import {APIkey, RedirctURI} from '../../../../shared/config/Keys';

const Events =(props)=>{
    // let path = config();
    const redirect_uri = 'http://localhost:3000/#/events';
    const APIkey = 'X2PP7MQEQ2M5NUYPRC';
    const url = `https://www.eventbrite.com/oauth/authorize?response_type=token&client_id=${APIkey}&redirect_uri=${redirect_uri}`

    const handleClick = () => {
        window.open(url , "_self")
        console.log(url);
      };
    return(
      <div>
        <h1>Website is under development!</h1>
        <Button onClick={handleClick}>connect with EventBrite</Button>
      </div>
    )
};

export default Events;

// import React, { Fragment } from "react";
// const Events =()=>{
//     return(
      
//     <h1>Website is under development!</h1>
    
//     )
// };

// export default Events;