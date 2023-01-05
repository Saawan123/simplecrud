import React, { useState, useEffect} from "react";
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from "./Employees";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";

const Edit = () =>{
    const [name, setName] = useState("");
    const [age, setAge] = useState('');
    const [id, setId] = useState('');

    let history = useNavigate();

    var index = Employees.map(function(e){
        return e.id
    }).indexOf(id)

    const handleSubmit = (e) => {
        e.preventDefault();
        let a = Employees[index];
        a.Name = name;
        a.Age = age;

        history('/');
    }

    useEffect(()=>{
setName(localStorage.getItem('Name'))
setAge(localStorage.getItem('Age'))
setId(localStorage.getItem('Id'))
    },[])

    return(
        <div>
                <Form className="d-grid gap-2" style={{ margin: '15rem' }}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Control type="text" value={name} placeholder="Enter Your Name" required onChange={(e) => setName(e.target.value)}></Form.Control>
                        <Form.Control type="text" value={age} placeholder="Enter Your Age" required onChange={(e) => setAge(e.target.value)}></Form.Control>
                </Form.Group>
                <Button onClick={(e) => handleSubmit(e)} type="submit">Update</Button>
            </Form>
        </div>
    )

}

export default Edit;
