import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import axios from 'axios';


const CreateProject = () => {

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

        )
    }
;

export default CreateProject;