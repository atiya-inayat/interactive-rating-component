
let prevRating;

document.querySelectorAll("span").forEach((element) => {
  element.addEventListener("click", (e) => {
    const value = e.target.innerText;

    if (prevRating) {
      prevRating.style.backgroundColor = "#363f49";
      prevRating.style.color = "#fff";
    }

    element.style.backgroundColor = "#849ab3";
    element.style.color = "#000";

    prevRating = e.target;

    document.getElementById("rating-value").innerHTML = value;
  });
});


