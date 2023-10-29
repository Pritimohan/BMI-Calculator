const form = document.querySelector("#form");

const calculateBtn = document.querySelector("#btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value); // parsenInt() is use for converting string to int
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector(".result");
  if (height == "" || isNaN(height) || height < 0) {
    result.innerHTML = `Please enter valid values`;
  } else if (weight == "" || isNaN(weight) || weight < 0) {
    result.innerHTML = `Please enter valid values`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = ` <h2>Your BMI : ${bmi} </h2>`;
  }

  
});

