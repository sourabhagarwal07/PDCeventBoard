import {Button, Container, Menu} from "semantic-ui-react";
import Router from "../../Router";
import React, {useEffect, useState} from "react";
import useReactRouter from "use-react-router";

const Header = () => {
    const handleLogin = () => {
        window.open("http://localhost:8080/auth/login", "_self");
    };

    const handleLogout = () => {
        window.open("http://localhost:8080/auth/logout", "_self")
    };

    const {history, location, match} = useReactRouter();
    const [userInfo, setUserInfo] = useState({
        user: {},
        error: null,
        authenticated: false
    });

    const handleProjectList = () => {
        if (userInfo.authenticated) {
            history.push('/createproject');
        } else {
            history.push('/test');

        }
    };

    useEffect(() => {
        console.log("useEffect!");
        fetch("http://localhost:8080/auth/login/success", {
            method: "GET",
            // credentials: "include",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": true
            }
        })
            .then(response => {
                console.log("res! " + response);
                if (response.status === 200) return response.json();
                throw new Error("failed to authenticate user");
            })
            .then(responseJson => {
                console.log(responseJson);
                setUserInfo({
                    ...userInfo,
                    authenticated: true,
                    user: responseJson.user
                });
            })
            .catch(error => {
                setUserInfo({
                    ...userInfo,
                    authenticated: false,
                    error: "Failed to authenticate user"
                });
            });
        // axios.get('http://localhost:8080/auth/login/success'
        // )
        //     .then(res => {
        //         console.log("res!");
        //
        //         console.log(userInfo);
        //         // if (res.status === 200) return res.json();
        //         // throw new Error("failed to authenticate user");
        //     })
        //     .then(json => {
        //         console.log(json);
        //         setUserInfo({
        //             ...userInfo,
        //             'user': json.user,
        //             'authenticated': true,
        //         });
        //         console.log(userInfo);
        //     })
        //     .catch(e => {
        //         setUserInfo({
        //             ...userInfo,
        //             'authenticated': false,
        //             'error': "Failed"
        //         });
        //         console.log(userInfo);
        //     })
    }, []);


    return (
        <div>
            {/* Header */}
            <Menu fixed="top" inverted>
                <Container>
                    <Menu.Item as="a" header>
                        Professional Development Club
                    </Menu.Item>
                    <Menu.Item as="a">Home</Menu.Item>
                    <Menu.Item as="a" onClick={handleProjectList}>Project</Menu.Item>
                    <Menu.Item position="right">
                        <Button onClick={handleLogin} as="a" inverted>
                            Log in
                        </Button>
                        <Button onClick={handleLogout} as="a" inverted>
                            Log out
                        </Button>
                    </Menu.Item>
                </Container>
            </Menu>
        </div>
    );
};

export default Header;