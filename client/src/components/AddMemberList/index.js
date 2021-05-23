import React from "react";
import ListGroup from  "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import {  addHolidayMember } from "../../api"
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function AddMemberList( { items } ){
    const { id } = useParams()
    const mySocket = useSelector(state => state.user.socket)

  async function handleHandleClick(data){
    const member = await addHolidayMember({id: data.id, user_id: id})
    if (member.data == 'success')
      {mySocket.emit("add member", {room: id, username: data.username})}
  }
  const list = items.map((d, i) => {
    return (
      <ListGroup.Item role="listitem" style={{display: "flex", justifyContent: 'space-between'}} key={i}>
        {d.username}<Button size="sm" variant="success" onClick={() => handleHandleClick(d)}>+</Button>
      </ListGroup.Item>
    );
  });
  return list;
  
}

export default AddMemberList