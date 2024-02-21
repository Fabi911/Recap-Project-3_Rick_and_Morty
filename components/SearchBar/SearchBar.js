// Funktion für die Searchbar
export default function SearchBar(onSubmit) {
  const searchBar = document.createElement("form"); // hier wird ein neues HTML Element erstellt.
  searchBar.classList.add("search-bar"); // dem Element wird wird die CCS Klasse "search-bar" hinzugefügt
  searchBar.innerHTML = ` 
    <input name='query' class='search-bar__input' type="text" placeholder="search characters">
    <button class='search-bar__button'><img class='search-bar__icon' src="assets/magnifying-glass.png" alt=""></button>
    `; // Searchbar mit Button Element
  searchBar.addEventListener("submit", onSubmit); // Submit Ereignis wird hinzugefügt
  return searchBar; // Formularevent für die Suchleitste wird hinzugefügt
}
