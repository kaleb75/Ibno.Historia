// Modificar el código para mostrar un pop-up con la información completa al hacer clic en un evento
// Function to show the modal
function showModal(event) {
  const modal = document.getElementById("event-modal");
  document.getElementById("modal-title").textContent = event.title;
  document.getElementById("modal-year").textContent = `Año: ${event.year}`;
  document.getElementById("modal-subtitle").textContent = event.subtitle;
  document.getElementById("modal-text").textContent = event.text;
  const modalImage = document.getElementById("modal-image");
  if (event.image) {
    modalImage.src = event.image;
    modalImage.classList.remove("hidden");
  } else {
    modalImage.classList.add("hidden");
  }
  modal.classList.remove("hidden");
}

// Function to hide the modal
function hideModal() {
  const modal = document.getElementById("event-modal");
  modal.classList.add("hidden");
}

// Add event listener to close button
document.addEventListener("DOMContentLoaded", () => {
  const closeButton = document.querySelector(".close-button");
  closeButton.addEventListener("click", hideModal);
});

// Add event listener for closing modal with Escape key
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    hideModal();
  }
});

// Update event listener for showing modal
async function fetchEvents() {
  try {
    // Fetch Christian events
    const resChristian = await fetch("eventos/eventoscristianos.json");
    if (!resChristian.ok) {
      throw new Error("No se pudo cargar el archivo eventoscristianos.json.");
    }
    const christianEvents = await resChristian.json();

    // Fetch World events
    const resWorld = await fetch("eventos/eventosmundo.json");
    if (!resWorld.ok) {
      throw new Error("No se pudo cargar el archivo eventosmundo.json.");
    }
    const worldEvents = await resWorld.json();

    // Sort events by year
    christianEvents.sort((a, b) => a.year - b.year);
    worldEvents.sort((a, b) => a.year - b.year);

    const timelineContainer = document.querySelector(".timeline-horizontal");

    // Add Christian events
    christianEvents.forEach((event) => {
      const eventElement = document.createElement("div");
      eventElement.classList.add("event");

      eventElement.innerHTML = `
        <div class="dot"></div>
        <div class="content">
          <h3>${event.title}</h3>
          <p>${event.subtitle}</p>
          ${
            event.image
              ? `<img src="${event.image}" alt="${event.title}" class="event-image" />`
              : ""
          }
        </div>
      `;

      // Add click event to show modal
      eventElement.addEventListener("click", () => showModal(event));

      timelineContainer.appendChild(eventElement);
    });

    // Add a separator for World events
    const separator = document.createElement("div");
    separator.classList.add("separator");
    //    separator.innerHTML = `<h2>Eventos del Mundo</h2>`;
    timelineContainer.appendChild(separator);

    // Add World events to a separate section
    const worldTimelineContainer = document.querySelector(
      ".timeline-horizontal-world"
    );

    worldEvents.forEach((event) => {
      const eventElement = document.createElement("div");
      eventElement.classList.add("event");

      eventElement.innerHTML = `
        <div class="dot"></div>
        <div class="content">
          <h3>${event.title}</h3>
          <p>${event.subtitle}</p>
          ${
            event.image
              ? `<img src="${event.image}" alt="${event.title}" class="event-image" />`
              : ""
          }
        </div>
      `;

      // Add click event to show modal
      eventElement.addEventListener("click", () => showModal(event));

      worldTimelineContainer.appendChild(eventElement);
    });
  } catch (error) {
    console.error("Error al cargar los eventos:", error);
  }
}

fetchEvents();
