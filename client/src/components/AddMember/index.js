import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import ListGroup from  "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import { fetchUsers } from "../../api"
import { AddMemberList } from '..'
import './style.css'

export default function AddMember() {
  const [userquery, setUserquery] = useState("")
  const [userdata, setUserdata] = useState([])


  function handleInput(e) {
    fetchLocation(e.target.value)
  }

  async function fetchLocation(query) {
    if (query.length < 1) {setUserdata([])}
    else {
        const data = await fetchUsers(query)
        console.log(data)
        if (data) {setUserdata(data)}  
    }
  }

  return (
    <Dropdown style={{zIndex: '1001'}}>
        <Dropdown.Toggle role="button" id="dropdown-basic-search">Add someone +</Dropdown.Toggle>
        <Dropdown.Menu>
        <Form onSubmit={(e) => {e.preventDefault()}}>
        <Form.Group controlId="formBasicSearch">
          <Form.Control
            required
            autoComplete={"off"}
            type="search"
            placeholder="Enter username"
            onChange={handleInput}
          />
        </Form.Group>
        </Form>
        <ListGroup variant="flush">
          <AddMemberList  items={userdata} />
        </ListGroup>


      
          </Dropdown.Menu>    
        </Dropdown>
  );
}
