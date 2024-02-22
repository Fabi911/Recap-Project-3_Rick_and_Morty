import { CharacterCard } from "./components/CharacterCard/CharacterCard.js";
// import NavButton from "./components/NavButton/NavButton.js";
// import { NavPagination } from "./components/NavPagination/NavPagination.js";
//import searchBar from "./components/SearchBar/SearchBar.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States

//let maxPage= '';
let page = 1;
let searchQuery = "";

loadMaxPages();

CharacterCard();

export async function fetchCharacters() {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?page=${page}`
  );
  if (!response.ok) {
    console.log("Network error");
    return null;
  }
  try {
    const json = await response.json();
    
    const results = json;
    //console.log(results);
    
    return results;
  } catch (error) {
    console.error(error);
    alert("'There's a Network error!");
    return null;
  }
   
}
 async function loadMaxPages() {
  const maxPage = await new Promise(resolve => setTimeout(() => resolve(fetchCharacters()), 500));
 pagination.textContent=`${page} / ${maxPage.info.pages}`
 
 // previousButton
 prevButton.addEventListener("click", (event) => {
  if (page < maxPage.info.pages) {
    page--;
    cardContainer.innerHTML=``;
    fetchCharacters();
    CharacterCard();
    pagination.textContent = page + " / " + maxPage.info.pages;
  }
});

//nextButton
nextButton.addEventListener("click", (event) => {
  if (page < maxPage.info.pages) {
    page++;
    cardContainer.innerHTML=``;
    fetchCharacters();
    CharacterCard();
    pagination.textContent = page + " / " + maxPage.info.pages;
  }
});
}

export async function createArrayWithResults() {
  const data = await new Promise(resolve => setTimeout(() => resolve(fetchCharacters()), 500));
  return data.results
}






