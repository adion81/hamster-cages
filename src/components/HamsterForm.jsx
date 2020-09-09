import React,{useState} from 'react';


const HamsterForm = props =>{

    const {handleAddHamster} = props;


    const [form,setForm] = useState({
        name:"",
        color:"",
        age:0,
        hasWheel:false
    })

    const formHandler = (e) => {
        console.log(e.target);
        if(e.target.type === "checkbox"){
            setForm({
                ...form,
                hasWheel:e.target.checked
            })
        }
        else{
            setForm({
                ...form,
                [e.target.name]:e.target.value
            })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddHamster(form);
    }


    return (
        <form className="col-5 mx-auto" onSubmit={handleSubmit}>
            <h2 className="text-center bg-dark text-warning">Add A Hamster:</h2>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input 
                    type="text" 
                    className="form-control"
                    name="name"
                    value={form.name}
                    onChange={formHandler}
                />
            </div>
            <div className="form-group">
                <label htmlFor="color">Color:</label>
                <input 
                    type="text" 
                    className="form-control"
                    name="color"
                    value={form.color}
                    onChange={formHandler}
                />
            </div>
            <div className="form-group">
                <label htmlFor="age">Age:</label>
                <input 
                    type="number" 
                    className="form-control"
                    name="age"
                    value={form.age}
                    onChange={formHandler}
                />
            </div>
            <div className="form-group">
                <label htmlFor="hasWheel">Has Wheel:</label>
                <input 
                    type="checkbox" 
                    className="form-control"
                    name="hasWheel"
                    checked={form.hasWheel}
                    onChange={formHandler}
                />
            </div>
            <input type="submit" className="btn btn-warning btn-outline-dark mx-auto" value="Add Hamster"/>
        </form>
    );
}

export default HamsterForm;