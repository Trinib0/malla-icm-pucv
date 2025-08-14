// script.js

// ----------------------------------------------------
// 1. Datos de la Malla
//    Cada ramo tiene un 'id', 'nombre', lista de 'prerrequisitos' y un estado 'aprobado'.
// ----------------------------------------------------

const malla = [
    {
        ano: 1,
        semestres: [
            {
                nombre: "Semestre 1",
                ramos: [
                    { id: "ICM1010", nombre: "Introducción a la ingeniería mecánica", prerrequisitos: [], aprobado: false },
                    { id: "MAT1001", nombre: "Fundamentos de matemáticas para ingeniería", prerrequisitos: [], aprobado: false },
                    { id: "FIS1010", nombre: "Fundamentos de física", prerrequisitos: [], aprobado: false },
                    { id: "QUI1127", nombre: "Fundamentos de química", prerrequisitos: [], aprobado: false }, // Corregido QUI127 a QUI1127
                    { id: "FIN100-73", nombre: "Comunicación efectiva y desarrollo profesional e integral", prerrequisitos: [], aprobado: false } 
                ]
            },
            {
                nombre: "Semestre 2",
                ramos: [
                    { id: "MAT1002", nombre: "Cálculo diferencial e integral", prerrequisitos: ["MAT1001"], aprobado: false },
                    { id: "FIS1001", nombre: "Física mecánica", prerrequisitos: ["MAT1001"], aprobado: false },
                    { id: "FIS1012", nombre: "Laboratorio de física mecánica", prerrequisitos: ["MAT1001"], aprobado: false },
                    { id: "ICM1012", nombre: "Dibujo para mecánica", prerrequisitos: [], aprobado: false }
                ]
            }
        ]
    },
    {
        ano: 2,
        semestres: [
            {
                nombre: "Semestre 3",
                ramos: [
                    { id: "MAT1003", nombre: "Cálculo en varias variables", prerrequisitos: ["MAT1002"], aprobado: false },
                    { id: "MAT1004", nombre: "Álgebra lineal", prerrequisitos: ["MAT1002"], aprobado: false },
                    { id: "ICM2010", nombre: "Estadística aplicada", prerrequisitos: ["MAT1001"], aprobado: false },
                    { id: "ICM2011", nombre: "Ciencias de los materiales", prerrequisitos: ["QUI1127"], aprobado: false } // Corregido QUI127 a QUI1127
                ]
            },
            {
                nombre: "Semestre 4",
                ramos: [
                    { id: "MAT1005", nombre: "Ecuaciones diferenciales", prerrequisitos: ["MAT1003"], aprobado: false },
                    { id: "ICM2013", nombre: "Estática", prerrequisitos: ["MAT1003", "FIS1001"], aprobado: false },
                    { id: "ICM2012", nombre: "Mediciones y metrología", prerrequisitos: ["ICM2010"], aprobado: false },
                    { id: "ICM2014", nombre: "Materiales para ingeniería", prerrequisitos: ["ICM2011"], aprobado: false }
                ]
            }
        ]
    },
    {
        ano: 3,
        semestres: [
            {
                nombre: "Semestre 5",
                ramos: [
                    { id: "MAT1007", nombre: "Ecuaciones diferenciales parciales", prerrequisitos: ["MAT1005"], aprobado: false },
                    { id: "ICM3010", nombre: "Dinámica", prerrequisitos: ["ICM2013"], aprobado: false },
                    { id: "ICM3011", nombre: "Termodinámica 1", prerrequisitos: ["MAT1003", "QUI1127"], aprobado: false }, // Corregido QUI127 a QUI1127
                    { id: "ING9001", nombre: "Inglés 1", prerrequisitos: [], aprobado: false }
                ]
            },
            {
                nombre: "Semestre 6",
                ramos: [
                    { id: "ICM3012", nombre: "Procesos de fabricación 1", prerrequisitos: ["ICM2011"], aprobado: false },
                    { id: "ICM3013", nombre: "Lenguaje de programación y métodos numéricos", prerrequisitos: ["MAT1005"], aprobado: false },
                    { id: "ICM3014", nombre: "Mecánica de fluidos", prerrequisitos: ["ICM3011", "MAT1007"], aprobado: false },
                    { id: "ING9002", nombre: "Inglés 2", prerrequisitos: ["ING9001"], aprobado: false }
                ]
            }
        ]
    },
    {
        ano: 4,
        semestres: [
            {
                nombre: "Semestre 7",
                ramos: [
                    { id: "ICM4012", nombre: "Termodinámica 2", prerrequisitos: ["ICM3011", "ICM3014"], aprobado: false },
                    { id: "ICM4011", nombre: "Mecánica de materiales", prerrequisitos: ["ICM2011"], aprobado: false },
                    { id: "ICM4010", nombre: "Procesos de fabricación 2", prerrequisitos: ["ICM3012"], aprobado: false },
                    { id: "ING9003", nombre: "Inglés 3", prerrequisitos: ["ING9002"], aprobado: false }
                ]
            },
            {
                nombre: "Semestre 8",
                ramos: [
                    { id: "ICM4014", nombre: "Electrotecnia", prerrequisitos: [80 creditos aprobados], aprobado: false },
                    { id: "ICM4015", nombre: "Elementos de máquinas", prerrequisitos: ["ICM4011", "ICM3010"], aprobado: false },
                    { id: "ICM4013", nombre: "Vibraciones mecánicas", prerrequisitos: ["ICM3010", "MAT1007"], aprobado: false },
                    { id: "ICM4016", nombre: "Transferencia de calor", prerrequisitos: ["ICM3014", "ICM4012"], aprobado: false },
                    { id: "ING9004", nombre: "Inglés 4", prerrequisitos: ["ING9003"], aprobado: false }
                ]
            }
        ]
    },
    {
        ano: 5,
        semestres: [
            {
                nombre: "Semestre 9",
                ramos: [
                    { id: "ICM5013", nombre: "Turbomáquinas", prerrequisitos: ["ICM4016"], aprobado: false },
                    { id: "ICM5012", nombre: "Modelación mecánica", prerrequisitos: ["ICM4011", "ICM4016"], aprobado: false },
                    { id: "ICM5010", nombre: "Análisis de falla y monitoreo de condiciones", prerrequisitos: ["ICM2014"], aprobado: false },
                    { id: "ICM5011", nombre: "Automatización y control", prerrequisitos: ["ICM4014"], aprobado: false },
                    { id: "ING9600", nombre: "Evaluación de proyectos", prerrequisitos: [], aprobado: false } // Corregido ICM550 a ING9600
                ]
            },
            {
                nombre: "Semestre 10",
                ramos: [
                    { id: "ICM5014", nombre: "Herramientas de gestión de la producción", prerrequisitos: [], aprobado: false },
                    { id: "ICM5016", nombre: "Diseño mecánico", prerrequisitos: ["ICM5012"], aprobado: false },
                    { id: "ICM5017", nombre: "Proyecto de titulación 1", prerrequisitos: [], aprobado: false },
                    { id: "ICM5015", nombre: "Optimización e ingeniería de plantas", prerrequisitos: [], aprobado: false }
                ]
            }
        ]
    },
    {
        ano: 6,
        semestres: [
            {
                nombre: "Semestre 11",
                ramos: [
                    { id: "ICM6010", nombre: "Administración de RR.HH.", prerrequisitos: [], aprobado: false },
                    { id: "ICM6011", nombre: "Gestión de activos y confiabilidad", prerrequisitos: ["ICM5010"], aprobado: false },
                    { id: "ICM6012", nombre: "Proyecto de ingeniería", prerrequisitos: ["ICM5015", "ING9600"], aprobado: false }, // Corregido ICM550 a ING9600
                    { id: "ICM6013", nombre: "Proyecto de titulación 2", prerrequisitos: ["ICM5017"], aprobado: false }
                ]
            }
        ]
    }
];

// Un mapa para buscar rápidamente los datos de un ramo por su ID
const ramosMap = new Map();
malla.forEach(ano => {
    ano.semestres.forEach(semestre => {
        semestre.ramos.forEach(ramo => {
            ramosMap.set(ramo.id, ramo);
        });
    });
});


// Función para verificar si un ramo está desbloqueado (todos sus prerrequisitos están aprobados)
function isRamoUnlocked(ramoId) {
    const ramo = ramosMap.get(ramoId);
    if (!ramo) return false; // Si el ramo no existe en los datos, no puede estar desbloqueado
    // Si no tiene prerrequisitos, siempre está desbloqueado (se puede tomar desde el inicio)
    if (ramo.prerrequisitos.length === 0) {
        return true;
    }
    // Verifica si *todos* sus prerrequisitos están marcados como aprobados
    return ramo.prerrequisitos.every(prereqId => {
        const prereqRamo = ramosMap.get(prereqId);
        // El prerrequisito debe existir y estar aprobado
        return prereqRamo && prereqRamo.aprobado;
    });
}

// Función principal para actualizar las clases de CSS de todos los ramos en el DOM
// Esto es CRUCIAL para que los colores se actualicen después de cada interacción
function updateRamoStates() {
    document.querySelectorAll('.ramo').forEach(ramoDiv => {
        const ramoId = ramoDiv.dataset.id;
        const ramoInfo = ramosMap.get(ramoId);

        // Limpiar todas las clases de estado anteriores (para que no se acumulen)
        ramoDiv.classList.remove('aprobado', 'bloqueado', 'desbloqueado');

        if (ramoInfo.aprobado) {
            // Si el ramo está marcado como aprobado en los datos
            ramoDiv.classList.add('aprobado');
        } else {
            // Si el ramo NO está aprobado, verificamos si puede ser tomado (está desbloqueado)
            if (isRamoUnlocked(ramoId)) {
                ramoDiv.classList.add('desbloqueado'); // Está listo para tomar
            } else {
                ramoDiv.classList.add('bloqueado'); // Faltan prerrequisitos, no se puede tomar aún
            }
        }
    });
}


document.addEventListener('DOMContentLoaded', () => {
    const mallaContainer = document.getElementById('malla-container'); // Cambiado a getElementById

    // ----------------------------------------------------
    // 2. Generación Dinámica de la Malla en HTML
    //    Este código crea los divs para años, semestres y ramos basados en los datos.
    // ----------------------------------------------------
    malla.forEach(anoData => {
        const anoDiv = document.createElement('div');
        anoDiv.classList.add('ano');
        anoDiv.innerHTML = `<h2>Año ${anoData.ano}</h2>`;

        anoData.semestres.forEach(semestreData => {
            const semestreDiv = document.createElement('div');
            semestreDiv.classList.add('semestre');
            semestreDiv.innerHTML = `<h3>${semestreData.nombre}</h3>`;

            semestreData.ramos.forEach(ramoData => {
                const ramoDiv = document.createElement('div');
                ramoDiv.classList.add('ramo');
                ramoDiv.dataset.id = ramoData.id; // Almacena el ID del ramo en un atributo de datos HTML
                ramoDiv.textContent = `${ramoData.id} - ${ramoData.nombre}`; // Muestra ID y nombre
                semestreDiv.appendChild(ramoDiv);
            });
            anoDiv.appendChild(semestreDiv);
        });
        mallaContainer.appendChild(anoDiv);
    });

    // **IMPORTANTE**: Llama a esta función para establecer los estados iniciales de todos los ramos
    // (Por ejemplo, los ramos sin prerrequisitos se mostrarán como "desbloqueados" al inicio)
    updateRamoStates();


    // ----------------------------------------------------
    // 3. Interactividad (Clic para Aprobar/Desaprobar, Hover para Resaltar)
    // ----------------------------------------------------

    const ramosHTML = document.querySelectorAll('.ramo'); // Obtiene todos los elementos HTML de los ramos
    const tooltip = document.getElementById('tooltip'); // Obtiene el elemento del tooltip

    ramosHTML.forEach(ramoDiv => {
        // Evento principal para APROBAR/DESAPROBAR un ramo
        ramoDiv.addEventListener('click', (event) => {
            const ramoId = event.target.dataset.id; // Obtiene el ID del ramo clicado
            const ramoInfo = ramosMap.get(ramoId); // Obtiene los datos del ramo de nuestro mapa

            // Lógica para permitir o denegar la aprobación:
            // Solo se puede aprobar un ramo si:
            // 1. Ya está aprobado (para desaprobarlo)
            // 2. No está aprobado PERO todos sus prerrequisitos están completos (está desbloqueado)
            if (!ramoInfo.aprobado && !isRamoUnlocked(ramoId)) {
                // Si el ramo no está aprobado Y no está desbloqueado (le faltan prerrequisitos)
                console.log(`Ramo ${ramoId} bloqueado. No puedes aprobarlo sin sus prerrequisitos.`);
                
                // Mostrar un mensaje en el tooltip para el usuario
                tooltip.innerHTML = `<strong>${ramoInfo.nombre}</strong><br>¡Bloqueado! Faltan prerrequisitos.`;
                tooltip.classList.add('active');
                tooltip.style.left = `${event.pageX + 15}px`;
                tooltip.style.top = `${event.pageY + 15}px`;
                // Ocultar el tooltip después de un breve tiempo
                setTimeout(() => tooltip.classList.remove('active'), 1500); 
                return; // Detiene la función, no se cambia el estado del ramo
            }

            // Si se llegó hasta aquí, significa que se puede alternar el estado de aprobación
            ramoInfo.aprobado = !ramoInfo.aprobado; // Cambia el estado 'aprobado' en los datos del ramo

            // **CRUCIAL**: Vuelve a calcular y aplicar los estados visuales a *TODOS* los ramos.
            // Esto es lo que hará que otros ramos (que ahora cumplen sus prerrequisitos) se "desbloqueen"
            updateRamoStates();

            // Limpiar cualquier resaltado temporal (prerrequisitos/consecuencias) y el tooltip
            ramosHTML.forEach(r => {
                r.classList.remove('prerequisite-highlight', 'consequence-highlight');
            });
            tooltip.classList.remove('active');
        });


        // Evento para RESALTAR PRERREQUISITOS/CONSECUENCIAS al pasar el ratón (hover)
        ramoDiv.addEventListener('mouseenter', (event) => {
            const ramoId = event.target.dataset.id;
            const ramoInfo = ramosMap.get(ramoId);

            // Limpiar cualquier resaltado anterior de prerrequisitos/consecuencias en todos los ramos
            ramosHTML.forEach(r => {
                r.classList.remove('prerequisite-highlight', 'consequence-highlight');
            });

            // Resaltar los prerrequisitos del ramo sobre el que se encuentra el ratón
            if (ramoInfo && ramoInfo.prerrequisitos.length > 0) {
                ramoInfo.prerrequisitos.forEach(prereqId => {
                    const prereqDiv = document.querySelector(`.ramo[data-id="${prereqId}"]`);
                    if (prereqDiv) {
                        prereqDiv.classList.add('prerequisite-highlight');
                    }
                });
            }

            // Resaltar los ramos que tienen este como prerrequisito (sus "consecuencias")
            ramosMap.forEach(r => {
                if (r.prerrequisitos.includes(ramoId)) {
                    const consequenceDiv = document.querySelector(`.ramo[data-id="${r.id}"]`);
                    if (consequenceDiv) {
                        consequenceDiv.classList.add('consequence-highlight');
                    }
                }
            });

            // Mostrar tooltip con información del ramo
            if (ramoInfo) {
                let tooltipContent = `<strong>${ramoInfo.nombre}</strong><br>`;
                if (ramoInfo.prerrequisitos.length > 0) {
                    const prerrequisitoNombres = ramoInfo.prerrequisitos
                        .map(id => ramosMap.get(id) ? ramosMap.get(id).nombre : id) // Mapea IDs a nombres
                        .join(', '); // Une los nombres con comas
                    tooltipContent += `Prerrequisitos: ${prerrequisitoNombres}`;
                } else {
                    tooltipContent += "Sin prerrequisitos";
                }
                tooltip.innerHTML = tooltipContent;
                tooltip.classList.add('active');

                // Posicionar el tooltip cerca del cursor
                tooltip.style.left = `${event.pageX + 15}px`;
                tooltip.style.top = `${event.pageY + 15}px`;
            }
        });

        // Ocultar resaltados y tooltip al quitar el ratón de un ramo
        ramoDiv.addEventListener('mouseleave', () => {
            ramosHTML.forEach(r => {
                r.classList.remove('prerequisite-highlight', 'consequence-highlight');
            });
            tooltip.classList.remove('active');
        });
    });
});
