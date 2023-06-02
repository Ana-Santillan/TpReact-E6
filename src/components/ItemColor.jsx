import { useEffect } from "react";
import { Button, ListGroup, Card } from "react-bootstrap";

const ItemColor = ({color, borrarColor}) => {
  useEffect(()=> {
    console.log(color);
  },[])
  return <ListGroup.Item className="d-flex justify-content-between">
    <Card style={{ width: '100%' }} className="text-center">
      <Card.Body>
        <Card.Title>{color.nombrecolor}</Card.Title>
        <div style={{backgroundColor: color.color, height: '50px', width: '50px'}} className="my-4 mx-auto"></div>
        <Button variant="danger" onClick={()=> borrarColor(color.nombrecolor)} >Borrar</Button>
      </Card.Body>
    </Card>
  </ListGroup.Item>;
};

export default ItemColor;
