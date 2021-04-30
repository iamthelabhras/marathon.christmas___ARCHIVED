// Vanilla JS Implementation of jQuery in Kevin Powell's YouTube Video
// GRMA https://stackoverflow.com/questions/53539461/how-do-i-use-vanilla-javascript-to-write-a-toggle-function-i-wrote-in-jquery //

const elementClicked = document.querySelector(".candy_cane-toggle");
const elementYouWantToShow = document.querySelector(".candy_cane-links");
const elementHTML = document.querySelector(".candy_cane-html");
// const elementToMakeClickable = document.querySelector(".candy_cane-nav");

// Open Mobile Nav Menu When Candy Cane Icon Is Clicked

elementClicked.addEventListener("click", ()=>{
  elementYouWantToShow.classList.toggle("candy_cane-links--open");
  console.log("Candy cane clicked.")
  elementHTML.classList.toggle("candy_cane-html-overflow_y_hidden")
  console.log("HTML overflow-y toggled.")
  // elementToMakeClickable.classList.toggle("candy_cane-nav--allow_clicks");
  // console.log("Nav set/unset.")
});

// Close Mobile Nav Menu When Any Link Within It Is Clicked 
// GRMA https://flaviocopes.com/how-to-add-event-listener-multiple-elements-javascript/

document.querySelectorAll(".candy_cane-link").forEach(item => {
  item.addEventListener('click', event => {
    elementYouWantToShow.classList.toggle("candy_cane-links--open");
    elementHTML.classList.toggle("candy_cane-html-overflow_y_hidden");
    // elementToMakeClickable.classList.toggle("candy_cane-nav--allow_clicks");
  })
})



