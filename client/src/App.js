 import React, { Component } from "react";
 import Router from "./Router";
// import "semantic-ui-css/semantic.min.css";
// import "./App.less";
// import { connect } from "react-redux";
// import { Link } from 'react-router-dom'


// //import { setCurrentUser } from "\actions\authActions";
// import { Menu, Container, Button } from "semantic-ui-react";

// const App = () => {
//   return (
  
//     <div>
      
//       {/* Header */}
//       <Menu fixed="top" inverted>
//         <Container>
//           <Menu.Item as="a" header>
//             Professional Development Club
//           </Menu.Item>
//           <Menu.Item as="a">Home</Menu.Item>
//           <Menu.Item position="right">
           
//             <Button as="a">
//               Log in
//             </Button>
            
            
//           </Menu.Item>
//         </Container>
//       </Menu>

//       <Container text style={{ marginTop: "7em" }}>
//       <Router />
//       </Container>
//     </div>
    
//   );
// };
//import React, { Component } from "react";
//import { Routers } from "./Router";

class App extends Component {
  render() {
    return <Router />;
  }
}
export default App;
