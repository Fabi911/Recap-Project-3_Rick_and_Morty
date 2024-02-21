// Import aller Elemente
import CharacterCard from "./components/CharacterCard/CharacterCard.js";
import NavButton from "./components/NavButton/NavButton.js";
import NavPagination from "./components/NavPagination/NavPagination.js";
import SearchBar from "./components/SearchBar/SearchBar.js";

// // Bereits vorhandener Code
// const cardContainer = document.querySelector('[data-js="card-container"]');
// const searchBarContainer = document.querySelector(
//   '[data-js="search-bar-container"]'
// );
// const searchBar = document.querySelector('[data-js="search-bar"]');
// const navigation = document.querySelector('[data-js="navigation"]');
// const prevButton = document.querySelector('[data-js="button-prev"]');
// const nextButton = document.querySelector('[data-js="button-next"]');
// const pagination = document.querySelector('[data-js="pagination"]');

// Konstante für den CardContainer
const cardContainer = document.querySelector('[data-js="card-container"]');

// Konstante für die Searchbar
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);

// Konstante für die Navigation
const navigation = document.querySelector('[data-js="navigation"]');

// Const API Rick & Morthy link
const characterURL = "https://rickandmortyapi.com/api/character";

// Bereits vorhandener Code
// States
let maxPage = 42;
let page = 1;
let searchQuery = "";

// Konstante für die Searchbar
const searchBar = SearchBar((event) => {
  event.preventDefault();
  searchQuery = event.target.elements.query.value;
  page = 1;
  fetchCharacters();
});

searchBarContainer.append(searchBar);

// Konstante für den PreviusButton
const prevButton = NavButton("prev", () => {
  if (page > 1) {
    //console.log("page", page);
    page--;
    fetchCharacters();
  }
});

// Konstante für den NextButton
const nextButton = NavButton("next", () => {
  if (page < maxPage) {
    page++;
    //console.log("page", page);
    fetchCharacters();
  }
});

// Eventlistener für die Searchbar
searchBar.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputText = document.getElementById("inputText");
  //console.log("inputext.value", inputText.value);
  //console.log("inputext", inputText);
  searchQuery = inputText.value;
  //console.log("inputText-let-variable", searchQuery)
  page = 1;
  fetchCharacters();
});

// Konstante für Pagination
const pagination = NavPagination();

navigation.append(prevButton, pagination, nextButton);

// Async function

async function fetchCharacters() {
  try {
    const response = await fetch(
      `${characterURL}?page=${page}&name=${searchQuery}`
    );
    //console.log("page-url", `${characterURL}?page=${page}`)
    const data = await response.json();
    console.log("data", data);
    maxPage = data.info.pages;
    //console.log("maxPage", maxPage);
    const characters = data.results;
    //console.log("Charaters", characters);

    cardContainer.innerHTML = "";

    characters.forEach((character) => {
      const card = CharacterCard(character);
      cardContainer.appendChild(card);
      //console.log("Card aus dem forEach", card);
    });

    pagination.innerHTML = `${page} / ${maxPage}`;
  } catch (error) {
    console.error(error);
  }
}

fetchCharacters();
