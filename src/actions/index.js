export const addNote = (note)=>{
    return{
        type:"ADD_NOTE",
        payload: {
            id: new Date().getTime().toString(),
            note: note
        }
    }
}
export const deleteNote = (noteid)=>{
    return{
        type:"DELETE_NOTE",
        noteid
    }
}
export const removeALL = ()=>{
    return{
        type:"REMOVE_ALL"
    }
}