import React, { useState } from "react";
import axios from "axios";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { apiUrl } from '../../api'

function DropdownList( { items, handleClick } ){
  function handleHandleClick(data){  
    handleClick([data.latitude, data.longitude], data.label)
  }
  const list = items.map((d, i) => {
    return (
      <Dropdown.Item onClick={() => handleHandleClick(d)} key={i} title="dropdown search">
        {d.label}
      </Dropdown.Item>
    );
  });
  return list;
  
}


export default function MapSearch( { handleClick }) {
  const [location, setLocation] = useState();
  const [locationData, setLocationData] = useState([])


  function handleInput(e) {
    // console.log(e.target.value);
    setLocation(e.target.value);
  }

  async function fetchLocation(e) {
    e.preventDefault();
    const url = `${apiUrl}/maps/search/${location}`;
    const data = await axios.get(url);
    setLocationData(data.data.data);   
  }

  return (
    <>
        <DropdownButton style={{zIndex: '1001'}} id="dropdown-basic-button" title="Search destination">
        <Form onSubmit={fetchLocation}>
        <Form.Group controlId="formBasicUsername">
          <Form.Control
            required
            type="search"
            placeholder="Enter location"
            onChange={handleInput}
          />
        </Form.Group>
        <Button style={{display: 'inline'}} variant="primary" type="submit" value="search" >
          Search
        </Button>
        </Form>
          <DropdownList handleClick={handleClick} items={locationData} />


      

        </DropdownButton>
    </>
  );
}
