// Get all necessary DOM elements
let mainBalance = document.getElementById("main-balance");
let donatedBalance = document.getElementById("donate-balance");
let donateAmount = document.getElementById("donate-amount");
let donateBtn = document.getElementById("donate-btn");
let feniBalance = document.getElementById("feni-balance");
let feniAmount = document.getElementById("feni-amount");
let feniBtn = document.getElementById("feni-btn");
let quotaBalance = document.getElementById("quota-balance");
let quotaAmount = document.getElementById("quota-amount");
let quotaBtn = document.getElementById("quota-btn");
let villageBalance = document.getElementById("village-balance");
let villageAmount = document.getElementById("village-amount");
let villageBtn = document.getElementById("village-btn");
let historySection = document.getElementById("history-section");
let donation = document.getElementById("donation");
let history = document.getElementById("history");

// Reusable function for handling donations
function handleDonation(amountInput, balanceDisplay, causeBalanceDisplay, causeName) {
  let amountValue = parseFloat(amountInput.value.trim());
  if (isNaN(amountValue) || amountValue <= 0) {
    alert("Please enter a valid amount!");
    return;
  }

  let currentMainBalance = parseFloat(mainBalance.innerText);
  if (amountValue > currentMainBalance) {
    alert("Insufficient balance!");
    return;
  }

  // Update balances
  mainBalance.innerText = (currentMainBalance - amountValue);
  causeBalanceDisplay.innerText = (parseFloat(causeBalanceDisplay.innerText) + amountValue);

  // Add to history
  let div = document.createElement("article");
  div.classList.add("donation-entry", "shadow-md", "p-2");

  const h1 = document.createElement("h1");
  h1.classList.add("font-bold", "py-2");
  h1.innerText = `${amountValue} Taka is donated for ${causeName} the flood people`;
  div.appendChild(h1);

  let p = document.createElement("p");
  let options = { weekday: "long", year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" };
  p.innerText = new Intl.DateTimeFormat("en-US", options).format(new Date());
  div.appendChild(p);

  historySection.appendChild(div);

  // Clear input and show modal
  amountInput.value = "";
  document.getElementById("my-modal-4").showModal();
}

// Event listeners for each donation button
donateBtn.addEventListener("click", function () {
  handleDonation(donateAmount, mainBalance, donatedBalance, "Noakhali");
});

feniBtn.addEventListener("click", function () {
  handleDonation(feniAmount, mainBalance, feniBalance, "Feni");
});

quotaBtn.addEventListener("click", function () {
  handleDonation(quotaAmount, mainBalance, quotaBalance, "Quota");
});

villageBtn.addEventListener("click", function () {
  handleDonation(villageAmount, mainBalance, villageBalance, "Village");
});

// Toggle between donation and history views
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
