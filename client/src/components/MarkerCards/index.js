import React from "react";
import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { deleteMarker } from "../../api"
import { useParams } from "react-router-dom"

import './style.css'

function MarkerCards() {

  const { id } = useParams()
  const mySocket = useSelector((state) => state.user.socket);

  function handleClick(d){
    deleteMarker(d.id)
    mySocket.emit("delete marker", {room: id, marker: d.id});
  };

  const markers = useSelector((state) => state.markers);
  let data = []
  if (markers.length > 0) {
    data = markers;
  }
  const list = data.map((d, i) => {
    return (
        <Card role="listitem" id="marker-list">
          <Card.Body style={{padding: '1.5rem .1rem'}}>
            <div style={{padding: '0 1rem'}}>
            <Card.Subtitle>{d.title}</Card.Subtitle>
            <Card.Text>{d.desc}</Card.Text>
            </div>
            <Button variant="danger" size="sm" style={{height: 'min-content', position: 'absolute', top: '0', right: '0'}} onClick={() => handleClick(d)}>
              x
            </Button>
          </Card.Body>
        </Card>
    );
  });
  return <div className="card-container-wrapper-h">{list}</div>
}

export default MarkerCards;
