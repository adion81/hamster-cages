import React,{useState} from 'react';
import './App.css';
import HamsterCage from './components/HamsterCage';
import 'bootstrap/dist/css/bootstrap.min.css';
import HamsterForm from "./components/HamsterForm";

const App = props  => {
  const [hamsters,setHamsters] = useState([
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
      hasWheel:false
    }
  ])

  const handleWheel = (index) => {
    let newArr  = [...hamsters];
    newArr.forEach((ham) => {
      ham.hasWheel = false
    })
    console.log(index);
    newArr[index] = {...newArr[index],hasWheel: true}
    console.log(newArr);
    setHamsters(newArr);
  }

  const handleAddHamster = (hamster) => {
    setHamsters(banana => [...banana,hamster]);
  }

  return(
    <div>
      <HamsterForm 
        handleAddHamster={handleAddHamster}
      />
      {
        hamsters.map((ham,i) => {
          return <HamsterCage 
                      name={ham.name}
                      color={ham.color}
                      age={ham.age}
                      hasWheel={ham.hasWheel}
                      key={i}
                      idx={i}
                      handleWheel={handleWheel}
                  /> 
        })
      }
      {
        hamsters.map((ham,i) => {
          return ham.hasWheel ? <p key={i}>{ham.name}</p> : null
        })
      }
    </div>
  );
}

export default App;
