import React from "react";
import Router from "./Router";
import "semantic-ui-css/semantic.min.css";
import "./App.less";
import axios from "axios";
import {Menu, Container, Button} from "semantic-ui-react";

const App = () => {
    const handleLogin = () => {
        axios({
            url: "http://localhost:8080/auth/login",
            method: "GET",
        })
            .then()
            .catch(e => {
                console.log(e);
            })
    };

    return (
        <div>
            {/* Header */}
            <Menu fixed="top" inverted>
                <Container>
                    <Menu.Item as="a" header>
                        Professional Development Club
                    </Menu.Item>
                    <Menu.Item as="a">Home</Menu.Item>
                    <Menu.Item position="right">
                        <Button onClick={handleLogin} as="a" inverted>
                            Log in
                        </Button>
                        {/* <Button as="a" inverted style={{ marginLeft: "0.5em" }}>
              Sign Up
            </Button> */}
                    </Menu.Item>
                </Container>
            </Menu>

            <Container text style={{marginTop: "7em"}}>
                <Router/>
            </Container>
        </div>
    );
};

export default App;
