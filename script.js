// Función para revisar si todos los prerrequisitos están aprobados
function cumplePrerrequisitos(prerreqs) {
  return prerreqs.every(id => {
    const ramo = document.getElementById(id);
    return ramo && ramo.classList.contains("aprobado");
  });
}

// Inicialización
document.querySelectorAll(".ramo").forEach(ramo => {
  // Por defecto, bloquea todos los que tienen prerrequisitos
  const prerreq = ramo.dataset.prerreq ? JSON.parse(ramo.dataset.prerreq) : [];
  if (prerreq.length > 0 && !cumplePrerrequisitos(prerreq)) {
    ramo.classList.add("bloqueado");
    ramo.style.opacity = 0.5;
    ramo.style.pointerEvents = "none";
  }

  // Evento de click para aprobar ramos
  ramo.addEventListener("click", () => {
    if (ramo.classList.contains("bloqueado")) return;

    ramo.classList.toggle("aprobado");

    // Luego de marcar uno, revisa qué otros pueden desbloquearse
    document.querySelectorAll(".ramo").forEach(r => {
      const prereqs = r.dataset.prerreq ? JSON.parse(r.dataset.prerreq) : [];
      if (prereqs.length > 0 && cumplePrerrequisitos(prereqs)) {
        r.classList.remove("bloqueado");
        r.style.opacity = 1;
        r.style.pointerEvents = "auto";
      }
    });
  });
});
