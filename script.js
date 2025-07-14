document.addEventListener("DOMContentLoaded", () => {
  const cursos = document.querySelectorAll(".course");

  // Estado de cada curso: aprobado o no
  const estadoCursos = {};

  // Mapa de dependencias: qué cursos dependen de cuáles
  const dependencias = {
    "MAT1001": ["MAT1002", "FIS1001", "FIS1012", "ICM2010"],
    "MAT1002": ["MAT1003", "MAT1004"],
    "MAT1003": ["MAT1005", "ICM2013", "ICM3011"],
    "MAT1005": ["MAT1007", "ICM3013"],
    "MAT1007": ["ICM3014", "ICM4013"],
    "FIS1010": ["FIS1001", "FIS1012"],
    "FIS1001": ["ICM2013"],
    "QUI127": ["ICM2011", "ICM3011"],
    "ICM2011": ["ICM2014", "ICM3012", "ICM4011"],
    "ICM2010": ["ICM2012"],
    "ICM2013": ["ICM3010"],
    "ICM3011": ["ICM3014", "ICM4012"],
    "ICM3014": ["ICM4012", "ICM4016"],
    "ICM3010": ["ICM4015", "ICM4013"],
    "ICM4011": ["ICM4015", "ICM5012"],
    "ICM4012": ["ICM4016"],
    "ICM4014": ["ICM5011"],
    "ICM4016": ["ICM5012", "ICM5013", "ICM5015"],
    "ICM2014": ["ICM5010"],
    "ICM5010": ["ICM6011"],
    "ICM5015": ["ICM6012"],
    "ICM550": ["ICM6012"],
    "ICM5017": ["ICM6013"],
    "ICM5012": ["ICM5016"]
  };

  // Inicializamos todos en false (no aprobados)
  cursos.forEach(curso => {
    const codigo = curso.dataset.codigo;
    estadoCursos[codigo] = false;

    // Click = cambiar estado
    curso.addEventListener("click", () => {
      estadoCursos[codigo] = !estadoCursos[codigo];
      curso.classList.toggle("aprobado", estadoCursos[codigo]);
      actualizarVisibilidad();
    });
  });

  function actualizarVisibilidad() {
    cursos.forEach(curso => {
      const codigo = curso.dataset.codigo;
      const prereqs = obtenerPrerequisitos(codigo);

      // Si no tiene prerrequisitos, siempre visible
      if (prereqs.length === 0) {
        curso.style.display = "inline-block";
        return;
      }

      // Verificar si todos sus prerrequisitos están aprobados
      const habilitado = prereqs.every(pr => estadoCursos[pr]);

      curso.style.display = habilitado ? "inline-block" : "none";
    });
  }

  // Busca qué cursos tienen a este como prerrequisito
  function obtenerPrerequisitos(codigo) {
    let prereqs = [];
    for (const [pr, dependientes] of Object.entries(dependencias)) {
      if (dependientes.includes(codigo)) {
        prereqs.push(pr);
      }
    }
    return prereqs;
  }

  // Mostrar inicialmente todos los cursos sin prerrequisitos
  actualizarVisibilidad();
});
