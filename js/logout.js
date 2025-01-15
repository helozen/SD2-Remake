async function logout() {
  try {
    await firebase.auth().signOut();
    alert("Logged out successfully!");
    window.location.href = "index.html";
  } catch (error) {
    console.error(error.message);
    alert(`Error: ${error.message}`);
  }
}
