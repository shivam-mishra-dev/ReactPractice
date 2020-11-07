import React from 'react';
import Card from "../layout/Card";
import { connect } from "react-redux";
import { anotherName } from "../actions/myaction";
import { wishChangeaction } from "../actions/wishChangeaction";
import ImageData from "../ImageData";
class Service extends React.Component {
  constructor(props) {
    super(props);
  }
  wish = this.props.wish.map(item => {
    return <h2 key={Math.random()}>{item}</h2>
  })
  render() {
    return (
      <div className="container py-4">
        <h1 className="text-center mb-5">Service Page </h1>
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              {
                ImageData.map((val, index) => {
                  console.log(val.imgsrc);
                  return <Card
                    key={index}
                    imgsrc={val.imgsrc}
                    title={val.title}

                  />
                })
              }
            </div>
          </div>
        </div>
      </div>


    );
  }
}
const mapStateToProps = (state) => {
  return {
    myname: state.name,
    wish: state.wish
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    // changeName:(name)=>{dispatch({type:'CHNAGE_NAME',payload:name})}
    // changeName:(name)=>{dispatch(anotherName(name))}
    changeName: () => { dispatch(anotherName()) },
    // changeWish:(wish)=>{dispatch((wishChangeaction(wish)))}
    changeWish: () => { dispatch((wishChangeaction())) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Service);