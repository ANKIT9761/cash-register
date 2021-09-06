var bill = document.querySelector("#bill_amt");
var cash = document.querySelector("#cash_given");
var error = document.querySelector(".error");
var notesPlaces = document.querySelectorAll(".notes");

var button = document.querySelector("#btn");

button.addEventListener("click", handleClick);

function handleClick() {
  var billAmount = Number(bill.value);
  var cashPaid = Number(cash.value);
  console.log("Inside" + billAmount + " " + cashPaid);
  if (cashPaid < 0 || billAmount < 0) {
    error.style.display = "block";
    error.innerText = "Plz Enter  positive values";
  } else if (cashPaid < billAmount) {
    error.style.display = "block";
  } else {
    error.style.display = "none";
    calculateChange(billAmount, cashPaid);
  }
}

calculateChange = (billAmount, cashPaid) => {
  var notes = [2000, 500, 100, 20, 10, 5, 1];
  console.log("Inside");
  var i = 0;
  var returnCash = cashPaid - billAmount;
  for (let note of notes) {
    notesPlaces[i].innerText = Math.floor(returnCash / note);
    returnCash = returnCash % note;
    i++;
  }
};
