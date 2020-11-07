import React from 'react';
import { connect } from "react-redux";
import { anotherName } from "../actions/myaction";
import { wishChangeaction } from "../actions/wishChangeaction";

const Home = (props) => {
  console.log(props);
  const wish= props.wish.map(item=>{
    return <h2 key={Math.random()}>{item}</h2>
  })
  return (
    
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        {wish}
         <p>my name is {props.myname} and my wish is {props.wish}</p>
          <button className="btn btn-primary" onClick={()=>{props.changeName()}}>change it</button>
          <button className="btn btn-primary" onClick={()=>{props.changeWish()}}>add wish</button>
          
   
      </div>
    </div>
  );
};
const mapStateToProps = (state) =>{
  return{
    myname:state.name,
    wish:state.wish
  };
}
const mapDispatchToProps = (dispatch)=>{
  return{
    // changeName:(name)=>{dispatch({type:'CHNAGE_NAME',payload:name})}
    // changeName:(name)=>{dispatch(anotherName(name))}
    changeName:()=>{dispatch(anotherName())},
    // changeWish:(wish)=>{dispatch((wishChangeaction(wish)))}
    changeWish:()=>{dispatch((wishChangeaction()))}
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);