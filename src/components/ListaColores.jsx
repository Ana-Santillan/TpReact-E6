import { ListGroup } from "react-bootstrap";
import ItemColor from "./ItemColor";
import { useEffect } from "react";

const ListaColores = ({ colores, borrarColor }) => {


  return (
    <>


      <ListGroup>
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
