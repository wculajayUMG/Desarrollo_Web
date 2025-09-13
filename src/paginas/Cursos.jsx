import { cursos } from "../data/Cursos";
import { Accordion, ListGroup, Table } from "react-bootstrap";

export default function Cursos() {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Cursos Detallados</h2>
      {cursos.map((curso, idx) => (
        <div key={curso.id} className="mb-5">
          <h3>{curso.nombre}</h3>
          <p>{curso.descripcion_2}</p>
          <br />
          <h3>{curso.nombre_2}</h3>

          {/* Lista de temas */}
          <ListGroup className="mb-3">
            {curso.temas.map((tema, i) => (
              <ListGroup.Item key={i}>{tema}</ListGroup.Item>
            ))}
          </ListGroup>
          <br />
        <h3>{curso.nombre_3}</h3>

          {/* Recursos en tabla */}
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Actividad</th>
                <th>Punteo</th>
              </tr>
            </thead>
            <tbody>
              {curso.recursos.map((r, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{r.tema}</td>
                  <td>{r.punteo}</td>
                </tr>
              ))}
            </tbody>
          </Table>

          {/* Acordeón para detalles extra */}
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Detalles adicionales</Accordion.Header>
              <Accordion.Body>
                Este curso incluye prácticas, exámenes y proyectos que ayudan a fortalecer los conocimientos.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      ))}
    </div>
  );
}
