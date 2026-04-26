const ratingSection = document.querySelector(".rating-section");
const submitButton = document.querySelector(".submit-button");

const ratingState = document.getElementById("rating-state");
const thankYouState = document.getElementById("thank-you-state");
const userSelectionText = document.querySelector(".user-selection");

let selectedRating = null;

ratingSection.addEventListener("click", (e) => {
    const button = e.target.closest(".rating-button");
    if(!button) return;

    const prev = ratingSection.querySelector(".selected");
    if (prev) prev.classList.remove("selected");

    button.classList.add("selected");
    selectedRating = button.textContent;
});

submitButton.addEventListener("click", () => {
    if (!selectedRating) return;

    ratingState.classList.add("hidden");
    thankYouState.classList.remove("hidden");

    userSelectionText.textContent = `You selected ${selectedRating} out of 5`;
});