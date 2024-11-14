// Import the Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
import { getFirestore, doc, getDoc, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMk112qoe44Ac81SjvAd4Y9XLvNwwtN3c",
  authDomain: "mymufti1080.firebaseapp.com",
  projectId: "mymufti1080",
  storageBucket: "mymufti1080.appspot.com",
  messagingSenderId: "558044786458",
  appId: "1:558044786458:web:df4441667e5d71c1dcc6a3",
  measurementId: "G-LY1D6LNG6F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get references to the HTML elements
const fetchDataButton = document.getElementById('fetchDataButton');
const titleDisplay = document.getElementById('title');
const descriptionDisplay = document.getElementById('description');

// Collection reference
const docRef = doc(db, "Mazhab", "Toheed");

// Fetch and log collection data (optional for debugging)
getDocs(colRef)
  .then((snapshot) => {
    console.log("Collection Data:", snapshot.docs);
  })
  .catch((error) => {
    console.error("Error fetching collection data:", error);
  });
fetchDataButton.addEventListener('click', async () => {
  // Reference to the 'Toheed' document in the 'Mazhab' collection
  const docRef = doc(db, "Mazhab", "Toheed");

  console.log("Fetching document:", docRef.path);  // Log the document reference path

  try {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      console.log("Document data:", data);  // Log the document data
      titleDisplay.innerText = `Title: ${data.title || "No title available"}`;
      descriptionDisplay.innerText = `Description: ${data.description || "No description available"}`;
    } else {
      console.log("No such document!");  // Log the failure case
      titleDisplay.innerText = "Document not found";
      descriptionDisplay.innerText = "Please check if the 'Mazhab' collection and 'Toheed' document exist.";
    }
  } catch (error) {
    console.error("Error fetching data:", error);  // Log any errors
    titleDisplay.innerText = "Error fetching data";
    descriptionDisplay.innerText = `Error: ${error.message}`;
  }
});
