import React from "react";
import NoteContext from "./noteContext";
import { useState } from "react";

// import {Token} from "G:/inotebook/src/components/Login"


const NoteState = (props) => {

    
  const host = "https://inote-backend.herokuapp.com"
  const notesInitial = []
  // done by adp
  const token= localStorage.getItem("token");

  // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzOThiN2U1ODI0YTA1OGUxZTRkNzk2In0sImlhdCI6MTYzMTIwNjI5OX0.nSnZUBlRbwTpLRJntUUhRsNVKtcaQT-GrKHBuBCCm_M"

  const [notes, setNotes] = useState(notesInitial);

  //  fetch all notes
  const getNotes = async() => {
    
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
         'Content-Type': 'application/json',
         "auth-token": token
    },
        
      
    })
    // eslint-disable-next-line
    const json = await response.json()
    // console.log(json)
    setNotes(json)
  }
  
  //  add a note
  const addNote = async(title, description, tags) => {
    
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
         "auth-token": token
    },

      body: JSON.stringify({title, description, tags})
    })
    // eslint-disable-next-line
    const note = await response.json();
    setNotes(notes.concat(note));
    // console.log("adding a new note");
    
  };

  //  Delete a note
  const deleteNote = async (id) => {

    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
         'Content-Type': 'application/json',
         "auth-token": token
    },

     
    })
    // eslint-disable-next-line
    const json =  response.json();

    // console.log(json);
    const newNote = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNote);
  };

  //  Edit a note
  const editNote = async (id, title, description, tags) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
         'Content-Type': 'application/json',
         "auth-token": token
    },

      body: JSON.stringify({title, description, tags})
    })
    // eslint-disable-next-line
    const json = await response.json();
    // console.log(json);
    let newNotes = JSON.parse(JSON.stringify(notes))
    
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tags = tags;
        break;
      }
      
    }
    setNotes(newNotes)
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
