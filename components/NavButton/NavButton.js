// Funktion für den NavButton
export default function NavButton(text, onClick) {
  const button = document.createElement("button"); // HTML Button Element wird erstellt
  button.classList.add("button"); // CSS Klasse Button hinzugefügt
  button.textContent = text; // Buttoninhalt wird auf den Wert von "text" gesetzt
  button.addEventListener("click", onClick); // Eventlistener Click
  return button; // Ausführen der Funktion
}
