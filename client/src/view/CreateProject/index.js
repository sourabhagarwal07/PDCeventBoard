import React, {useState} from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from "@material-ui/core/CssBaseline";
import makeStyles from "@material-ui/core/styles/makeStyles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {useForm} from "react-hook-form";
import axios from 'axios';


const CreateProject = () => {

        const useStyles = makeStyles((theme) => ({
            paper: {
                marginTop: theme.spacing(8),
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            },
            avatar: {
                margin: theme.spacing(1),
                backgroundColor: theme.palette.secondary.main,
            },
            form: {
                width: '100%', // Fix IE 11 issue.
                marginTop: theme.spacing(1),
            },
            submit: {
                margin: theme.spacing(3, 0, 2),
            },
        }));

        const classes = useStyles();

        const {register, handleSubmit} = useForm();

        const onSubmit = (data) => {
            console.log("submitting!");
            axios({
                url: 'http://localhost:8080/api/save',
                method: 'POST',
                data: data
            })
                .then(() => {
                    console.log('data has  been send to the server');
                })
                .catch((error) => {
                    console.log(error);
                    console.log('data has been not sent the server')
                })
        };


        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div className={classes.paper}>
                    <form className={classes.form} onSubmit={handleSubmit(onSubmit)} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Name"
                            name="name"
                            autoFocus
                            inputRef={register}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            inputRef={register}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="project"
                            label="Project"
                            name="project"
                            autoFocus
                            inputRef={register}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Submit
                        </Button>
                    </form>
                </div>

            </Container>

        )
    }
;

export default CreateProject;