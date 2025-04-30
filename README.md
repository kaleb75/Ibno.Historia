# Línea de Tiempo Histórica

Este proyecto es una línea de tiempo interactiva que muestra eventos históricos importantes, divididos en dos categorías principales: eventos cristianos y eventos del mundo. Los datos de los eventos se cargan dinámicamente desde archivos JSON y se presentan en una interfaz visual.

## Estructura del Proyecto

- **Linea_de_Tiempo.html**: Archivo principal que contiene la estructura HTML de la línea de tiempo.
- **Linea_de_Tiempo.css**: Archivo de estilos para la línea de tiempo.
- **Linea_de_Tiempo.js**: Archivo JavaScript que maneja la lógica de la aplicación, incluyendo la carga de eventos y la interacción con el usuario.
- **eventos/**: Carpeta que contiene los archivos JSON con los datos de los eventos:
  - `eventoscristianos.json`: Eventos relacionados con la historia cristiana.
  - `eventosmundo.json`: Eventos históricos generales.

## Funcionalidades

1. **Carga Dinámica de Eventos**:
   - Los eventos se cargan desde los archivos JSON y se ordenan cronológicamente.
2. **Interfaz Interactiva**:
   - Los eventos se muestran en una línea de tiempo horizontal.
   - Al hacer clic en un evento, se muestra un pop-up con información detallada.
3. **Modal de Información**:
   - Incluye título, año, subtítulo, texto descriptivo y una imagen (si está disponible).
   - Se puede cerrar haciendo clic en el botón de cierre o presionando la tecla Escape.

## Cómo Usar

1. Clona este repositorio en tu máquina local.
2. Abre el archivo `Linea_de_Tiempo.html` en tu navegador.
3. Interactúa con la línea de tiempo haciendo clic en los eventos para ver más detalles.

## Requisitos

- Navegador web moderno con soporte para JavaScript.

## Personalización

- Puedes agregar o modificar eventos editando los archivos JSON en la carpeta `eventos/`.
- Asegúrate de seguir el formato JSON para evitar errores.

## Créditos

Este proyecto fue desarrollado para explorar eventos históricos de manera interactiva y educativa.