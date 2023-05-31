import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState, useEffect } from "react";

const FormularioColor = () => {
  // const tareasDelLocalStorage = JSON.parse(localStorage.getItem('listaTareas')) || [];
  const [color, setColor] = useState("");
  const [nombrecolor, setNombrecolor] = useState("");
  
  //ciclo de vida
  // useEffect(()=>{
  // localStorage.setItem('listaTareas', JSON.stringify(tareas));
  // }, [tareas])

  const handleSubmit = (e) => {
    // e.preventDefault();
    // setTareas([...tareas, tarea]);
    // //limpiar el input
    // setTarea('');
  };

  // const borrarTarea = (nombreTarea)=>{
  //   let copiaTareas = tareas.filter((itemTarea)=> itemTarea !== nombreTarea);
  //   setTareas(copiaTareas);
  // }

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
      {/* <ListaTareas tareas={tareas} borrarTarea={borrarTarea}></ListaTareas> */}
    </>
  );
};

export default FormularioColor;
