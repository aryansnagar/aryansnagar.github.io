// Get references to the button and the div
const toggleButton = document.getElementById("button");
const myDiv = document.getElementById("container4");

// Add a click event listener to the button
toggleButton.addEventListener("click", function () {
    // Toggle the div's display property
    if (myDiv.style.display === "none") {
        myDiv.style.display = "flex";
    } else {
        myDiv.style.display = "none";
    }
});
