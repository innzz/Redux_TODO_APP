const initialState = {
    list:[]
}

const NoteReducer = (state=initialState,action)=>{
    switch (action.type) {
        case "ADD_NOTE":
            return{
                ...state,
                list:[
                    ...state.list,{
                        id:action.payload.id,
                        note:action.payload.note
                    }
                ]
            }
        case "DELETE_NOTE":
            const newList = state.list.filter((elem)=>elem.id !== action.noteid)
            return{
                ...state,
                list: newList
            }
        case "REMOVE_ALL":
            return{
                ...state,
                list: []
            }
    
        default:
            return state;
    }
}

export default NoteReducer;