// Firebase signup logic for Customer
async function validateCustomerForm(event) {
  event.preventDefault();

  const name = document.getElementById("customer-name").value;
  const email = document.getElementById("customer-email").value;
  const password = document.getElementById("customer-password").value;
  const confirmPassword = document.getElementById(
    "customer-confirm-password"
  ).value;
  const location = document.getElementById("customer-location").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  try {
    const userCredential = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    const user = userCredential.user;

    // Additional user information (e.g., name and location)
    console.log(
      `Customer created: ${user.uid}, Name: ${name}, Location: ${location}`
    );
    alert("Customer account created successfully!");
    window.location.href = "login.html";
  } catch (error) {
    console.error(error.message);
    alert(`Error: ${error.message}`);
  }
}

// Firebase signup logic for Tradesperson
async function validateTradespersonForm(event) {
  event.preventDefault();

  const name = document.getElementById("tradesperson-name").value;
  const email = document.getElementById("tradesperson-email").value;
  const password = document.getElementById("tradesperson-password").value;
  const confirmPassword = document.getElementById(
    "tradesperson-confirm-password"
  ).value;
  const location = document.getElementById("tradesperson-location").value;
  const skill = document.getElementById("tradesperson-skill").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  try {
    const userCredential = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    const user = userCredential.user;

    // Additional tradesperson information (e.g., name, location, skill)
    console.log(
      `Tradesperson created: ${user.uid}, Name: ${name}, Skill: ${skill}, Location: ${location}`
    );
    alert("Tradesperson account created successfully!");
    window.location.href = "login.html";
  } catch (error) {
    console.error(error.message);
    alert(`Error: ${error.message}`);
  }
}

// Toggle visibility of Customer and Tradesperson forms
function showCustomerForm() {
  document.getElementById("customer-form").classList.remove("hidden");
  document.getElementById("tradesperson-form").classList.add("hidden");
  document.getElementById("customer-tab").classList.add("active-tab");
  document.getElementById("tradesperson-tab").classList.remove("active-tab");
}

function showTradespersonForm() {
  document.getElementById("customer-form").classList.add("hidden");
  document.getElementById("tradesperson-form").classList.remove("hidden");
  document.getElementById("customer-tab").classList.remove("active-tab");
  document.getElementById("tradesperson-tab").classList.add("active-tab");
}
