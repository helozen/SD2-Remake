async function login(event) {
  event.preventDefault();
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  try {
    const userCredential = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    const user = userCredential.user;
    console.log(`Logged in as: ${user.email}`);
    alert("Login successful!");
    window.location.href = "dashboard.html"; // Redirect to a protected page
  } catch (error) {
    console.error(error.message);
    alert(`Error: ${error.message}`);
  }
}
