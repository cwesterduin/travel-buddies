import React from "react";
import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { deleteMarker } from "../../api"
import { useParams } from "react-router-dom"
function MarkerCards() {

  const { id } = useParams()
  const mySocket = useSelector((state) => state.user.socket);

  const handleClick = (d) => {
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
      <div role="markercards">
        <Card>
          <Card.Body style={{display: 'flex', justifyContent: 'center'}}>
            <div style={{padding: '0 1rem'}}>
            <Card.Subtitle className="mb-2 text-muted">{d.title}</Card.Subtitle>
            <Card.Text>{d.desc}</Card.Text>
            </div>
            <Button variant="danger" size="sm" style={{height: 'min-content'}} onClick={() => handleClick(d)}>
              x
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  });
  return list;
}

export default MarkerCards;
