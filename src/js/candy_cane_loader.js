window.addEventListener("load", function () {
  console.log("Entering Candy Cane Loader event listener.");
  const loader = document.querySelector(".loader--cover");
  console.log("Attempting to remove Candy Lane Loader...");
  loader.className += " loader--hidden";
  console.log("Removed Candy Cane Loader.");
});
