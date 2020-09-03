import React,{Component} from 'react';

class HamsterCage extends Component{
    constructor(props){
        super(props);
        this.state = {
            hasWheel : props.hasWheel
        }

    }

    handleWheel = () => {
        this.setState(prevState =>{
            return {hasWheel:!prevState.hasWheel}
        })
    }

    render(){
        const {name,color, age} = this.props;
        return (
            <div>
                <h2>{name}</h2>
                <p>Fur Color: {color}</p>
                <p>Age: {age}</p>
                <p>Has Wheel: {this.state.hasWheel ? "Yes" : "No"}</p>
                <button onClick={this.handleWheel} >Change Wheel</button>
            </div>
        )
    }
}   

export default HamsterCage