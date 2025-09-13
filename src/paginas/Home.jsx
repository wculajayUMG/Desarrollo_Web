import { cursos } from "../data/Cursos";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container mt-4">
      <h1 className="text-center">Cursos de Ingenieria en Sistemas</h1>
      <p className="text-center">
        El objetivo principal de esta plataforma educativa es brindar a los usuarios acceso a cinco cursos fundamentales que promueven el aprendizaje autónomo y práctico en distintas áreas del conocimiento. Cada curso está diseñado con contenidos claros, recursos accesibles y una estructura didáctica que permite al estudiante avanzar a su propio ritmo, comprendiendo los temas esenciales y desarrollando habilidades clave. Esta página busca facilitar el acceso a la información, fomentar el autoaprendizaje y contribuir al crecimiento académico y profesional de cada visitante.
      </p>

      {/* Carrusel */}
      <div id="carouselExample" className="carousel slide my-4">
        <div className="carousel-inner">
          {cursos.map((curso, idx) => (
            <div className={`carousel-item ${idx === 0 ? "active" : ""}`} key={curso.id}>
              <img src={`https://picsum.photos/800/300?random=${idx}`} className="d-block w-100" alt={curso.nombre} />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded">
                <h5>{curso.nombre}</h5>
                <p>{curso.descripcion}</p> 
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* Cards */}
      <div className="row">
        {cursos.map(curso => (
          <div className="col-md-4 mb-3" key={curso.id}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{curso.nombre}</h5>
                {<p className="card-text">{curso.descripcion}</p> }
               <Link to={`/cursos/${curso.id}`} className="btn btn-primary">
                      Ver más
               </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
