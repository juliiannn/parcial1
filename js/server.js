const iniciars = () => {
    window.location.href = "../html/login.html";
}

const regresar = () => {
    window.location.href = "../index.html";
}


const ingresar = () => {
    let identificacion = document.getElementById("identificacion").value;
    let contrasena = document.getElementById("contrasena").value;

    let url = 'https://api.jsonbin.io/v3/b/66ff2e6bacd3cb34a890c5e3';

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const usuarios = data.record;
            const usuarioValido = usuarios.find(user => user.identificacion === identificacion && user.contrasena === contrasena);
            if (usuarioValido) {
                localStorage.setItem('nombreUsuario', usuarioValido.nombre);
                localStorage.setItem('apellidoUsuario', usuarioValido.apellido);
                localStorage.setItem('rolUsuario', usuarioValido.rol);

                if (usuarioValido.rol === "Administrador") {
                    alert("Inicio de sesión exitoso");
                    window.location.href = "../html/administrador.html";

                } else if (usuarioValido.rol === "Coordinador") {
                    alert("Inicio de sesión exitoso");
                    window.location.href = "../html/coordinador.html";

                } else if (usuarioValido.rol === "Docente") {
                    alert("Inicio de sesión exitoso");
                    window.location.href = "../html/docente.html";

                } else if (usuarioValido.rol === "Estudiante") {
                    alert("Inicio de sesión exitoso");
                    window.location.href = "../html/estudiante.html";
                }
            } else {
                alert("Usuario o contraseña incorrectos");
            }
        })
        .catch(error => {
            console.error('Hubo un problema con la solicitud Fetch:', error);
            alert('Hubo un problema con la solicitud Fetch. Inténtalo de nuevo.');
        });
        
}

const mostrarBienvenida = () => {
    const nombreUsuario = localStorage.getItem('nombreUsuario');
    const apellidoUsuario = localStorage.getItem('apellidoUsuario');
    if (nombreUsuario) {
        document.getElementById('mensaje-bienvenida').innerText = `Bienvenido/a, ${nombreUsuario} ${apellidoUsuario}!`;
    }
};

const cerrarSesion = () => {
    localStorage.removeItem('nombreUsuario');
    localStorage.removeItem('rolUsuario');
    window.location.href = "../html/login.html";
}

const regresar1 = () => {
    window.location.href = "../html/administrador.html";
}

const regresar2 = () => {
    window.location.href = "../html/coordinador.html";
}

const regresar3 = () => {
    window.location.href = "../html/docente.html";
}

const regresar4 = () => {
    window.location.href = "../html/estudiante.html"
}

const instituciones = () => {
    window.location.href = "../html/instituciones.html";
}
const veract = () => {
    window.location.href = "../html/veract.html";
}
const vernotasest = () => {
    window.location.href = "../html/vernotasest.html";
}

const cargarInstituciones = () => {
    let url = 'https://api.jsonbin.io/v3/b/66ff2e4de41b4d34e43c9062';
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar el archivo JSON');
            }
            return response.json();
        })
        .then(data => {
            const instituciones = data.record;
            const tableBody = document.getElementById('instituciones-table').getElementsByTagName('tbody')[0];
            instituciones.forEach(institucion => {
                const row = tableBody.insertRow();
                row.insertCell(0).innerText = institucion.nombre;
                row.insertCell(1).innerText = institucion.nit;
                row.insertCell(2).innerText = institucion.coordinador;
                row.insertCell(3).innerText = institucion.pais;
                row.insertCell(4).innerText = institucion.ciudad;
                row.insertCell(5).innerText = institucion.direccion;
                row.insertCell(6).innerText = institucion.correo;
                row.insertCell(7).innerText = institucion.telefono;
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

const coordinadores = () => {
    window.location.href = "../html/VerCoordinadores.html";
}

const cargarCoordinadores = () => {
    let url = 'https://api.jsonbin.io/v3/b/66ff2d4fe41b4d34e43c9003';
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar el archivo JSON');
            }
            return response.json();
        })
        .then(data => {
            const coordinadores = data.record;
            const tableBody = document.getElementById('coordinadores-table').getElementsByTagName('tbody')[0];
            coordinadores.forEach(coordinador => {
                const row = tableBody.insertRow();
                row.insertCell(0).innerText = coordinador.nombre;
                row.insertCell(1).innerText = coordinador.apellido;
                row.insertCell(2).innerText = coordinador.identificacion;
                row.insertCell(3).innerText = coordinador.edad;
                row.insertCell(4).innerText = coordinador.telefono;
                row.insertCell(5).innerText = coordinador.correo;
                row.insertCell(6).innerText = coordinador.institucion;
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

const registrarinst = () => {
    window.location.href = "../html/regins.html";
}

const registrarcoord = () => {
    window.location.href = "../html/regcoor.html";
}

const regpro = () => {
    window.location.href = "../html/regpro.html";
}

const regest = () => {
    window.location.href = "../html/regest.html";
}

const regmat = () => {
    window.location.href = "../html/regmaterias.html";
}

const vernotascoordinador = () => {
    window.location.href = "../html/vernotascoordinador.html";
}

const verpro = () => {
    window.location.href = "../html/verpro.html";
}

const cargarProfesores = () => {
    let url = 'https://api.jsonbin.io/v3/b/66ff2de1e41b4d34e43c903b';
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar el archivo JSON');
            }
            return response.json();
        })
        .then(data => {
            const profesores = data.record;
            const tableBody = document.getElementById('docentes-table').getElementsByTagName('tbody')[0];
            profesores.forEach(docente => {
                const row = tableBody.insertRow();
                row.insertCell(0).innerText = docente.nombre;
                row.insertCell(1).innerText = docente.apellido;
                row.insertCell(2).innerText = docente.identificacion;
                row.insertCell(3).innerText = docente.edad;
                row.insertCell(4).innerText = docente.telefono;
                row.insertCell(5).innerText = docente.correo;
                row.insertCell(6).innerText = docente.materia;
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

const verest = () => {
    window.location.href = "../html/verest.html";
}

const cargarEstudiantes = () => {
    let url = 'https://api.jsonbin.io/v3/b/66ff2e15ad19ca34f8b25097';
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar el archivo JSON');
            }
            return response.json();
        })
        .then(data => {
            const estudiantes = data.record;
            const tableBody = document.getElementById('estudiantes-table').getElementsByTagName('tbody')[0];
            estudiantes.forEach(estudiante => {
                const row = tableBody.insertRow();
                row.insertCell(0).innerText = estudiante.nombre;
                row.insertCell(1).innerText = estudiante.apellido;
                row.insertCell(2).innerText = estudiante.identificacion;
                row.insertCell(3).innerText = estudiante.edad;
                row.insertCell(4).innerText = estudiante.telefono;
                row.insertCell(5).innerText = estudiante.correo;
                row.insertCell(6).innerText = estudiante.grado;
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

const estgr = () => {
    window.location.href = "../html/estgr.html";
}

const notas = () => {
    window.location.href = "../html/editarnotasdocente.html";
}

const act = () => {
    window.location.href = "../html/subiractividadesdocentes.html";
}


let materiasMatriculadas = JSON.parse(localStorage.getItem('materiasMatriculadas')) || [];
const matricular = () => {
    let materia = document.getElementById("materia").value;
    let gradosSeleccionados = Array.from(document.querySelectorAll('input[name="grado"]:checked')).map(checkbox => checkbox.value);

    if (!materia) {
        alert("Por favor, ingresa una materia.");
        return;
    }
    if (gradosSeleccionados.length === 0) {
        alert("Por favor, selecciona al menos un grado.");
        return;
    }

    materiasMatriculadas.push({ materia, grados: gradosSeleccionados });
    localStorage.setItem('materiasMatriculadas', JSON.stringify(materiasMatriculadas));
    actualizarLista();
    alert(`¡Matriculado con éxito!\nMateria: ${materia}\nGrados seleccionados: ${gradosSeleccionados.join(', ')}`);
}

const actualizarLista = () => {
    let listaMaterias = document.getElementById("lista-materias");
    listaMaterias.innerHTML = "";

    materiasMatriculadas.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `Materia: ${item.materia}, Grados: ${item.grados.join(', ')}`;
        listaMaterias.appendChild(listItem);
    });
}

window.onload = () => {
    materiasMatriculadas = JSON.parse(localStorage.getItem('materiasMatriculadas')) || [];
    actualizarLista();
}
const obtenerEstudiantes = () => {
    let url = 'https://api.jsonbin.io/v3/b/66ff2e15ad19ca34f8b25097';
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar el archivo JSON');
            }
            return response.json();
        })
        .then(data => {
            console.log('Datos recibidos:', data);
            return data.record || []; 
        })
        .catch(error => {
            console.error('Error:', error);
            return []; 
        });
}

const filtrarest = () => {
    const gradoSeleccionado = document.getElementById("grado").value;
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";
    console.log('Grado seleccionado:', gradoSeleccionado);

    if (gradoSeleccionado) {
        obtenerEstudiantes().then(estudiantes => {

            console.log('Estudiantes:', estudiantes);
            if (!Array.isArray(estudiantes)) {
                resultDiv.textContent = "Error al obtener los estudiantes.";
                return;
            }

            const estudiantesFiltrados = estudiantes.filter(estudiante => estudiante.grado === parseInt(gradoSeleccionado));

            if (estudiantesFiltrados.length > 0) {
                estudiantesFiltrados.forEach(estudiante => {
                    const p = document.createElement("p");
                    p.textContent = `${estudiante.nombre} ${estudiante.apellido} - Identificacion: ${estudiante.identificacion}`;
                    resultDiv.appendChild(p);
                });
            } else {
                resultDiv.textContent = "No se encontraron estudiantes para este grado.";
            }
        });
    } else {
        resultDiv.textContent = "Por favor, selecciona un grado.";
    }
}

const filtrarEstudiantes = () => {
    const gradoSeleccionado = document.getElementById("grado").value;
    const estudiantesList = document.getElementById("estudiantesList");
    const estudiantesContainer = document.getElementById("estudiantesContainer");
    estudiantesList.innerHTML = "";

    if (gradoSeleccionado) {
        obtenerEstudiantes().then(estudiantes => {
            const estudiantesFiltrados = estudiantes.filter(estudiante => estudiante.grado === parseInt(gradoSeleccionado));

            estudiantesFiltrados.forEach(estudiante => {
                const p = document.createElement("p");
                p.textContent = `${estudiante.nombre} ${estudiante.apellido} - Identificacion: ${estudiante.identificacion}`;
                estudiantesList.appendChild(p);
            });

            if (estudiantesFiltrados.length > 0) {
                estudiantesContainer.style.display = "block";
            } else {
                estudiantesContainer.style.display = "none";
            }
        });
    } else {
        estudiantesContainer.style.display = "none";
    }
}

const guardarNota = () => {
    const nombreEstudiante = document.getElementById("nombreEstudiante").value;
    const nota = document.getElementById("nota").value;
    const materiaSeleccionada = document.getElementById("materia").value;
    const notas = JSON.parse(localStorage.getItem("notas")) || [];

    const nuevaNota = {
        nombre: nombreEstudiante,
        nota: parseFloat(nota),
        materia: materiaSeleccionada

    };

    notas.push(nuevaNota);
    localStorage.setItem("notas", JSON.stringify(notas));
    document.getElementById("nombreEstudiante").value = "";
    document.getElementById("nota").value = "";
    document.getElementById("materia").value = "";

    mostrarNotas();
}

const mostrarNotas = () => {
    const notas = JSON.parse(localStorage.getItem("notas")) || [];
    const notasDiv = document.getElementById("notasRegistradas");
    notasDiv.innerHTML = "";

    notas.forEach((item, index) => {
        const p = document.createElement("p");
        p.textContent = `Estudiante: ${item.nombre} - Materia: ${item.materia} - Nota: ${item.nota}`;
        notasDiv.appendChild(p);

        const eliminarButton = document.createElement("button");
        eliminarButton.textContent = "Eliminar";
        eliminarButton.onclick = () => eliminarNota(index); 

        p.appendChild(eliminarButton);
    });
}

const eliminarNota = (index) => {
    const notas = JSON.parse(localStorage.getItem("notas")) || [];
    const nuevasNotas = notas.filter((_, i) => i !== index);
    localStorage.setItem("notas", JSON.stringify(nuevasNotas));
    
    alert("Nota eliminada exitosamente!");
    mostrarNotas(); 
};

window.onload = mostrarNotas;

const guardarTarea = () => {
    const titulo = document.getElementById("titulo").value;
    const descripcion = document.getElementById("descripcion").value;
    const grado = document.getElementById('grado').value;
    const fechaEntrega = document.getElementById("fechaEntrega").value;

    const tareas = JSON.parse(localStorage.getItem("tareas")) || [];
    
    const nuevaTarea = {
        titulo: titulo,
        descripcion: descripcion,
        grado: grado,
        fechaEntrega: fechaEntrega,
        estado: "Pendiente" 
    };

    tareas.push(nuevaTarea);
    localStorage.setItem("tareas", JSON.stringify(tareas));

    document.getElementById("tareaForm").reset();
    alert("Tarea guardada exitosamente!");
};

const mostrarActividades = (gradoEstudiante) => {
    const actividadesContainer = document.getElementById('actividades');
    console.log('Actividades container:', actividadesContainer); 

    if (!actividadesContainer) {
        console.error("El elemento con ID 'actividades' no se encontró.");
        return; 
    }

    const tareas = JSON.parse(localStorage.getItem('tareas')) || [];
    console.log('Tareas en localStorage:', tareas);

    const actividadesFiltradas = tareas.filter(tarea => {
        return tarea.grado == gradoEstudiante;
    });
    
    if (actividadesFiltradas.length === 0) {
        actividadesContainer.innerHTML = '<li>No hay actividades disponibles para tu grado.</li>';
        return;
    }

    actividadesFiltradas.forEach(tarea => {
        const li = document.createElement('li');
        li.textContent = `${tarea.titulo}: ${tarea.descripcion} (Entrega: ${tarea.fechaEntrega})`;
        actividadesContainer.appendChild(li);
    });
};

const verNotas = (nombreEstudiante, apellidoEstudiante) => {
    const notasContainer = document.getElementById('notas');

    const notas = JSON.parse(localStorage.getItem('notas')) || [];
    const nombreCompleto = `${nombreEstudiante} ${apellidoEstudiante}`;

    console.log('Nombre completo del estudiante:', nombreCompleto);

    const notasFiltradas = notas.filter(nota => {
        console.log('Comparando con:', nota.nombre);
        return nota.nombre === nombreCompleto;
    });

    if (notasFiltradas.length === 0) {
        notasContainer.innerHTML = '<li>No hay notas disponibles para este estudiante.</li>';
        return;
    }

    notasFiltradas.forEach(nota => {
        const li = document.createElement('li');
        li.textContent = `${nota.materia}: ${nota.nota}`;
        notasContainer.appendChild(li);
    });
};

window.onload = () => {
    obtenerEstudiantes().then(estudiantes => {
        if (estudiantes.length > 0) {
            const estudiante = estudiantes[0];
            const { nombre, apellido, grado } = estudiante;

            localStorage.setItem('estudiante', JSON.stringify(estudiante));

            console.log('Nombre del estudiante:', nombre);
            console.log('Apellido del estudiante:', apellido);
            console.log('Grado del estudiante:', grado);

            mostrarActividades(grado);
            verNotas(nombre, apellido);
            
        } else {
            console.error('No se encontraron estudiantes.');
        }
    }).catch(error => {
        console.error('Error al obtener estudiantes:', error);
    });
};



document.addEventListener("DOMContentLoaded", () => {
    mostrarBienvenida();
    cargarInstituciones();
    cargarCoordinadores();
    cargarProfesores();
    cargarEstudiantes();
});

const vermaterias = () => {
    window.location.href = "../html/vermaterias.html";
}
