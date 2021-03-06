// import Rreact, elements from React-Bootstrap, SignUp.css
import React, { useState, useRef } from 'react';
import { Button, ButtonGroup, Container, Jumbotron } from "react-bootstrap";
import { submitToAgatha } from "../utils/submitApiImgP"
import { newUserApi } from '../utils/newUserfaceApi';
import axios from "axios";
import "./Signupcamface.css";
import { useGlobalContextAuthUser } from '../utils/GlobalContextAuthUser';


// create functional component to hold cam2 page data
const SignUp2 = () => {
    const [playing, setPlaying] = useState(false);
    const [disableValue, setDisableValue] = useState(true);
    const [userId] = useGlobalContextAuthUser();
    console.log("Cam2 user: ", userId);
    const vest = useRef(null);
    const videoRef = useRef(null);

    // set height and width dimentions
    const HEIGHT = 300;
    const WIDTH = 300;

    // create function for video start
    const startVideo = () => {
        setPlaying(true);
        navigator.getUserMedia(
            {
                video: true
            },
            (stream) => {
                let video = document.getElementsByClassName('app__videoFeed')[0];
                if (video) {
                    video.srcObject = stream;
                }
            },
            (err) => console.error(err)
        );
    };
    const stopVideo = () => {
        setPlaying(false);
        let video = document.getElementsByClassName('app__videoFeed')[0];
        video.srcObject.getTracks()[0].stop();
    };

    const snap = () => {
        if (playing === false) {
            console.log("no camera found")
        }
        else {
            console.log("camera found", vest)
            var context = vest.current.getContext('2d')
            context.drawImage(videoRef.current, 0, 0, HEIGHT, WIDTH);

        }
        console.log(context, 'snap')
        return context
    }

    window.onload = () => {
        const canvas = document.getElementById('canvas');

        const saveButton = document.getElementById('save');
        saveButton.addEventListener('click', () => save(canvas));
    };

    // save function 
    function save(vest) {
        // props needs the GID and the PID
        const data = vest.toDataURL('image/png');
        console.log(data, 'click')
        return data
    }

    return (
        <>
            <Container id="main-container">
                <Jumbotron id="main-jumbotron">
                    <h1 id="pi">Facial Detection</h1>
                    <hr />
                    <p id='name'>This is the final step in creating a profile, please take off any hats and look directly into the camera.  you see that your glasses are showing any glare plaese remove them, thank you.</p>
                    <video
                        id="video"
                        ref={videoRef}
                        height={HEIGHT}
                        muted
                        autoPlay
                        className="app__videoFeed">
                    </video>
                    <div className="app">
                        <div className="app__input">
                            <br />
                            <ButtonGroup size="lg" className="mr-3">
                                {playing ? (
                                    <button className="btn btn-dark" onClick={stopVideo}>
                                        Stop Camera</button>
                                ) : (
                                        <button className="btn btn-dark" onClick={startVideo}>
                                            Start Camera</button>
                                    )}
                            </ButtonGroup>

                            <ButtonGroup size="lg" className="mr-3">
                                <button id="capture " className="btn btn-dark" onClick={() => {
                                    console.log(snap(), "RENDER SNAP")
                                    if (playing === true)
                                        snap().canvas.toBlob(data => {
                                            console.log("picData: ", data);
                                            // need to find away to get new user to wait on the FID befor subing a new user.
                                            // if anything let look inside of STA
                                            newUserApi()
                                                .then(PIDR => {
                                                    submitToAgatha("5595", PIDR.personId, data)
                                                    console.log("submitToAgatha data: ", data);
                                                    if (PIDR.personId === null) {
                                                        console.error('no picture taken')
                                                        alert(
                                                            "Your face was not detected, please turn the camera back on and try again."
                                                        )
                                                    } else {
                                                        const currentPersonId = PIDR.personId;
                                                        const currentUserId = userId.id;
                                                        console.log("SubmitToAgatha UserId: ", currentUserId, "PersonId: ", currentPersonId);
                                                        // console.log("PersonId: ", currentPersonId.length, "this gives the length of the string [36] sooo that can be used ");
                                                        axios
                                                            .post("/api/storePersonId",
                                                                {
                                                                    id: currentUserId,
                                                                    personId: currentPersonId
                                                                })
                                                            .then(res => {
                                                                console.log("Person id added to db", currentPersonId);
                                                                setDisableValue(false);
                                                                return true
                                                            })
                                                            .catch(err => {
                                                                console.log(err)
                                                            })
                                                    }
                                                })
                                            stopVideo()
                                        });
                                }}>Take Picture</button>

                            </ButtonGroup>
                            <br />
                            <h1>Used Photo</h1>
                            <canvas ref={vest} id="canvas" height={HEIGHT}></canvas>
                        </div>
                    </div>
                    <br />
                    <br />
                    <Button variant="dark" size="lg" block href="/profile" disabled={disableValue}
                        id="save">
                        Complete Sign Up
                    </Button>
                </Jumbotron>
            </Container>
        </>
    );
};

// export component from Signupcamface.jsx
export default SignUp2;
