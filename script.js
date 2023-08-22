document.addEventListener("DOMContentLoaded", (event) => {
  let ratings = document.querySelectorAll(".ratings div[data-rating]");
  let selectedRating = null;

  let submitBtn = document.getElementById("submitBtn");

  //   select your rating
  ratings.forEach((rating) => {
    rating.addEventListener("click", (event) => {
      if (selectedRating) {
        // Reset the background color and text color of the previously selected rating
        selectedRating.style.backgroundColor = "";
        selectedRating.style.color = "";
      }

      rating.style.backgroundColor = "#fc7613";
      rating.style.color = "#fff";

      selectedRating = rating; // Set the current rating as the selected rating
    });
  });

  //   add event listener to buttone
  submitBtn.addEventListener(
    "click",
    // (event) => {
    //   let h2 = document.createElement("h2");
    //   let feedback = selectedRating ? selectedRating.dataset.rating : '0';

    //   if (feedback === "1") {
    //     h2.textContent = `You gave us ${feedback} star`;
    //   } else {
    //     h2.textContent = `You gave us ${feedback} stars`;
    //   }
    //   document.body.appendChild(h2);
    // },
    // { once: true }
  );
});
