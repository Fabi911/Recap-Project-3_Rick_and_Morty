// function for Pagination
export default function NavPagination() {
  const pagination = document.createElement("span"); // Hier wird eine Span HTML Element erstellt
  pagination.classList.add("navigation__pagination"); // Der Span wird der CSS Klasse navigation_pagination hinzugefügt
  pagination.textContent = "1 / 1"; // Der Textinhalt wird auf den String 1/1 gesetzt
  return pagination; // Span Element wird zurück gegeben
}
