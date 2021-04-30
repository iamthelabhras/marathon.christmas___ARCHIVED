// Vanilla JS Implementation of jQuery in Kevin Powell's YouTube Video
// GRMA https://stackoverflow.com/questions/53539461/how-do-i-use-vanilla-javascript-to-write-a-toggle-function-i-wrote-in-jquery //

const elementClicked = document.querySelector(".candy_cane-icon");
const elementYouWantToShow = document.querySelector(".candy_cane-links--container");
const elementYouWantToHide1 = document.querySelector(".candy_cane-nav-hide_everything_but_nav");
const elementYouWantToHide2 = document.querySelector(".candy_cane-toggle-hide");
// const elementToMakeClickable = document.querySelector(".candy_cane-nav");

// Open Mobile Nav Menu When Candy Cane Icon Is Clicked

elementClicked.addEventListener("click", ()=>{
  elementYouWantToShow.classList.toggle("candy_cane-links--container--open");
  console.log("Candy cane clicked.");
  elementYouWantToHide1.classList.toggle("candy_cane-nav-hide_everything_but_nav--hidden");
  console.log("Hide/unhide webpage div toggled.");
  elementYouWantToHide2.classList.toggle("candy_cane-toggle--hidden");
  console.log("Candy cane toggle hide/unhide toggled.")
  // elementToMakeClickable.classList.toggle("candy_cane-nav--allow_clicks");
  // console.log("Nav set/unset.")
});

// Close Mobile Nav Menu When Any Link Within It Is Clicked 
// GRMA https://flaviocopes.com/how-to-add-event-listener-multiple-elements-javascript/

document.querySelectorAll(".candy_cane-link").forEach(item => {
  item.addEventListener('click', event => {
    elementYouWantToShow.classList.toggle("candy_cane-links--container--open");
    elementYouWantToHide1.classList.toggle("candy_cane-nav-hide_everything_but_nav--hidden");
    elementYouWantToHide2.classList.toggle("candy_cane-toggle--hidden");
    console.log("Candy cane toggle hide/unhide toggled.")
  })
})



