const customers = [
  { card: "1234567890", pin: "1234", name: "John", balance: 1000 },
  { card: "1234567891", pin: "1235", name: "Cathy", balance: 500 }
];

let currentCustomer = null;

const login = () => {
  const cardInput = document.getElementById("card").value.trim();
  const pinInput = document.getElementById("pin").value.trim();
  const errorMsg = document.getElementById("error");

  const customer = customers.find(
    (cust) => cust.card === cardInput && cust.pin === pinInput
  );

  if (customer) {
    currentCustomer = customer;
    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("welcomeScreen").style.display = "block";
    document.getElementById("exitBtn").style.display = "block";
    document.getElementById("welcomeMsg").innerText = `Welcome, ${customer.name}!`;
    updateBalance();
  } else {
    errorMsg.innerText = "Invalid card or PIN. Please try again.";
  }
};

const performTransaction = () => {
  const type = document.getElementById("transactionType").value;
  const amount = parseFloat(document.getElementById("amount").value);
  const messageEl=document.getElementById("message");
  messageEl.innerText = "";

  if (isNaN(amount) || amount <= 0) {
    messageEl.style.color = "red";
    messageEl.innerText = "Please enter a valid amount.";
    return;
  }

  if (type === "deposit") {
    currentCustomer.balance += amount;
     messageEl.style.color = "green";
    messageEl.innerText = `₹${amount.toFixed(2)} deposited successfully.`;
  } else if (type === "withdraw") {
    if (amount > currentCustomer.balance) {
      messageEl.style.color = "red";
      messageEl.innerText = "Insufficient balance.";
      return;
    }
    currentCustomer.balance -= amount;
     messageEl.style.color = "green";
    messageEl.innerText = `₹${amount.toFixed(2)} withdrawn successfully.`;
  }

  updateBalance();
  document.getElementById("amount").value = "";
};

const updateBalance = () => {
  document.getElementById("balanceDisplay").innerText =
    `Current Balance: ₹${currentCustomer.balance.toFixed(2)}`;
};

const exit = () => {
  currentCustomer = null;
  document.getElementById("loginScreen").style.display = "block";
  document.getElementById("welcomeScreen").style.display = "none";
  document.getElementById("exitBtn").style.display = "none";
  document.getElementById("card").value = "";
  document.getElementById("pin").value = "";
  document.getElementById("error").innerText = "";
};