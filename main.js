let dailyTarget = 5;
let intake = 0;
let drinkUp = 0;
const water = document.querySelector(".water");
const alert = document.querySelector(".alert");
const curDate = document.querySelector("#curDate");
const curIntake = document.getElementById("curIntake");
const addIntake = document.querySelector(".add");
const minusIntake = document.querySelector(".minus");
const reset = document.querySelector(".start-over");

curDate.innerHTML = new Date().toLocaleDateString();
curDate.style.fontWeight = "bold";
curDate.style.color = "black";
curIntake.innerHTML = " 0L";
curIntake.style.fontWeight = "bold";
curIntake.style.color = "black";

addIntake.addEventListener("click", drink);
minusIntake.addEventListener("click", deduct);
reset.addEventListener("click", restart);

function drink() {
  intake++;
  drinkUp += 0.25;
  water.style.height = (intake / dailyTarget) * 100 + "px";

  if (drinkUp === dailyTarget) {
    addIntake.disabled = true;
  } else {
    minusIntake.disabled = false;
  }

  curIntake.innerHTML = drinkUp + "L";
}

function deduct() {
  intake--;
  drinkUp -= 0.25;
  water.style.height = (intake / dailyTarget) * 100 + "px";

  if (drinkUp === 0) {
    minusIntake.disabled = true;
  } else {
    addIntake.disabled = false;
  }
  curIntake.innerHTML = drinkUp + "L";
}

function restart() {
  intake = 0;
  drinkUp = 0;
  minusIntake.disabled = true;
  addIntake.disabled = false;

  water.style.height = "0px";
  curIntake.innerHTML = drinkUp + "L";
}
water.addEventListener("transitionend", () => {
  if (drinkUp === 5) {
    alert.style.display = "block";
  } else {
    alert.style.display = "none";
  }
});
