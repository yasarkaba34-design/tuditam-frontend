// mega/SearchService.js

export async function fetchSearchResults(query) {
  const response = await fetch(`https://ykos.com.tr/api/search?q=${query}`);
  const data = await response.json();

  return data; // { results: [...], count: X }
}
