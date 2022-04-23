import React, { useState } from 'react'
import {useDispatch} from "react-redux";
import {addNote} from "../actions/index"

function AddNote() {
    const [text,setText] = useState("");
    const dispatch = useDispatch();
  return (
    <>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder='add a note' value={text} onChange={(e)=>{setText(e.target.value)}} aria-label="AddNote"/>
        <span className="btn btn-secondary" onClick={()=> dispatch(addNote(text),setText(''))}>ADD</span>
    </div>
    </>
  )
}

export default AddNote
