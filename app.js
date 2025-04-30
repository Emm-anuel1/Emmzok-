// Import the Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD691sMLze0c-VYG2LEYjwzwNX5DbXTmr8",
  authDomain: "emmzok-af72b.firebaseapp.com",
  databaseURL: "https://emmzok-af72b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "emmzok-af72b",
  storageBucket: "emmzok-af72b.appspot.com",
  messagingSenderId: "337500143498",
  appId: "1:337500143498:web:394d526133fdf1267cd273",
  measurementId: "G-GMRCMNJ818"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Form handling
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("createAccountForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const gender = form.gender.value;
    const age = form.age.value;
    const birthday = form.birthday.value;

    if (!firstName || !lastName || !email || !gender || !age || !birthday) {
      alert("Please fill in all fields.");
      return;
    }

    const newUserRef = push(ref(db, "contactform"));

    set(newUserRef, {
      firstName,
      lastName,
      email,
      gender,
      age,
      birthday
    })
      .then(() => {
        alert("Account created successfully!");
        form.reset();
        window.location.href = "success.html"; // Replace with your target page
      })
      .catch((error) => {
        alert("Error: " + error.message);
        console.error("Firebase Error:", error);
      });
  });
});
