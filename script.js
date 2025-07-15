// script.js

// ----------------------------------------------------
// 1. Datos de la Malla
// ----------------------------------------------------

const malla = [
    {
        ano: 1,
        semestres: [
            {
                nombre: "Semestre 1",
                ramos: [
                    { id: "ICM1010", nombre: "Introducción a la ingeniería mecánica", prerrequisitos: [] },
                    { id: "MAT1001", nombre: "Fundamentos de matemáticas para ingeniería", prerrequisitos: [] },
                    { id: "FIS1010", nombre: "Fundamentos de física", prerrequisitos: [] },
                    { id: "QUI127", nombre: "Fundamentos de química", prerrequisitos: [] },
                    { id: "FIN100-73", nombre: "Comunicación efectiva y desarrollo profesional e integral", prerrequisitos: [] }
                ]
            },
            {
                nombre: "Semestre 2",
                ramos: [
                    { id: "MAT1002", nombre: "Cálculo diferencial e integral", prerrequisitos: ["MAT1001"] },
                    { id: "FIS1001", nombre: "Física mecánica", prerrequisitos: ["MAT1001"] },
                    { id: "FIS1012", nombre: "Laboratorio de física mecánica", prerrequisitos: ["MAT1001"] },
                    { id: "ICM1012", nombre: "Dibujo para mecánica", prerrequisitos: [] }
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
                    { id: "MAT1003", nombre: "Cálculo en varias variables", prerrequisitos: ["MAT1002"] },
                    { id: "MAT1004", nombre: "Álgebra lineal", prerrequisitos: ["MAT1002"] },
                    { id: "ICM2010", nombre: "Estadística aplicada", prerrequisitos: ["MAT1001"] },
                    { id: "ICM2011", nombre: "Ciencias de los materiales", prerrequisitos: ["QUI127"] }
                ]
            },
            {
                nombre: "Semestre 4",
                ramos: [
                    { id: "MAT1005", nombre: "Ecuaciones diferenciales", prerrequisitos: ["MAT1003"] },
                    { id: "ICM2013", nombre: "Estática", prerrequisitos: ["MAT1003", "FIS1001"] },
                    { id: "ICM2012", nombre: "Mediciones y metrología", prerrequisitos: ["ICM2010"] },
                    { id: "ICM2014", nombre: "Materiales para ingeniería", prerrequisitos: ["ICM2011"] }
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
                    { id: "MAT1007", nombre: "Ecuaciones diferenciales parciales", prerrequisitos: ["MAT1005"] },
                    { id: "ICM3010", nombre: "Dinámica", prerrequisitos: ["ICM2013"] },
                    { id: "ICM3011", nombre: "Termodinámica 1", prerrequisitos: ["MAT1003", "QUI127"] },
                    { id: "ING9001", nombre: "Inglés 1", prerrequisitos: [] }
                ]
            },
            {
                nombre: "Semestre 6",
                ramos: [
                    { id: "ICM3012", nombre: "Procesos de fabricación 1", prerrequisitos: ["ICM2011"] },
                    { id: "ICM3013", nombre: "Lenguaje de programación y métodos numéricos", prerrequisitos: ["MAT1005"] },
                    { id: "ICM3014", nombre: "Mecánica de fluidos", prerrequisitos: ["ICM3011", "MAT1007"] },
                    { id: "ING9002", nombre: "Inglés 2", prerrequisitos: ["ING9001"] }
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
                    { id: "ICM4012", nombre: "Termodinámica 2", prerrequisitos: ["ICM3011", "ICM3014"] },
                    { id: "ICM4011", nombre: "Mecánica de materiales", prerrequisitos: ["ICM2011"] },
                    { id: "ICM4010", nombre: "Procesos de fabricación 2", prerrequisitos: ["ICM3012"] },
                    { id: "ING9003", nombre: "Inglés 3", prerrequisitos: ["ING9002"] }
                ]
            },
            {
                nombre: "Semestre 8",
                ramos: [
                    { id: "ICM4014", nombre: "Electrotecnia", prerrequisitos: [] },
                    { id: "ICM4015", nombre: "Elementos de máquinas", prerrequisitos: ["ICM4011", "ICM3010"] },
                    { id: "ICM4013", nombre: "Vibraciones mecánicas", prerrequisitos: ["ICM3010", "MAT1007"] },
                    { id: "ICM4016", nombre: "Transferencia de calor", prerrequisitos: ["ICM3014", "ICM4012"] },
                    { id: "ING9004", nombre: "Inglés 4", prerrequisitos: ["ING9003"] }
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
                    { id: "ICM5013", nombre: "Turbomáquinas", prerrequisitos: ["ICM4016"] },
                    { id: "ICM5012", nombre: "Modelación mecánica", prerrequisitos: ["ICM4011", "ICM4016"] },
                    { id: "ICM5010", nombre: "Análisis de falla y monitoreo de condiciones", prerrequisitos: ["ICM2014"] },
                    { id: "ICM5011", nombre: "Automatización y control", prerrequisitos: ["ICM4014"] },
                    { id: "ICM550", nombre: "Evaluación de proyectos", prerrequisitos: [] }
                ]
            },
            {
                nombre: "Semestre 10",
                ramos: [
                    { id: "ICM5014", nombre: "Herramientas de gestión de la producción", prerrequisitos: [] },
                    { id: "ICM5016", nombre: "Diseño mecánico", prerrequisitos: ["ICM5012"] },
                    { id: "ICM5017", nombre: "Proyecto de titulación 1", prerrequisitos: [] },
                    { id: "ICM5015", nombre: "Optimización e ingeniería de plantas", prerrequisitos: [] }
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
                    { id: "ICM6010", nombre: "Administración de RR.HH.", prerrequisitos: [] },
                    { id: "ICM6011", nombre: "Gestión de activos y confiabilidad", prerrequisitos: ["ICM5010"] },
                    { id: "ICM6012", nombre: "Proyecto de ingeniería", prerrequisitos: ["ICM5015", "ICM550"] },
                    { id: "ICM6013", nombre: "Proyecto de titulación 2", prerrequisitos: ["ICM5017"] }
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


// ----------------------------------------------------
// 2. Generación Dinámica de la Malla en HTML
// ----------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    const mallaContainer = document.querySelector('.malla-container');

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

    // ----------------------------------------------------
    // 3. Interactividad (Resaltado de Prerrequisitos y Consecuencias)
    // ----------------------------------------------------

    const ramos = document.querySelectorAll('.ramo');
    const tooltip = document.getElementById('tooltip');
    let selectedRamo = null; // Para llevar un seguimiento del ramo seleccionado

    ramos.forEach(ramoDiv => {
        ramoDiv.addEventListener('click', (event) => {
            const ramoId = event.target.dataset.id;

            // Limpiar clases de todos los ramos
            ramos.forEach(r => {
                r.classList.remove('selected', 'prerequisite-highlight', 'consequence-highlight');
            });

            // Si se hace clic en el mismo ramo, deseleccionar
            if (selectedRamo === ramoId) {
                selectedRamo = null;
                return;
            }

            // Seleccionar el ramo actual
            selectedRamo = ramoId;
            event.target.classList.add('selected');

            // Resaltar prerrequisitos
            const ramoInfo = ramosMap.get(ramoId);
            if (ramoInfo && ramoInfo.prerrequisitos.length > 0) {
                ramoInfo.prerrequisitos.forEach(prereqId => {
                    const prereqDiv = document.querySelector(`.ramo[data-id="${prereqId}"]`);
                    if (prereqDiv) {
                        prereqDiv.classList.add('prerequisite-highlight');
                    }
                });
            }

            // Resaltar ramos que tienen este como prerrequisito (consecuencias)
            // Esto implica buscar en todos los ramos, lo cual es menos eficiente pero necesario.
            ramosMap.forEach(r => {
                if (r.prerrequisitos.includes(ramoId)) {
                    const consequenceDiv = document.querySelector(`.ramo[data-id="${r.id}"]`);
                    if (consequenceDiv) {
                        consequenceDiv.classList.add('consequence-highlight');
                    }
                }
            });
        });

        // Mostrar tooltip al pasar el ratón (hover)
        ramoDiv.addEventListener('mousemove', (event) => {
            const ramoId = event.target.dataset.id;
            const ramoInfo = ramosMap.get(ramoId);

            if (ramoInfo) {
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

                // Posicionar el tooltip
                tooltip.style.left = `${event.pageX + 15}px`;
                tooltip.style.top = `${event.pageY + 15}px`;
            }
        });

        ramoDiv.addEventListener('mouseleave', () => {
            tooltip.classList.remove('active');
        });
    });

    // Deseleccionar al hacer clic fuera de un ramo
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.ramo')) {
            ramos.forEach(r => {
                r.classList.remove('selected', 'prerequisite-highlight', 'consequence-highlight');
            });
            selectedRamo = null;
        }
    });

    // ----------------------------------------------------
    // 4. Dibujar Líneas de Conexión (Opcional y más Avanzado)
    //    Esto requeriría una librería como JointJS o GoJS, o un Canvas puro
    //    Es más complejo de implementar de forma sencilla con CSS y JS puro.
    //    Por ahora, nos centraremos en el resaltado de colores.
    //    Si quieres las líneas, avísame y podemos explorar opciones más avanzadas.
    // ----------------------------------------------------
});
