import React from 'react';
import { useSelector } from 'react-redux';
import {deleteNote,removeALL} from "../actions/index"
import {useDispatch} from "react-redux";

function NoteItems() {
    const list = useSelector((state)=>state.noteReducer.list);
    const dispatch = useDispatch();
  return (
    <>
    <div className="container my-5">
    {
        list.map((elem)=>{
            return(
                <div className="row my-3 p-2 align-items-center" key={elem.id} style={{border:"2px solid red",borderRadius:"5px"}}>
                <div className="col-8">
                  {elem.note}
                </div>
                <div className="col">
                <span className="btn btn-danger" onClick={()=>dispatch(deleteNote(elem.id))}>delete</span>
                </div>
              </div>
            )
        })
    }
            <div>
            <span className="btn btn-danger" onClick={()=>dispatch(removeALL())}>Remove All</span>
            </div>
</div>
    </>
  )
}

export default NoteItems
