document.addEventListener("DOMContentLoaded", function () {
  const ramos = document.querySelectorAll(".ramo");

  // Mapa con prerequisitos por ramo
  const mapa = {};
  ramos.forEach(ramo => {
    const id = ramo.id;
    const prerreq = ramo.dataset.prerreq ? JSON.parse(ramo.dataset.prerreq) : [];
    mapa[id] = { el: ramo, prerreq };
  });

  // Verifica si un ramo puede activarse según sus prerrequisitos
  function puedeActivarse(id) {
    return mapa[id].prerreq.every(pr => mapa[pr].el.classList.contains("aprobado"));
  }

  // Actualiza estado de todos los ramos
  function actualizarEstado() {
    Object.keys(mapa).forEach(id => {
      const ramo = mapa[id].el;
      if (!ramo.classList.contains("aprobado") && !puedeActivarse(id)) {
        ramo.classList.add("bloqueado");
      } else {
        ramo.classList.remove("bloqueado");
      }
    });
  }

  // Evento click: aprobar/desaprobar ramos
  ramos.forEach(ramo => {
    ramo.addEventListener("click", function () {
      if (ramo.classList.contains("bloqueado")) return;
      ramo.classList.toggle("aprobado");
      actualizarEstado();
    });
  });

  // Estado inicial
  actualizarEstado();
});
