import React,{Component} from 'react';
import './App.css';
import HamsterCage from './components/HamsterCage';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      hamsters: []
    }
  }

  render(){
    return(
      <div>
        <HamsterCage 
          name="Chuckles"
          color="Brown"
          age={2}
          hasWheel={true}
        />
        <HamsterCage 
          name="George"
          color="Light Grey"
          age={4}
          hasWheel={false}
        />
        <HamsterCage 
          name="Tickles"
          color="Blue"
          age={5}
          hasWheel={true}
        />
      </div>
    );
  }
}

export default App;
