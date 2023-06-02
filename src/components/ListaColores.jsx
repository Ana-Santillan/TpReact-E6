import { ListGroup, Row } from "react-bootstrap";
import ItemColor from "./ItemColor";

const ListaColores = ({ colores, borrarColor }) => {


  return (
    <>
      <ListGroup className="text-center">
        {
          colores.map((color, indiceColor) => {
            return (
              <ItemColor color={color} key={indiceColor} borrarColor={borrarColor}></ItemColor>
            )
          })
        }
      </ListGroup>
    </>

  );
};

export default ListaColores;
