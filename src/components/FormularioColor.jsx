import { Form, Button } from "react-bootstrap";
import ListaColores from "./ListaColores";
import { useState, useEffect } from "react";

const FormularioColor = () => {
  // const tareasDelLocalStorage = JSON.parse(localStorage.getItem('listaTareas')) || [];
  const [color, setColor] = useState("");
  const [nombrecolor, setNombrecolor] = useState("");
  const [colores, setColores] = useState([]);
  
  //ciclo de vida
    useEffect(()=>{
      // localStorage.setItem('listaTareas', JSON.stringify(tareas));
      console.log(colores);
    }, [colores])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(typeof color);
    let ObjetoColor = {
      color: color,
      nombrecolor: nombrecolor
    }
    setColores([...colores, ObjetoColor]);
    //limpiar el input
    setColor('');
    setNombrecolor('');
  };

  const borrarColor = (nombreColor)=>{
    let copiaColores = colores.filter((color)=> color.nombrecolor !== nombreColor);
    setColores(copiaColores)
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="color">
          <Form.Control
            type="text"
            placeholder="ingrese color de ejemplo"
            onChange={(e) => setNombrecolor(e.target.value)}
            value={nombrecolor}
          />
          <Form.Control
            type="color"
            onChange={(e) => setColor(e.target.value)}
            value={color}
          />
          <Button variant="primary" type="submit">
            Agregar
          </Button>
        </Form.Group>
      </Form>
      <ListaColores colores={colores} borrarColor={borrarColor}></ListaColores>
    </>
  );
};

export default FormularioColor;
