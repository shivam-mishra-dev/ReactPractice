// export const anotherName = (name) =>{
//   return {
//     type:'CHNAGE_NAME',
//     payload:name
//   }
// }
export const anotherName = () =>{
    return async (dispatch) => {
        const data= await fetch('https://jsonplaceholder.typicode.com/users')
       const res2= await  data.json()
        dispatch({type:'CHNAGE_NAME',payload:res2[0].name})
     
    }
  }