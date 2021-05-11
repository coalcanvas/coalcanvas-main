let searchText = "";

const titlesNodes = document.querySelectorAll("p");
const titles = Array.from(titlesNodes);

document.querySelector("#search-text").addEventListener("input", (e) => {
  searchText = e.target.value;

  setTimeout(searchFunction, 500);
});

const searchFunction = () => {
  const filteredTitles = titles.filter((title) =>
    title.innerText.toLowerCase().includes(searchText.toLowerCase())
  );
  const msg = document.querySelector("#feedback");
  msg.innerHTML = "";
  if (filteredTitles.length > 0) {
    requestAnimationFrame(() => {
      // wait just a bit
      filteredTitles[0].scrollIntoView();
    });
  } else {
    msg.textContent = "No match found";
  }
};
