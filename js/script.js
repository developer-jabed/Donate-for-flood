let mainBalance = document.getElementById('main-balance');
let donatedBalance = document.getElementById('donate-balance');
let donateAmount = document.getElementById('donate-amount');
let donateBtn = document.getElementById('donate-btn');
let feniBalance = document.getElementById('feni-balance');
let feniAmount = document.getElementById('feni-amount');
let feniBtn = document.getElementById('feni-btn');
let quotaBalance = document.getElementById('quota-balance');
let quotaAmount = document.getElementById('quota-amount');
let quotaBtn = document.getElementById('quota-btn');
let villageBalance = document.getElementById('village-balance');
let villageAmount = document.getElementById('village-amount');
let villageBtn = document.getElementById('village-btn');


// donation in noakhali
donateBtn.addEventListener("click", function () {
  let donationAmountValue = parseFloat(donateAmount.value);
  if (isNaN(donationAmountValue) || donationAmountValue <= 0) {
    alert("Please enter a valid amount!");
    return;
  }

  let currentMainBalance = parseFloat(mainBalance.innerText);
  if (donationAmountValue > currentMainBalance) {
    alert("Insufficient balance!");
    return;
  }

  // Update balances
  mainBalance.innerText = (currentMainBalance - donationAmountValue);
  donatedBalance.innerText = (parseFloat(donatedBalance.innerText) + donationAmountValue);

  // Clear input field
  donateAmount.value = "";
  alert("Donation Successful!");
  
});

// donation in feni

feniBtn.addEventListener("click", function () {
  let feniAmountValue = parseFloat(feniAmount.value);
  if (isNaN(feniAmountValue) || feniAmountValue <= 0) {
    alert("Please enter a valid amount!");
    return;
  }

  let currentMainBalance = parseFloat(mainBalance.innerText);
  if (feniAmountValue > currentMainBalance) {
    alert("Insufficient balance!");
    return;
  }

  // Update balances
  mainBalance.innerText = (currentMainBalance - feniAmountValue);
  feniBalance.innerText = (parseFloat(feniBalance.innerText) + feniAmountValue);

  // Clear input field
  feniAmount.value = "";
  alert("Donation Successful!");
});

// donation in quota

quotaBtn.addEventListener("click", function () {
  let quotaAmountValue = parseFloat(quotaAmount.value);
  if (isNaN(quotaAmountValue) || quotaAmountValue <= 0) {
    alert("Please enter a valid amount!");
    return;
  }

  let currentMainBalance = parseFloat(mainBalance.innerText);
  if (quotaAmountValue > currentMainBalance) {
    alert("Insufficient balance!");
    return;
  }

  // Update balances
  mainBalance.innerText = (currentMainBalance - quotaAmountValue);
  quotaBalance.innerText = (parseFloat(quotaBalance.innerText) + quotaAmountValue);

  // Clear input field
  quotaAmount.value = "";
  alert("Donation Successful!");
});


// donation in village

villageBtn.addEventListener("click", function () {
  let villageAmountValue = parseFloat(villageAmount.value);
  if (isNaN(villageAmountValue) || villageAmountValue <= 0) {
    alert("Please enter a valid amount!");
    return;
  }

  let currentMainBalance = parseFloat(mainBalance.innerText);
  if (villageAmountValue > currentMainBalance) {
    alert("Insufficient balance!");
    return;
  }

  // Update balances
  mainBalance.innerText = (currentMainBalance - villageAmountValue);
  villageBalance.innerText = (parseFloat(villageBalance.innerText) + villageAmountValue);

  // Clear input field
  villageAmount.value = "";
  alert("Donation Successful!");
});

// Toggle between donation and history views
let donation = document.getElementById("donation");
let history = document.getElementById("history");
history.addEventListener("click", function () {
  history.classList.add("bg-lime-400", "font-semibold");
  donation.classList.remove("bg-lime-400", "font-semibold");
  document.getElementById("main").classList.add("hidden");
  document.getElementById("history-section").classList.remove("hidden");
});
donation.addEventListener("click", function () {
  history.classList.remove("bg-lime-400", "font-semibold");
  donation.classList.add("bg-lime-400", "font-semibold");
  document.getElementById("main").classList.remove("hidden");
  document.getElementById("history-section").classList.add("hidden");
});
