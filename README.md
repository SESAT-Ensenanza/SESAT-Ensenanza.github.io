# Jefatura de Enseñanza · Hospital Tonalá Centro (SESAT)

Sitio institucional de la Jefatura de Enseñanza, publicado con GitHub Pages.

## Publicación en GitHub Pages

1. En la organización **SESAT-Ensenanza**, crear un repositorio público llamado exactamente
   `SESAT-Ensenanza.github.io`.
2. Subir `index.html` y este `README.md` a la raíz del repositorio
   (botón **Add file → Upload files**, rama `main`).
3. Ir a **Settings → Pages**, en *Build and deployment* elegir
   **Deploy from a branch**, rama `main`, carpeta `/ (root)`, y guardar.
4. En uno o dos minutos el sitio queda disponible en:
   `https://sesat-ensenanza.github.io/`

> Si prefiere otro nombre de repositorio (por ejemplo `pagina-ensenanza`), la dirección será
> `https://sesat-ensenanza.github.io/pagina-ensenanza/`.

## Datos pendientes antes de difundir el sitio

Buscar en `index.html` el texto `EDITAR` y los recuadros marcados como **Por confirmar**:

- Horario de atención, correo electrónico y teléfono/extensión de la Jefatura.
- Enlace al portal de verificación de constancias: confirmar que GitHub Pages esté activo
  en el repositorio `constancias` (o trasladar ese portal a esta organización y actualizar el enlace).

## Estructura del repositorio

```
index.html                         Página principal
assets/
  estilos.css                      Diseño compartido por todas las páginas
educacion-continua/
  cursos-obligatorios.html         Subpágina: cursos obligatorios
  cursos-especializados.html       Subpágina: cursos especializados
```

Todas las páginas usan `assets/estilos.css`; si se omite ese archivo, el sitio se ve sin diseño.

## Agregar un curso

En `cursos-obligatorios.html` o `cursos-especializados.html` hay una ficha de ejemplo dentro de un
comentario (buscar `PARA AGREGAR UN CURSO`). Copiarla, quitar las marcas de comentario, llenar los
datos y borrar el recuadro "Sin cursos publicados".

- Cursos interactivos en HTML: carpeta `cursos/nombre-del-curso/index.html`.
- Materiales en PDF: carpeta `documentos/`.
- Nombres de archivo en minúsculas, sin acentos, sin ñ y sin espacios (usar guiones).

## Secciones de la página principal

| Sección | Contenido |
|---|---|
| Portada | Identidad institucional y ejes: formación, capacitación, investigación |
| Programas | Internado, servicio social, campo clínico, prácticas profesionales, educación continua (con enlaces a cursos obligatorios y especializados), investigación |
| Congreso | I Congreso de Ciencias de la Salud (CTO2026) y verificación de constancias |
| Servicios en línea | Verificación de constancias (pública); asistencia QR y gestión de alumnos (uso interno) |
| Contacto | Ubicación y medios de contacto |
