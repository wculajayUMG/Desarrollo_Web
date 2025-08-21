// Alternar tablas de itinerarios
function mostrarTabla(tabla) {
    document.getElementById('tabla-playa').style.display = (tabla === 'playa') ? 'block' : 'none';
    document.getElementById('tabla-montana').style.display = (tabla === 'montana') ? 'block' : 'none';
    document.getElementById('tabla-cultural').style.display = (tabla === 'cultural') ? 'block' : 'none';
}

// Comentarios y nombres
const comentarios = [
    "¡Un lugar increíble para relajarse!",
    "Las aguas termales son muy reconfortantes.",
    "Excelente atención y limpieza.",
    "Ideal para ir en familia.",
    "La vista es espectacular.",
    "Me encantó el senderismo.",
    "Muy recomendable para turistas.",
    "El restaurante tiene buena comida.",
    "Perfecto para desconectarse.",
    "Volvería sin dudarlo."
];
const nombres = [
    "Ana López", "Carlos Méndez", "Sofía Ramírez", "Luis Pérez", "María García",
    "Jorge Castillo", "Valeria Torres", "Pedro Díaz", "Gabriela Morales", "Ricardo Gómez"
];

// Seleccionar 3 comentarios y nombres aleatorios sin repetir
function mostrarComentarios() {
    let indices = [];
    while (indices.length < 3) {
        let idx = Math.floor(Math.random() * comentarios.length);
        if (!indices.includes(idx)) indices.push(idx);
    }
    let container = document.getElementById('comentarios-container');
    container.innerHTML = '';
    indices.forEach(i => {
        container.innerHTML += `
        <div class="col-md-4 mb-3">
            <div class="card h-100 shadow">
                <div class="card-body">
                    <h5 class="card-title"><i class="bi bi-person-circle"></i> ${nombres[i]}</h5>
                    <p class="card-text">"${comentarios[i]}"</p>
                </div>
            </div>
        </div>`;
    });
}
mostrarComentarios();

// Validación y envío del formulario
document.getElementById('contactoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value.trim();
    const fecha = document.getElementById('fecha').value;
    const correo = document.getElementById('correo').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nombre || !fecha || !correo || !mensaje) {
        alert('Por favor, completa todos los campos.');
        return;
    }
    if (!emailRegex.test(correo)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return;
    }

    // Mostrar modal de confirmación
    const modal = new bootstrap.Modal(document.getElementById('modalConfirmacion'));
    modal.show();

    // Mostrar datos en consola
    console.log({
        nombre: nombre,
        fecha: fecha,
        correo: correo,
        mensaje: mensaje
    });

    // Limpiar formulario
    this.reset();
});