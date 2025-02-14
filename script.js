const emailList = []; // Array to store email addresses

function submitForm(event) {
  event.preventDefault(); // Prevent the form from submitting the default way

  const emailInput = document.getElementById("email");
  const messageElement = document.getElementById("success-email");
  const errorElement = document.getElementById("error-message");

  const email = emailInput.value.trim();

  // Clear previous messages
  messageElement.textContent = "";
  errorElement.textContent = "";

  // Validate email field
  if (!email) {
    errorElement.textContent = "Email field cannot be empty.";
    return false; // Prevent form submission
  }

  // Regular expression for validating email format

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    errorElement.textContent = "Valid email required.";
    emailInput.classList.add("input-error");
    return false; // Prevent form submission
  }

  // Store the email in the array
  emailList.push(email);

  // If validation passes, show success message
  messageElement.textContent = email;
  emailInput.value = ""; // Clear the input field
  emailInput.classList.remove("input-error"); //remove error style
  // For debugging purposes, you can log the email list to the console
  console.log(emailList); // View the stored emails in the console

  document.getElementById("hidden-msg").style.display = "block";
  document.getElementById("main-content").style.display = "none";

  return false; // Prevent form submission
}

function dismissSuccessMsg() {
  document.getElementById("hidden-msg").style.display = "none";

  document.getElementById("main-content").style.display = "block";
}
