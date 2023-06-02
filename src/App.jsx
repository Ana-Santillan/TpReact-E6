import { Container } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FormularioColor from "./components/FormularioColor";

function App() {
  return (
    <>
      <Container className="my-5 main">
        <h1 className="display-4 text-center">Administrar Colores</h1>
        <hr />
        <FormularioColor></FormularioColor>
      </Container>
      <footer className="text-center bg-dark text-light py-4">
        <p>&copy; Todos los derechos reservados</p>
      </footer>
    </>
  );
}

export default App;
