// script.js

// ----------------------------------------------------
// 1. Datos de la Malla
//    Asegúrate de que 'aprobado: false' esté en cada ramo.
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

// Función para actualizar las clases de CSS de todos los ramos en el DOM
function updateRamoStates() {
    document.querySelectorAll('.ramo').forEach(ramoDiv => {
        const ramoId = ramoDiv.dataset.id;
        const ramoInfo = ramosMap.get(ramoId);

        // Limpiar todas las clases de estado anteriores
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

    // Generación inicial de la malla en HTML
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
                ramoDiv.dataset.id = ramoData.id; // Guarda el ID para fácil acceso
                ramoDiv.textContent = `${ramoData.id} - ${ramoData.nombre}`;
                semestreDiv.appendChild(ramoDiv);
            });
            anoDiv.appendChild(semestreDiv);
        });
        mallaContainer.appendChild(anoDiv);
    });

    // **IMPORTANTE**: Inicializar los estados visuales de los ramos al cargar
    updateRamoStates();


    // ----------------------------------------------------
    // 3. Interactividad (Clic para Aprobar/Desaprobar, Hover para Resaltar)
    // ----------------------------------------------------

    const ramos = document.querySelectorAll('.ramo');
    const tooltip = document.getElementById('tooltip');

    ramos.forEach(ramoDiv => {
        // Evento principal para APROBAR/DESAPROBAR un ramo
        ramoDiv.addEventListener('click', (event) => {
            const ramoId = event.target.dataset.id;
            const ramoInfo = ramosMap.get(ramoId);

            // Si el ramo no está aprobado Y no está desbloqueado, no se puede aprobar.
            // Es decir, solo se puede aprobar si ya está aprobado o si todos sus prerrequisitos están completos.
            if (!ramoInfo.aprobado && !isRamoUnlocked(ramoId)) {
                console.log(`Ramo ${ramoId} bloqueado. No puedes aprobarlo sin sus prerrequisitos.`);
                // Opcional: mostrar tooltip de "bloqueado"
                tooltip.innerHTML = `<strong>${ramoInfo.nombre}</strong><br>¡Bloqueado! Faltan prerrequisitos.`;
                tooltip.classList.add('active');
                tooltip.style.left = `${event.pageX + 15}px`;
                tooltip.style.top = `${event.pageY + 15}px`;
                setTimeout(() => tooltip.classList.remove('active'), 1500); // Ocultar después de 1.5s
                return; // Salir de la función si está bloqueado
            }

            // Alternar el estado 'aprobado' en los datos
            ramoInfo.aprobado = !ramoInfo.aprobado;

            // **CRUCIAL**: Recalcular y aplicar los estados visuales a *todos* los ramos después de cada cambio
            updateRamoStates();

            // Limpiar cualquier resaltado temporal (prerreq/consecuencias) y el tooltip al hacer clic
            ramos.forEach(r => {
                r.classList.remove('prerequisite-highlight', 'consequence-highlight');
            });
            tooltip.classList.remove('active');
        });


        // Evento para RESALTAR PRERREQUISITOS/CONSECUENCIAS al pasar el ratón (hover)
        ramoDiv.addEventListener('mouseenter', (event) => {
            const ramoId = event.target.dataset.id;
            const ramoInfo = ramosMap.get(ramoId);

            // Limpiar cualquier resaltado anterior de prerrequisitos/consecuencias en todos los ramos
            ramos.forEach(r => {
                r.classList.remove('prerequisite-highlight', 'consequence-highlight');
            });

            // Resaltar los prerrequisitos del ramo actual
            if (ramoInfo && ramoInfo.prerrequisitos.length > 0) {
                ramoInfo.prerrequisitos.forEach(prereqId => {
                    const prereqDiv = document.querySelector(`.ramo[data-id="${prereqId}"]`);
                    if (prereqDiv) {
                        prereqDiv.classList.add('prerequisite-highlight');
                    }
                });
            }

            // Resaltar los ramos que tienen este como prerrequisito (consecuencias)
            ramosMap.forEach(r => {
                if (r.prerrequisitos.includes(ramoId)) {
                    const consequenceDiv = document.querySelector(`.ramo[data-id="${r.id}"]`);
                    if (consequenceDiv) {
                        consequenceDiv.classList.add('consequence-highlight');
                    }
                }
            });

            // Mostrar tooltip con información
            if (ramoInfo) {
                let tooltipContent = `<strong>${ramoInfo.nombre}</strong><br>`;
                if (ramoInfo.prerrequisitos.length > 0) {
                    const prerrequisitoNombres = ramoInfo.prerrequisitos
                        .map(id => ramosMap.get(id) ? ramosMap.get(id).nombre : id) // Obtiene el nombre si existe
                        .join(', ');
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

        // Ocultar resaltados y tooltip al quitar el ratón
        ramoDiv.addEventListener('mouseleave', () => {
            ramos.forEach(r => {
                r.classList.remove('prerequisite-highlight', 'consequence-highlight');
            });
            tooltip.classList.remove('active');
        });
    });

    // Opcional: Si quieres que el tooltip se oculte al hacer clic en cualquier parte de la página,
    // o que el resaltado de "selected" se borre (aunque el click en el ramo ya gestiona esto)
    // document.addEventListener('click', (event) => {
    //     if (!event.target.closest('.ramo')) {
    //         ramos.forEach(r => r.classList.remove('selected', 'prerequisite-highlight', 'consequence-highlight'));
    //         tooltip.classList.remove('active');
    //     }
    // });
});
