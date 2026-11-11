/* ============================================================
   CONFIGURACIÓN DEL SITIO — Jefatura de Enseñanza · HTC-SESAT
   ============================================================
   ENLACE PARA SUBIR EVIDENCIAS
   1. Con la cuenta hospitaltonalacentro5@gmail.com, cree un
      Formulario de Google con una pregunta de tipo "Subir archivo".
   2. Clic en "Enviar" → ícono de enlace → "Copiar".
   3. Pegue el enlace entre las comillas de abajo y guarde.
   Los archivos se guardarán en el Google Drive de esa cuenta.
   ============================================================ */
window.SITIO = {
  enlaceEvidencias: ""
};

/* No es necesario modificar lo siguiente */
document.addEventListener("DOMContentLoaded", function () {
  var url = (window.SITIO.enlaceEvidencias || "").trim();
  document.querySelectorAll('[data-enlace="evidencias"]').forEach(function (a) {
    if (url) {
      a.href = url;
      a.target = "_blank";
      a.rel = "noopener";
    } else {
      a.removeAttribute("href");
      a.classList.add("inactivo");
      a.setAttribute("aria-disabled", "true");
      a.textContent = "Enlace en configuración";
      a.title = "El enlace para subir evidencias aún no está disponible.";
    }
  });
});
