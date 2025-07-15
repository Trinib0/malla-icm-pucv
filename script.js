// script.js

// ----------------------------------------------------
// 1. Datos de la Malla (MODIFICADO)
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
                    { id: "QUI127", nombre: "Fundamentos de química", prerrequisitos: [], aprobado: false },
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
                    { id: "ICM2011", nombre: "Ciencias de los materiales", prerrequisitos: ["QUI127"], aprobado: false }
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
                    { id: "ICM3011", nombre: "Termodinámica 1", prerrequisitos: ["MAT1003", "QUI127"], aprobado: false },
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
                    { id: "ICM4014", nombre: "Electrotecnia", prerrequisitos: [], aprobado: false },
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
                    { id: "ICM550", nombre: "Evaluación de proyectos", prerrequisitos: [], aprobado: false }
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
                    { id: "ICM6012", nombre: "Proyecto de ingeniería", prerrequisitos: ["ICM5015", "ICM550"], aprobado: false },
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
    if (!ramo) return false;
    // Si no tiene prerrequisitos, siempre está desbloqueado
    if (ramo.prerrequisitos.length === 0) {
        return true;
    }
    // Verifica si todos sus prerrequisitos están aprobados
    return ramo.prerrequisitos.every(prereqId => {
        const prereqRamo = ramosMap.get(prereqId);
        return prereqRamo && prereqRamo.aprobado;
    });
}

// Función para actualizar las clases de CSS de todos los ramos
function updateRamoStates() {
    document.querySelectorAll('.ramo').forEach(ramoDiv => {
        const ramoId = ramoDiv.dataset.id;
        const ramoInfo = ramosMap.get(ramoId);

        ramoDiv.classList.remove('aprobado', 'bloqueado', 'desbloqueado');

        if (ramoInfo.aprobado) {
            ramoDiv.classList.add('aprobado');
        } else {
            // Si no está aprobado, verificamos si está desbloqueado o bloqueado
            if (isRamoUnlocked(ramoId)) {
                ramoDiv.classList.add('desbloqueado');
            } else {
                ramoDiv.classList.add('bloqueado');
            }
        }
    });
}


document.addEventListener('DOMContentLoaded', () => {
    const mallaContainer = document.querySelector('.malla-container');

    // Generar la malla (mismo código que antes)
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
                ramoDiv.dataset.id = ramoData.id;
                ramoDiv.textContent = `${ramoData.id} - ${ramoData.nombre}`;
                semestreDiv.appendChild(ramoDiv);
            });
            anoDiv.appendChild(semestreDiv);
        });
        mallaContainer.appendChild(anoDiv);
    });

    // Inicializar los estados visuales de los ramos
    updateRamoStates();


    // ----------------------------------------------------
    // 3. Interactividad (MODIFICADO para Aprobación/Bloqueo)
    // ----------------------------------------------------

    const ramos = document.querySelectorAll('.ramo');
    const tooltip = document.getElementById('tooltip');
    let selectedRamoForHighlight = null; // Para el resaltado temporal (prerreq/consecuencias)


    ramos.forEach(ramoDiv => {
        // Evento para APROBAR/DESAPROBAR (Clic secundario o Alt+Clic, o simplemente clic)
        // Decidamos un mecanismo: un clic normal lo selecciona y Alt+Clic (o Shift+Clic) lo aprueba/desaprueba
        // Para simplificar, haremos que un clic normal alterne "aprobado" y "deseleccionar"
        ramoDiv.addEventListener('click', (event) => {
            const ramoId = event.target.dataset.id;
            const ramoInfo = ramosMap.get(ramoId);

            // Si el ramo está bloqueado y no tiene prerrequisitos completos, no se puede aprobar
            if (!ramoInfo.aprobado && !isRamoUnlocked(ramoId)) {
                // Aquí podrías mostrar un mensaje de error o una animación
                console.log(`Ramo ${ramoId} bloqueado. No puedes aprobarlo sin sus prerrequisitos.`);
                // Opcional: mostrar tooltip de "bloqueado"
                tooltip.innerHTML = `<strong>${ramoInfo.nombre}</strong><br>¡Bloqueado! Faltan prerrequisitos.`;
                tooltip.classList.add('active');
                tooltip.style.left = `${event.pageX + 15}px`;
                tooltip.style.top = `${event.pageY + 15}px`;
                setTimeout(() => tooltip.classList.remove('active'), 1500); // Ocultar después de 1.5s
                return; // Salir de la función si está bloqueado
            }

            // Alternar estado de "aprobado"
            ramoInfo.aprobado = !ramoInfo.aprobado;
            updateRamoStates(); // Recalcular y aplicar estados visuales

            // Después de cambiar el estado, deseleccionar cualquier ramo para los highlights temporales
            // y limpiar los highlights anteriores.
            ramos.forEach(r => {
                r.classList.remove('selected', 'prerequisite-highlight', 'consequence-highlight');
            });
            selectedRamoForHighlight = null; // Limpiar la selección de highlight

            // Opcional: Podrías querer resaltar las nuevas posibilidades después de aprobar/desaprobar
            // Pero para el ciclo de "aprobado/bloqueado", el updateRamoStates() ya hace el trabajo.
        });


        // Evento para RESALTAR PRERREQUISITOS/CONSECUENCIAS (Clic secundario, o simplemente hover, etc.)
        // Para que no choque con el "aprobar", usaremos el comportamiento del ratón (mouseover/mouseleave)
        // para el resaltado temporal, y el clic para el aprobado/bloqueado.

        ramoDiv.addEventListener('mouseenter', (event) => {
            const ramoId = event.target.dataset.id;
            const ramoInfo = ramosMap.get(ramoId);

            // Primero, limpiar cualquier resaltado anterior (excepto los estados aprobado/bloqueado/desbloqueado)
            ramos.forEach(r => {
                r.classList.remove('prerequisite-highlight', 'consequence-highlight');
            });

            // Resaltar prerrequisitos del ramo actual
            if (ramoInfo && ramoInfo.prerrequisitos.length > 0) {
                ramoInfo.prerrequisitos.forEach(prereqId => {
                    const prereqDiv = document.querySelector(`.ramo[data-id="${prereqId}"]`);
                    if (prereqDiv) {
                        prereqDiv.classList.add('prerequisite-highlight');
                    }
                });
            }

            // Resaltar ramos que tienen este como prerrequisito (consecuencias)
            ramosMap.forEach(r => {
                if (r.prerrequisitos.includes(ramoId)) {
                    const consequenceDiv = document.querySelector(`.ramo[data-id="${r.id}"]`);
                    if (consequenceDiv) {
                        consequenceDiv.classList.add('consequence-highlight');
                    }
                }
            });

            // Mostrar tooltip
            let tooltipContent = `<strong>${ramoInfo.nombre}</strong><br>`;
            if (ramoInfo.prerrequisitos.length > 0) {
                const prerrequisitoNombres = ramoInfo.prerrequisitos
                    .map(id => ramosMap.get(id) ? ramosMap.get(id).nombre : id)
                    .join(', ');
                tooltipContent += `Prerrequisitos: ${prerrequisitoNombres}`;
            } else {
                tooltipContent += "Sin prerrequisitos";
            }
            tooltip.innerHTML = tooltipContent;
            tooltip.classList.add('active');

            tooltip.style.left = `${event.pageX + 15}px`;
            tooltip.style.top = `${event.pageY + 15}px`;
        });

        ramoDiv.addEventListener('mouseleave', () => {
            // Limpiar los resaltados temporales al salir del ramo
            ramos.forEach(r => {
                r.classList.remove('prerequisite-highlight', 'consequence-highlight');
            });
            tooltip.classList.remove('active');
        });
    });

    // No necesitamos el evento de clic global para deseleccionar si el clic en el ramo ya hace todo.
    // document.addEventListener('click', (event) => { /* ... */ });
});
