// import admin from "firebase-admin";
// import serviceAccount from "./serviceAccountKey.json";

// if (!admin.apps.length) {
//   try {
//     admin.initializeApp({
//       credential: admin.credential.cert(serviceAccount),
//       databaseURL: "https://datnes-68e8f.firebaseio.com",
//       storageBucket: "datnes-68e8f.appspot.com",
//     });
//   } catch (error) {
//     console.log("Firebase admin initialiazation errod", error.stack);
//   }
// }

// export default admin.firestore();

const { initializeApp, cert } = require("firebase-admin/app");
const { getStorage } = require("firebase-admin/storage");

const serviceAccount = require("./serviceAccountKey.json");

initializeApp({
  credential: cert(serviceAccount),
  storageBucket: "datnes-68e8f.appspot.com",
});

const bucket = getStorage().bucket();
