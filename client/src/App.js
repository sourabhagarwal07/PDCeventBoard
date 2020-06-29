import React, {useEffect, useState} from "react";
import Router from "./Router";
import "semantic-ui-css/semantic.min.css";
import axios from "axios";
import {Menu, Container, Button} from "semantic-ui-react";
import CreateProject from "./view/CreateProject";
import Header from "./view/Header/Header";

const App = () => {

    return (
        <div>
            <Header/>

            <Container text style={{marginTop: "7em"}}>
                <Router/>
            </Container>
        </div>
    );
};

export default App;
