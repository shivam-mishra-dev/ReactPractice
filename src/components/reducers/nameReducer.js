// const istate={
//     name:"ramesh",
//     wishes:['eat','code']
// }

// const nameReducer =(state=istate,action)=>{  
    const nameReducer =(state='',action)=>{  // for combine reducer
    console.log(action); 
    if(action.type === 'CHNAGE_NAME'){
        // return{
        //  ...state,
        //     name:action.payload
        // } 
        return action.payload
    }
    return state;
}

export default nameReducer;