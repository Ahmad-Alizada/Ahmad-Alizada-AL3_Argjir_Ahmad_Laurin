/* JS Code, der nur auf der Kontakt Page verwendet wird */

const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", (event) => {
  console.log("click");
  event.preventDefault();
  validateForm();
});

function validateForm() {
  const name = document.forms["myForm"]["name"].value;
  const email = document.forms["myForm"]["email"].value;
  const phone = document.forms["myForm"]["phone"].value;
  const zip = document.forms["myForm"]["zip"].value;
  const city = document.forms["myForm"]["city"].value;
  const message = document.forms["myForm"]["message"].value;

  // Zurücksetzen vorheriger Fehlermeldungen
  document.getElementById("nameError").innerHTML = "";
  document.getElementById("emailError").innerHTML = "";
  document.getElementById("phoneError").innerHTML = "";
  document.getElementById("zipError").innerHTML = "";
  document.getElementById("cityError").innerHTML = "";
  document.getElementById("messageError").innerHTML = "";

  let isValid = true;

  // Name-Validierung
  if (name === "") {
    document.getElementById("nameError").innerHTML =
      "Der Name ist erforderlich";
    isValid = false;
  }

  // E-Mail-Validierung
  if (email === "") {
    document.getElementById("emailError").innerHTML =
      "Die E-Mail-Adresse ist erforderlich";
    isValid = false;
  }

  // Telefonnummer-Validierung
  if (phone === "") {
    document.getElementById("phoneError").innerHTML =
      "Die Telefonnummer ist erforderlich";
    isValid = false;
  } else if (!/^\d{10}$/.test(phone)) {
    document.getElementById("phoneError").innerHTML = "Ungültige Telefonnummer";
    isValid = false;
  }

  // PLZ-Validierung
  if (zip === "") {
    document.getElementById("zipError").innerHTML =
      "Die Postleitzahl ist erforderlich";
    isValid = false;
  } else if (!/^\d{4}$/.test(zip)) {
    document.getElementById("zipError").innerHTML = "Ungültige Postleitzahl";
    isValid = false;
  }

  // Stadt-Validierung
  if (city === "") {
    document.getElementById("cityError").innerHTML =
      "Die Stadt ist erforderlich";
    isValid = false;
  }

  // Nachricht-Validierung
  if (message === "") {
    document.getElementById("messageError").innerHTML =
      "Die Nachricht ist erforderlich";
    isValid = false;
  }

  // Wenn das Formular gültig ist, senden
  if (isValid) {
    databaseClient
      .insertInto("form", {
        name: name,
        phone: phone,
        email: email,
        zip: zip,
        city: city,
        message: message,
      })
      .then(() => {
        document.getElementById("confirmationMessage").style.display = "block";
        document.getElementById("myForm").reset();
      })
      .catch((error) => {
        console.error("Fehler beim Senden des Formulars: ", error);
      });
  }
}
