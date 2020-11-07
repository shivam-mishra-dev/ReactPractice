
const wishReducer =(state=[],action)=>{
    console.log(action); 
    if(action.type === 'CHNAGE_WISH'){
        return[...state,'code']
    }
    return state;
}

export default wishReducer;