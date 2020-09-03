import React,{Component} from 'react';
import './App.css';
import HamsterCage from './components/HamsterCage';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      hamsters: [
        {
          name: "Chuckles",
          color:"Brown",
          age: 2,
          hasWheel:true
        },
        {
          name: "George",
          color:"Light Grey",
          age: 4,
          hasWheel:false
        },
        {
          name: "Tickles",
          color:"Blue",
          age: 5,
          hasWheel:true
        }
      ]
    }
  }

  handleWheel = (index) => {
    console.log(index);
    let newArr  = [...this.state.hamsters];
    newArr[index] = {...newArr[index],hasWheel: !newArr[index].hasWheel}
    console.log(newArr);
    this.setState({hamsters:newArr});
  }

  render(){
    return(
      <div>
        {
          this.state.hamsters.map((ham,i) => {
            return <HamsterCage 
                        name={ham.name}
                        color={ham.color}
                        age={ham.age}
                        hasWheel={ham.hasWheel}
                        key={i}
                        idx={i}
                        handleWheel={this.handleWheel}
                    />
          })
        }
      </div>
    );
  }
}

export default App;
