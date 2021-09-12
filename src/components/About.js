import React from 'react'
// { useContext, useEffect }
// import noteContext from "../context/notes/noteContext";
import about from './about.png'
import "../App.css";
const About = () => {
    
    return (
        <>
        <h3 className="ha">This is a Basic To-Do Web-App made from </h3>
        <h3 className="h3a">React.js</h3>
        <h4 className="h4a">You can store your To-Do List on our Web-App</h4>
        <img className="image" src={about} alt=""/>
        <h3 className="title">Made by <b className="b">Aditya</b> Dutt <b className="c">Pandey</b></h3>
        </>
    )
}

export default About
