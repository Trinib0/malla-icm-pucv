function cumplePrerrequisitos(prerreqs) {
  return prerreqs.every(id => {
    const ramo = document.getElementById(id);
    return ramo && ramo.classList.contains("aprobado");
  });
}

function actualizarBloqueos() {
  document.querySelectorAll(".ramo").forEach(ramo => {
    const prerreqs = ramo.dataset.prerreq ? JSON.parse(ramo.dataset.prerreq) : [];

    if (prerreqs.length > 0) {
      if (cumplePrerrequisitos(prerreqs)) {
        ramo.classList.remove("bloqueado");
        ramo.style.opacity = 1;
        ramo.style.pointerEvents = "auto";
      } else {
        ramo.classList.remove("aprobado"); // si pierde el requisito, se desmarca
        ramo.classList.add("bloqueado");
        ramo.style.opacity = 0.5;
        ramo.style.pointerEvents = "none";
      }
    }
  });
}

document.querySelectorAll(".ramo").forEach(ramo => {
  ramo.addEventListener("click", () => {
    if (ramo.classList.contains("bloqueado")) return;

    ramo.classList.toggle("aprobado");
    actualizarBloqueos();
  });
});

window.onload = actualizarBloqueos;
