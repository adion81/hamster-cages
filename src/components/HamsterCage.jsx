import React,{Component} from 'react';

class HamsterCage extends Component{
    

    render(){
        const {name,color, age, hasWheel,handleWheel,idx} = this.props;
        return (
            <div className="card col-3 text-center">
                <h2>{name}</h2>
                <p>Fur Color: {color}</p>
                <p>Age: {age}</p>
                <p>Has Wheel: {hasWheel ? "Yes" : "No"}</p>
                <button className="btn btn-warning" onClick={() => handleWheel(idx)} >Change Wheel</button>
            </div>
        )
    }
}   

export default HamsterCage